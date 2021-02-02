export const ActionTypes = {
  SET_DATE: 'SET_DATE',
  SET_PERIOD: 'SET_PERIOD',
};

export const setDate = date => ({
  type: ActionTypes.SET_DATE,
  payload: date,
});
export const setPeriod = period => ({
  type: ActionTypes.SET_PERIOD,
  payload: period,
});
