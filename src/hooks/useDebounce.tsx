import { useEffect, useState } from "react";

export const useDebounce = (searchValue: string) => {
  const [debounce, setDebounce] = useState<string>(searchValue);
  useEffect(() => {
    const setTimeOut = setTimeout(() => {
      setDebounce(searchValue);
    }, 400);

    return () => {
      clearTimeout(setTimeOut);
    };
  }, [searchValue]);
  return debounce;
};
