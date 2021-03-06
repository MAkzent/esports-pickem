import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { increasePlayerLikes, decreasePlayerLikes } from '../../utils/playersMock';
import RegionBtn from '../../components/RegionBtn';
import Player from '../../components/Player';
import Modal from '../../components/Modal';
import VotingWarning from '../../components/VotingWarning';
import LoginRequest from '../../components/LoginRequest';
import './voting.scss';

export default class PlayerVoting extends Component {

  static propTypes = {
    headline: PropTypes.string.isRequired,
    headlineClosed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    emptyTitle: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }

  static defaultProps = {
    isAdmin: false,
    isAuthenticated: false,
  }

  state = {
    votationClosed: false,
    selectedRegion: null,
    regionToBeSelected: null,
    selectedPlayers: [],
    showSwitchModal: false,
    showMaxVoteModal: false,
  }

  selectRegion(region) {
    if (!!this.state.selectedPlayers.length) {
      return this.setState({ showSwitchModal: true, regionToBeSelected: region })
    }
    this.setState({ selectedRegion: region, selectedPlayers: [] })
  }

  confirmSelectedRegion() {
    this.setState({ showSwitchModal: false, selectedRegion: this.state.regionToBeSelected, regionToBeSelected: null, selectedPlayers: [] })
  }

  filterAndRenderPlayers() {
    const { selectedRegion, selectedPlayers, votationClosed } = this.state;
    const { players } = this.props;

    const filteredPlayers = players.filter(player => {
      return player.region === selectedRegion
    })

    const totalVotesInRegion = filteredPlayers.reduce((totalVotes, player) => totalVotes + Number(player.likes), 0)

    return filteredPlayers.map(player => 
      <Player 
        onClick={() => this.selectPlayer(player)}
        votationClosed={votationClosed} 
        totalVotesInRegion={totalVotesInRegion} 
        key={player.participantId} 
        player={player} 
        selected={selectedPlayers.includes(player)}
      />
    );
  }

  async selectPlayer(player) {
    const { selectedPlayers } = this.state;
    const copyOfSelectedPlayers = [...selectedPlayers] || [];
    
    if (copyOfSelectedPlayers.includes(player)) {
      const index = copyOfSelectedPlayers.indexOf(player);
      copyOfSelectedPlayers.splice(index, 1);
      await decreasePlayerLikes(player);
      return this.setState({ selectedPlayers: copyOfSelectedPlayers });
    } else {
      if (selectedPlayers.length >= 3) {
        return this.setState({ showMaxVoteModal: true })
      }
      copyOfSelectedPlayers.push(player);
      await increasePlayerLikes(player);
      return this.setState({ selectedPlayers: copyOfSelectedPlayers });
    }
  }

  renderRegionButtons() {
    const { selectedRegion } = this.state;
    const { regions, isAuthenticated } = this.props;

    return regions.map(region => 
      <RegionBtn 
        key={region}
        onClick={() => this.selectRegion(region)} 
        region={region}
        selected={selectedRegion === region}
        isAuthenticated={isAuthenticated}
      />
    )
  }

  renderSwitchWarningModal() {
    return (
      <Modal> 
        <VotingWarning 
          title="You can only vote for one region."
          text={`Switching regions will reset your current votes. Do you wish to proceed and vote in ${this.state.regionToBeSelected}?`}
          onAccept={() => this.confirmSelectedRegion()}
          onCancel={() => this.setState({ showSwitchModal: false})}
        /> 
      </Modal>
    )
  }

  renderMaxVoteModal() {
    return (
      <Modal> 
        <VotingWarning 
          title="No more votes 😭"
          text="You may only vote for up to three players. We know it's hard, but you need to decide who you support the most."
          onAccept={() => this.setState({ showMaxVoteModal: false})}
          alternativeAcceptText="Understood"
        /> 
      </Modal>
    )
  }

  shouldRenderAdminButton() {
    const { votationClosed } = this.state;
    const { isAdmin } = this.props;

    return (
      <React.Fragment>
        {
          isAdmin ? 
          <button className="voting__close-voting-btn" disabled={votationClosed} onClick={() => this.setState({ votationClosed: true, selectedPlayers: [] }) }>
            {votationClosed ? "Voting Closed" : "Close Voting"}
          </button> 
          : null
        }
      </React.Fragment>
    )
  }

  render() {
    const { selectedRegion, showSwitchModal, showMaxVoteModal, votationClosed } = this.state; 
    const { headline, description, emptyTitle, headlineClosed, isAuthenticated, onAdminLogin, onLogin } = this.props;

    return (
      <div className="voting"> 
        {showSwitchModal ? this.renderSwitchWarningModal() : null}
        {showMaxVoteModal ? this.renderMaxVoteModal() : null}
        {this.shouldRenderAdminButton()}
        <div className="voting__headline">
          {votationClosed ? headlineClosed : headline}
        </div>
        <div className="voting__description">{description}</div>
        <div className={"voting__region-btn-wrapper"}>
          {this.renderRegionButtons(isAuthenticated)}
        </div>
        {!isAuthenticated ? <LoginRequest onAdminLogin={onAdminLogin} onLogin={onLogin}/> : 
          <div className={"voting__players-wrapper"}>
            {selectedRegion ? this.filterAndRenderPlayers() : <div className="voting__title">{emptyTitle}</div>}
          </div>
        }
      </div>
    )
  }
}