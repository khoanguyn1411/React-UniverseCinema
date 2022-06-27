import { useEffect, useState } from "react";

export const useCallAPI = (api: string, dependency?: any) => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  useEffect(
    () => {
      const fetchAPI = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(api);
          const result = await res.json();
          setResult(result);
          setIsLoading(false);
        } catch (error) {
          throw new Error(error);
        }
      };
      fetchAPI();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependency ? dependency : []
  );

  return [result, isLoading];
};
