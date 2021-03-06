import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './modal.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const { onClose, children } = this.props;

    return ReactDOM.createPortal(
      <div className="modal__overlay" onClick={onClose}>
        <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
