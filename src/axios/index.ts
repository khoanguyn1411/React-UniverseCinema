import { configs } from "@/configs";
import axios from "axios";

export const instance = axios.create({
  baseURL: configs.api.BASE_URL,
});

export const appAxios = {
  get: async (url: string, param?: any) => {
    const result = await instance.get(url, {
      params: { api_key: configs.api.API_KEY, ...param },
    });
    return result.data;
  },
};
