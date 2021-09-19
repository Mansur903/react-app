import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
