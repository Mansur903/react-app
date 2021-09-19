/* eslint-disable */
import React from 'react';
import _ from 'lodash';
import Modal from './Modal';
import List from './List';

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        'Борщ': ['говядина', 'капуста', 'свекла', 'картофель', 'лук'],
        'Хинкали': ['мука', 'фарш', 'лук', 'перец'],
        'Омлет': ['яйцо', 'мука', 'молоко', 'соль', 'масло'],
        'Салат-цезарь': ['курица', 'сыр', 'помидоры', 'яйца', 'сухари', 'соус'],
        'Торт': ['яйца', 'мёд', 'сахар', 'мука', 'масло'],
      },
      selectedItem: 'Выберите блюдо',
      modalOpened: false,
      renderedList: [],
    }
  }

  selectItem = (e) => {
    let selectedDish = e.target.innerText;
    this.setState({ selectedItem: selectedDish })
  }

  renderList = () => {
    this.setState({renderedList: this.state.menu[this.state.selectedItem]})
  }

  openModal = () => {
    this.setState({modalOpened: true});
    setTimeout(() => this.setState({modalOpened: false}), 5000)
    
  }

  onClickSearch = () => {
    this.openModal();
    this.renderList();
  }

  render() {
    const {selectedItem} = this.state
    const renderItem = (item) => {
      return <button onClick={this.selectItem} key={ _.uniqueId() } className="dropdown-item">{item}</button>
    }

    if(this.state.modalOpened === true) {
      return <Modal />
    }
    return(
      <div className="dropdown mt-3">
        <button type="button" className="btn btn-primary btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {selectedItem}
        </button>
        <button onClick={this.onClickSearch} type="button" className="btn btn-outline-info btn-lg">Поиск</button>
        <div className="dropdown-menu">
          {
            Object.keys(this.state.menu).map((item) => {
              return(renderItem(item));
            })
          }
        </div>
        <List list={this.state.renderedList} />
      </div>
    )
  }
}