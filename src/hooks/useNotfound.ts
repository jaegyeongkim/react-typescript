import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useNotFound = (value: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (value === undefined) {
      navigate("/notFound");
    }
  }, []);
};

export default useNotFound;
