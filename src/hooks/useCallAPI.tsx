import { useEffect, useState } from "react";

export const useCallAPI = (api: string, dependency?: any) => {
  const [result, setResult] = useState(null);
  useEffect(
    () => {
      const fetchAPI = async () => {
        try {
          const res = await fetch(api);
          const result = await res.json();
          setResult(result);
        } catch (error) {
          throw new Error(error);
        }
      };
      fetchAPI();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependency ? dependency : []
  );

  return result;
};
