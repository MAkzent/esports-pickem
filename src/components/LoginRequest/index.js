import React from 'react';
import './request.scss';

const LoginRequest = ({ onAdminLogin, onLogin, }) => {

  return (
    <div className="request">
      <div className="request__headline">
        Please log in to vote.
      </div>
      <div className="request__btn-wrapper">
        <div className="request__login-btn" onClick={() => onLogin()}>Log in</div>
        <div className="request__login-btn" onClick={() => onAdminLogin()}>I'm an Admin</div>
      </div>
    </div>
  )
}

export default LoginRequest