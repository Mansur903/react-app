import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { selectItem, openModal, renderList } from '../actions';

const mapStateToProps = (state) => {
  const { menu, selectedItem, modalOpened } = state;
  const props = {
    menu,
    selectedItem,
    modalOpened,
  };
  return props;
};

class Dropdown extends React.Component {

  handleSelectItem = (e) => {
    let selectedDish = e.target.innerText;
    const { dispatch } = this.props;
    dispatch(selectItem({ selectedItem: selectedDish }));
  };

  handleRenderList = () => {
    const { dispatch, menu, selectedItem } = this.props;
    dispatch(renderList({ renderedList: menu[selectedItem] }));
  };

  handleOpenModal = () => {
    const { dispatch } = this.props;
    dispatch(openModal({ modalOpened: true }));
  };

  handleCloseModal = () => {
    const { dispatch } = this.props;
    setTimeout(() => {
      dispatch(openModal({ modalOpened: false }));
    }, 5000);
  };

  onClickSearch = () => {
    this.handleOpenModal();
    this.handleRenderList();
    this.handleCloseModal();
  }

  render() {
    const {menu, selectedItem, modalOpened} = this.props;
    
    const renderItem = (item) => {
      return <button onClick={this.handleSelectItem} key={ _.uniqueId() } className="dropdown-item">{item}</button>
    }

    if(modalOpened === true) {
      return null;
    }
    
    return(
      <div className="dropdown mt-3">
        <button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {selectedItem}
        </button>
        <button onClick={this.onClickSearch} type="button" className="btn btn-outline-info btn-lg">Поиск</button>
        <div className="dropdown-menu">
          {
            Object.keys(menu).map((item) => {
              return(renderItem(item));
            })
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Dropdown);