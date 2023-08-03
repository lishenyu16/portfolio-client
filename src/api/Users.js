//import axios from '../utils/axios';
import axios from 'axios';
const baseUrl = process.env.NODE_ENV === 'production' ? 'shenyu16.com' : 'http://localhost:3003';
export const fetchUsers = () => {
  return axios(`/api/auth/users`);
}

export const createUser = (user) => {
  return axios.post('/api/auth/addUser', {user});
}