import { combineReducers } from 'redux';
import ActionTypes from './actionsTypeDataLists';

const reducerIncomeData = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_INCOME_DATA:
      return action.payload;
    case ActionTypes.ADD_INCOME_ITEM:
      return [...state, action.payload];

    default:
      return state;
  }
};
const reducerSpendingData = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.GET_SPENDING_DATA:
      return action.payload;
    case ActionTypes.ADD_SPENDING_ITEM:
      return [...state, action.payload];

    default:
      return state;
  }
};

export const dataReducer = combineReducers({
  income: reducerIncomeData,
  spending: reducerSpendingData,
});
