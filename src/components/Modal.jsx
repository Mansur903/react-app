import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  const { modalOpened } = state;
  const props = {
    modalOpened,
  };
  return props;
};

class Modal extends React.Component {
  render() {
    const { modalOpened } = this.props;
    if (modalOpened === false) {
      return null;
    }
    return (
      <div className="download-modal">
        <div className="download-modal__content">
          <h2>Загрузка</h2>
          <p>Пожалуйста, подождите...</p>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Modal);
