export const ActionTypes = {
  SET_ITEM_ID: 'SET_ITEM_ID',
  SET_ITEM_CATEGORY: 'SET_ITEM_CATEGORY',
  RESET_ITEM_ID: 'RESET_ITEM_ID',
};
export const setItemId = id => ({
  type: ActionTypes.SET_ITEM_ID,
  payload: id,
});
export const setCategory = category => ({
  type: ActionTypes.SET_ITEM_CATEGORY,
  payload: category,
});
export const resetItemId = () => ({
  type: ActionTypes.RESET_ITEM_ID,
});
