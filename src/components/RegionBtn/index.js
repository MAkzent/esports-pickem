import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './region-btn.scss';

const RegionBtn = ( {region, onClick, selected} ) => {
  return (
    <div 
      className={cn("region-btn", {
        "region-btn--selected": selected,
      })}
      onClick={onClick}
    >
      {region}
    </div>
  )
}

RegionBtn.propTypes = {
  region: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default RegionBtn;