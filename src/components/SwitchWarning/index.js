import React from 'react';
import PropTypes from 'prop-types';
import './switch.scss';

const SwitchWarning = ({onCancel, onAccept}) => {
  return (
    <div className="switch__wrapper">
      <div className="switch__text">
        <div className="switch__text--title">You can only vote for one region.</div>
        Switching regions will reset your current votes. Do you wish to proceed and vote in another region?
      </div>
      <div className="switch__buttons-wrapper">
        <div className="switch__cancel-btn" onClick={() => onCancel()}>Cancel</div>
        <div className="switch__accept-btn" onClick={() => onAccept()}>Accept</div>
      </div>
    </div>
  )
}

SwitchWarning.propTypes = {
  onClick: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
}

export default SwitchWarning;