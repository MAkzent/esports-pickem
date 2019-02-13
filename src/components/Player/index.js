import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './player.scss';

const RegionBtn = ( {player, selected} ) => {

  return (
    <div className="player__wrapper">
      <div className={cn("player", {
        "player--selected": selected,
      })}>
        {player.nickname}
        <div className="player__vote-count">{player.likes || 0} votes</div>
      </div>
    </div>
  )
}

RegionBtn.propTypes = {
  player: PropTypes.objectOf({
    nickname: PropTypes.string.isRequired,
  })
}

export default RegionBtn;