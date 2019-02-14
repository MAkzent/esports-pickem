import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PlayerImage from '../StyledComponents/PlayerImage';
import './player.scss';

const Player = ({ player, selected, onClick, totalVotesInRegion, votationClosed }) => {

  const renderVotes = () => {
    if (Number(player.likes) === 1) {
      return `1 vote`
    }
    return `${player.likes || 0} votes`
  }

  const renderPercentageVoted = () => {
    return `${Math.round(player.likes / totalVotesInRegion * 10000) / 100}%`
  }

  const renderCountryFlag = (countryCode) => {
    switch (countryCode) {
      case 'jp':
        return "🇯🇵";
      case 'sg':
        return "🇸🇬";
      case 'th': 
        return "🇹🇭";
      case 'hk': 
        return "🇭🇰";
      case 'ch': 
        return "🇨🇳";
      case 'tw':
        return "🇹🇼";
      case 'ph':
        return "🇵🇭";
      default: 
        return "🌏";
    }
  }

  return (
    <div className="player__wrapper" onClick={() => !votationClosed && onClick()}>
     <div className="player__vote-count">{votationClosed ? renderPercentageVoted() : renderVotes()}</div>
      <div className={cn("player", {
        "player--selected": selected,
        "player--disabled ": votationClosed,
      })}>
        <div className="player__header-wrapper">
          <PlayerImage avatarUrl={player.avatarUrl}/>
          <div>
          <div className={cn("player__nick-name", {
            "player__nick-name--selected": selected,
          })}>
              {player.nickname}
            </div>
            <div className="player__flag">
              {renderCountryFlag(player.country)}
            </div>
          </div>
        </div>
        <div className="player__description">
          {player.message}
        </div>
      </div>
    </div>
  )
}

Player.propTypes = {
  player: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    teams: PropTypes.string.isRequired,
    participantId: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    likes: PropTypes.number,
    country: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  })
}

export default Player;