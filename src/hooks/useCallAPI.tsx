import { appAxios } from "@/axios";
import { useEffect, useState } from "react";
export const useCallAPI = (api: string, params: any, dependency?: any) => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  useEffect(
    () => {
      const fetchAPI = async () => {
        try {
          setIsLoading(true);
          const result = await appAxios.get(api, params);
          // console.log(funcs.getAPI(api, ""));
          // const res = await fetch(funcs.getAPI(api, ""));
          // const result = await res.json();
          setResult(result);
          setIsLoading(false);
        } catch (error) {
          throw new Error("Something wrong" + error);
        }
      };
      fetchAPI();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependency ? dependency : []
  );

  return [result, isLoading];
};
