import { AxiosResponse } from 'axios';
import api from './api';

export const getProfile = async () => {
  try {
    let profile: AxiosResponse = await api.get(`/profile-data/1`);
    return Promise.resolve(profile.data);
  } catch (error) {
    return Promise.reject(error.data);
  }
};
