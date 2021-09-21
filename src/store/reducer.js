const store = {
  menu: {
    Борщ: ['говядина', 'капуста', 'свекла', 'картофель', 'лук'],
    Хинкали: ['мука', 'фарш', 'лук', 'перец'],
    Омлет: ['яйцо', 'мука', 'молоко', 'соль', 'масло'],
    'Салат-цезарь': ['курица', 'сыр', 'помидоры', 'яйца', 'сухари', 'соус'],
    Торт: ['яйца', 'мёд', 'сахар', 'мука', 'масло'],
  },
  selectedItem: 'Выберите блюдо',
  modalOpened: false,
  renderedList: [],
};

const reducer = (state = store, action) => {
  switch (action.type) {
    case 'SELECT_ITEM': {
      return { ...state, selectedItem: action.payload.selectedItem };
    }
    case 'RENDER_LIST': {
      return { ...state, renderedList: action.payload.renderedList };
    }
    case 'OPEN_MODAL': {
      return { ...state, modalOpened: action.payload.modalOpened };
    }
    default:
      return state;
  }
};

export default reducer;
