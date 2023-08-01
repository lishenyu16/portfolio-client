import axios from "axios";

export const fetchUsers = () => {
  return axios('http://localhost:3003/api/auth/user');
}

export const createUser = (user) => {
  return axios.post('http://localhost:3003/api/auth/addUser', {user});
}