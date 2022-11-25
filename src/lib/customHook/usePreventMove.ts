import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ALRET_MOVE_SELECTED } from "../constant/alert";

const usePreventMove = (preventPath: string) => {
  const navigate = useNavigate();
  const location = useLocation();
  return useCallback((path: string, target: string) => {
    if (location.pathname === preventPath) {
      if (window.confirm(`${target}${ALRET_MOVE_SELECTED}`)) {
        navigate(path);
      }
    } else {
      navigate(path);
    }
  }, []);
};

export default usePreventMove;
