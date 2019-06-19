import { LOGIN, LOGOUT, FETCH_USER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case LOGIN || FETCH_USER:
      return action.payload;
    default:
      return state;
  }
}
