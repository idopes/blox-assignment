import {
  FETCH_USER_TOKENS,
  POST_USER_TOKENS,
  FETCH_USER_TOKENS_INFO
} from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER_TOKENS:
      return { ...state, tokenIds: action.payload };
    case POST_USER_TOKENS:
      return { ...state, tokenIds: action.payload };
    case FETCH_USER_TOKENS_INFO:
      return { ...state, userTokenInfo: [...action.payload] };
    default:
      return state;
  }
}
