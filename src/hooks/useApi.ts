import axios from "axios";
import { baseUrl } from "../data/urls";

const api = axios.create({
  baseURL: baseUrl
});

export const useApi = () => ({
  validateToken: async (token: string) => {
    const response = await api.post('/validate', { token });
    return response.data;
  },
  signin: async (email: string, password: string) => {
    const response = await api.post('/sigin', { email, password });
    return response.data;
  },
  signout: async () => {
    const response = await api.post('/logout');
    return response.data;
  }

});