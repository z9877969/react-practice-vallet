import { combineReducers } from 'redux';
import { ActionTypes } from './actionActiveCard';
export const reducerActiveId = (state = '', { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ITEM_ID:
      return payload;
    case ActionTypes.RESET_ITEM_ID:
      return '';

    default:
      return state;
  }
};
export const reducerActiveCategory = (state = '', { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ITEM_CATEGORY:
      return payload;

    default:
      return state;
  }
};

export const reducerCard = combineReducers({
  id: reducerActiveId,
  category: reducerActiveCategory,
});
