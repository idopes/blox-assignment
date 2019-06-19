import axios from 'axios';
import {
  FETCH_USER_TOKENS,
  POST_USER_TOKENS,
  FETCH_USER_TOKENS_INFO
} from './types';
import { header } from '../config/axiosHeader';

export const fetchUserTokens = () => async dispatch => {
  const res = await axios.get('http://localhost:8888/user/tokens', header);
  const selectedTokens = reduceTokens(res.data.data);
  dispatch({
    type: FETCH_USER_TOKENS,
    payload: [...selectedTokens]
  });
};

export const postUserTokens = tokenId => async (dispatch,getState) => {
  const { selectedTokens } = getState();
  let tokenIds = [];
  if (selectedTokens.tokenIds.indexOf(tokenId) !== -1) {
    tokenIds = selectedTokens.tokenIds.filter(
      token => token !== tokenId
    );
  } else {
    tokenIds = [...selectedTokens.tokenIds, tokenId];
  }
  const res = await axios.post(
    'http://localhost:8888/user/tokens',
    JSON.stringify({ tokenIds }),
    header
  );
  const body = reduceTokens(res.data.data)
  dispatch({
    type: POST_USER_TOKENS,
    payload: body
  });
};

export const fetchChosenTokens = ({tokenIds}) => async dispatch => {
  const res = await axios.post(
    'http://localhost:8888/tokens-info',
    JSON.stringify({tokenIds}),
    header
  );
  dispatch({
    type: FETCH_USER_TOKENS_INFO,
    payload: res.data.data
  });
};

function reduceTokens(tokens) {
  return tokens.reduce((acc, token) => {
    acc.push(token.tokenId);
    return acc;
  }, []);
}
