import { combineReducers } from 'redux';
import ActionTypes from './actionsTypeDataLists';

const reducerIncomeData = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_INCOME_DATA:
      return payload;
    case ActionTypes.ADD_INCOME_ITEM:
      return [...state, payload];
    case ActionTypes.UPDATE_INCOME_ITEM:
      return [...state].map(item => (item.id === payload.id ? { ...payload.item } : item));

    default:
      return state;
  }
};
const reducerSpendingData = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SPENDING_DATA:
      return payload;
    case ActionTypes.ADD_SPENDING_ITEM:
      return [...state, payload];
    case ActionTypes.UPDATE_SPENDING_ITEM:
      console.log('payload.item', payload.item);
      console.log('payload.id', payload.id);
      return [...state].map(item => (item.id === payload.id ? { ...payload.item } : item));

    default:
      return state;
  }
};

export const dataReducer = combineReducers({
  income: reducerIncomeData,
  spending: reducerSpendingData,
});
