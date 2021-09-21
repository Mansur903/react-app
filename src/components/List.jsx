import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const mapStateToProps = (state) => {
  const { renderedList, modalOpened } = state;
  const props = {
    renderedList,
    modalOpened,
  };
  return props;
};

class List extends React.Component {
  render() {
    const { renderedList, modalOpened } = this.props;
    if (renderedList.length === 0 || modalOpened === true) {
      return null;
    }
    const renderListItem = (item) => <li className="list-group-item" key={ _.uniqueId() }>{item}</li>;
    return (
      <ul className="list-group">
        {
            renderedList.map((item) => (renderListItem(item)))
          }
      </ul>
    );
  };
};

export default connect(mapStateToProps)(List);
