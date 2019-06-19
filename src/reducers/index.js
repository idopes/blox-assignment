import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tokensReducer from './tokensReducer';
import { LOGOUT } from '../actions/types';

const appReducer = combineReducers({
  user: authReducer,
  selectedTokens: tokensReducer
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = {};
  }
  return appReducer(state, action);
};

export default rootReducer;
