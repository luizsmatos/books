/* eslint-disable no-param-reassign */
import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const profile = localStorage.getItem('@ioasys:profile');
  config.headers = config.headers ?? {};

  if (profile) {
    const { token } = JSON.parse(profile);

    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
