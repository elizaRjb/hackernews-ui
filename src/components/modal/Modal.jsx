import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: true,
    };
  }

  closeModal = () => {
    this.setState({ isModalOpen: false });
    this.props.history.goBack();
  };

  render() {
    const { children } = this.props;
    const { isModalOpen } = this.state;

    if (isModalOpen) {
      document.getElementsByTagName('body')[0].style.overflow = 'hidden';

      return (
        <div className="modal">
          <div className="modal__backdrop" />
          <div className="modal__content">
            <button className="modal__close" title="Close" onClick={this.closeModal}>
              x
            </button>
            {children}
          </div>
        </div>
      );
    }

    return null;
  }
}

export default withRouter(Modal);
