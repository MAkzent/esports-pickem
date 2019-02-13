import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegionBtn from '../../components/RegionBtn';
import Player from '../../components/Player';
import { REGIONS, playersMock } from '../../utils/playersMock';
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

    const selectedPlayers = playersMock.filter(player => {
      return player.region === selectedRegion
    })

    return selectedPlayers.map(player => <Player player={player}/>);
  }

  renderRegionButtons() {
    const { selectedRegion } = this.state;

    return REGIONS.map(region => 
      <RegionBtn 
        key={region}
        onClick={() => this.selectRegion(region)} 
        region={region}
        selected={selectedRegion === region}
      />
    )
  }

  render() {
    return (
      <div className="voting"> 
        <div className="voting__headline">Vote for players to represent your region's team</div>
        <div className="voting__title">Select your region to browse players.</div>
        <div className={"voting__region-btn-wrapper"}>
          {this.renderRegionButtons()}
        </div>
        <div className={"voting__players-wrapper"}>
          {this.filterAndRenderPlayers()}
        </div>
      </div>
    )
  }
}