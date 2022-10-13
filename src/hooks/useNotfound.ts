import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNotFound = (value: any, isLoading: boolean) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return;
    if (value === undefined) {
      navigate("/notFound", { replace: true });
    }
  }, [isLoading]);
};

export default useNotFound;
