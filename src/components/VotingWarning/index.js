import React from 'react';
import PropTypes from 'prop-types';
import './warning.scss';

const VotingWarning = ({onCancel, onAccept, title, text, alternativeAcceptText}) => {
  return (
    <div className="warning__wrapper">
      <div className="warning__description-wrapper">
        <div className="warning__title">{title}</div>
        <div className="warning__text">{text}</div>
      </div>
      <div className="warning__buttons-wrapper">
        {onCancel ? <div className="warning__cancel-btn" onClick={() => onCancel()}>Cancel</div> : null}
        <div className="warning__accept-btn" onClick={() => onAccept()}>
          {alternativeAcceptText ? alternativeAcceptText : "Accept"}
        </div>
      </div>
    </div>
  )
}

VotingWarning.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
  alternativeAcceptText: PropTypes.string,
}

export default VotingWarning;