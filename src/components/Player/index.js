import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import PlayerImage from '../StyledComponents/PlayerImage';
import './player.scss';

const Player = ( {player, selected} ) => {

  const renderVotes = (votes) => {
    if (Number(votes) === 1) {
      return `1 vote`
    }
    return `${votes || 0} votes`
  }

  return (
    <div className="player__wrapper">
     <div className="player__vote-count">{renderVotes(player.likes)}</div>
      <div className={cn("player", {
        "player--selected": selected,
      })}>
        <PlayerImage avatarUrl={player.avatarUrl}/>
        <div className="player__nick-name">
          {player.nickname}
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
    likes: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
  })
}

export default Player;