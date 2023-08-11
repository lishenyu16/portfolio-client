import axios from '../utils/axios';

const prefix = 'api/auth';

export const signIn = (email, password) => {
  return axios().post(`${prefix}/signin`, { email, password });
}

export const signUp = (email, password, username) => {
  return axios().post(`${prefix}/signUp`, { email, password, username });
}

export const confirmEmail = (verificationCode, userId) => {
  return axios().post(`${prefix}/confirmEmail`, { verificationCode, userId });
}

export const fetchUserInfoFromToken = (token) => {
  return axios().get(`${prefix}/userInfo/${token}`);
}