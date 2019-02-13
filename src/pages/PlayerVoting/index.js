import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegionBtn from '../../components/RegionBtn';
import Player from '../../components/Player';
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
  }

  selectRegion(region) {
    this.setState({selectedRegion: region})
  }

  filterAndRenderPlayers() {
    const { selectedRegion } = this.state;
    const { players } = this.props;

    const selectedPlayers = players.filter(player => {
      return player.region === selectedRegion
    })

    return selectedPlayers.map(player => <Player key={player.participantId} player={player}/>);
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