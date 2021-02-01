import ActionTypes from './actionsTypeDataLists';

export const getIncomeData = data => ({
  type: ActionTypes.GET_INCOME_DATA,
  payload: data,
});
export const getSpendingData = data => ({
  type: ActionTypes.GET_SPENDING_DATA,
  payload: data,
});
export const addIncome = item => ({
  type: ActionTypes.ADD_INCOME_ITEM,
  payload: item,
});
export const addSpending = item => ({
  type: ActionTypes.ADD_SPENDING_ITEM,
  payload: item,
});
