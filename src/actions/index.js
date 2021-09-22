export const selectItem = (item) => ({
  type: 'SELECT_ITEM',
  payload: item,
});

export const renderList = (list) => ({
  type: 'RENDER_LIST',
  payload: list,
});

export const openModal = (isOpened) => ({
  type: 'OPEN_MODAL',
  payload: isOpened,
});
