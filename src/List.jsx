/* eslint-disable */
import React from 'react';

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { list } = this.props;
    const renderListItem = (item) => <li className="list-group-item">{item}</li>;
    return (
      <ul className="list-group">
        {
            list.map((item) => (renderListItem(item)))
          }
      </ul>
    );
  }
}
