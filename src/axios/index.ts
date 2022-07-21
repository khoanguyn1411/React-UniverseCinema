import { configs } from "@/configs";
import axios from "axios";

const instance = axios.create({
  baseURL: configs.api.BASE_URL,
});

export const appAxios = {
  get: async (url: string, param?: any, isAll = false) => {
    const result = await instance.get(
      url,
      param
        ? {
            params: { api_key: configs.api.API_KEY, ...param },
          }
        : {
            params: { api_key: configs.api.API_KEY },
          }
    );
    if (isAll) {
      return result;
    }
    return result.data;
  },
  post: async (url: string, data: any) => {
    console.log(JSON.stringify(data));
    const result = await instance.post(
      `${url}?api_key=${configs.api.API_KEY}`,
      JSON.stringify(data)
    );
    return result;
  },
};
