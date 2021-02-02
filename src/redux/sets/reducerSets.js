import moment from 'moment';
import { ActionTypes } from './actionSets';
import selectOptions from '../../utils/selectOptions';
const initialState = {
  date: moment().format('YYYY-MM-DD'),
  period: selectOptions.periodList.options[0].value,
};
export const reducerSets = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DATE:
      return {
        ...state,
        date: payload,
      };
    case ActionTypes.SET_PERIOD:
      return {
        ...state,
        period: payload,
      };

    default:
      return state;
  }
};
