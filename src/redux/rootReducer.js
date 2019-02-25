import { combineReducers } from 'redux';
import { reducer } from '../views/Home/redux';

export default combineReducers({
    data: reducer,
  }
);

