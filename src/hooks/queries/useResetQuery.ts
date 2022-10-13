import { useEffect } from "react";
import { UseQueryResult } from "react-query";

const useResetQuery = (query: UseQueryResult) => {
  useEffect(() => {
    return () => {
      query.remove();
    };
  }, []);
};
export default useResetQuery;
