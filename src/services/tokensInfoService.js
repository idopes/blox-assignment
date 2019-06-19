import axios from 'axios';
import { header } from '../config/axiosHeader';

export const fetchAllTokens = async () => {
  const res = await axios.get('http://localhost:8888/tokens-info', header);
  return res.data.data;
};
