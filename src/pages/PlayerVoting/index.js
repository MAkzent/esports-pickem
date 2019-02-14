import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegionBtn from '../../components/RegionBtn';
import Player from '../../components/Player';
import { increasePlayerLikes, decreasePlayerLikes } from '../../utils/playersMock';
import './voting.scss';

export default class PlayerVoting extends Component {

  static propTypes = {
    isAdmin: PropTypes.bool.isRequired
  }
  static defaultProps = {
    isAdmin: false
  }

  state = {
    selectedRegion: null,
    selectedPlayers: [],
  }

  selectRegion(region) {
    this.setState({ selectedRegion: region })
  }

  filterAndRenderPlayers() {
    const { selectedRegion, selectedPlayers } = this.state;
    const { players, votationClosed } = this.props;

    const filteredPlayers = players.filter(player => {
      return player.region === selectedRegion
    })

    const totalVotesInRegion = filteredPlayers.reduce((totalVotes, player) => totalVotes + Number(player.likes), 0)

    return filteredPlayers.map(player => <Player 
        onClick={() => this.selectPlayer(player)}
        votationClosed={votationClosed} 
        totalVotesInRegion={totalVotesInRegion} 
        key={player.participantId} 
        player={player} 
        selected={selectedPlayers.includes(player)}
      />);
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
      copyOfSelectedPlayers.push(player);
      await increasePlayerLikes(player);
      return this.setState({ selectedPlayers: copyOfSelectedPlayers });
    }
  }

  increaseVoteCount(player) {

  }

  renderRegionButtons() {
    const { selectedRegion } = this.state;
    const { regions } = this.props;

    return regions.map(region => 
      <RegionBtn 
        key={region}
        onClick={() => this.selectRegion(region)} 
        region={region}
        selected={selectedRegion === region}
      />
    )
  }

  render() {
    const { selectedRegion } = this.state; 
    const { headline, description, emptyTitle } = this.props;

    return (
      <div className="voting"> 
        <div className="voting__headline">{headline}</div>
        <div className="voting__description">{description}</div>
        <div className={"voting__region-btn-wrapper"}>
          {this.renderRegionButtons()}
        </div>
        <div className={"voting__players-wrapper"}>
          {selectedRegion ? this.filterAndRenderPlayers() : <div className="voting__title">{emptyTitle}</div>}
        </div>
      </div>
    )
  }
}