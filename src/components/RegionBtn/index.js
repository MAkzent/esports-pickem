import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './region-btn.scss';

const RegionBtn = ( {region, onClick, selected, isAuthenticated} ) => {

  return (
    <button 
      className={cn("region-btn", {
        "region-btn--selected": selected,
      })}
      onClick={onClick}
      disabled={!isAuthenticated}
    >
      {region}
    </button>
  )
}

RegionBtn.propTypes = {
  region: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default RegionBtn;