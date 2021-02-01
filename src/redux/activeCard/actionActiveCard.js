export const ActionTypes = {
  SET_ITEM_ID: 'SET_ITEM_ID',
  SET_ITEM_CATEGORY: 'SET_ITEM_CATEGORY',
};
export const setItemId = id => ({
  type: ActionTypes.SET_ITEM_ID,
  payload: id,
});
export const setCategory = category => ({
  type: ActionTypes.SET_ITEM_CATEGORY,
  payload: category,
});
