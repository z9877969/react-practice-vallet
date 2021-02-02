import { combineReducers } from 'redux';
import { dataReducer } from './dataLists/reducerDataLists';
import { reducerCard } from './activeCard/reducerActiveCard';
import { reducerSets } from './sets/reducerSets';

const rootReducer = combineReducers({
  data: dataReducer,
  card: reducerCard,
  sets: reducerSets,
});

export default rootReducer;
