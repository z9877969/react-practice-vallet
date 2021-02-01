import { combineReducers } from 'redux';
import { dataReducer } from './dataLists/reducerDataLists';
import { reducerCard } from './activeCard/reducerActiveCard';

const rootReducer = combineReducers({
  data: dataReducer,
  card: reducerCard,
});

export default rootReducer;
