import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePreventMove = (preventPath: string) => {
  const navigate = useNavigate();
  const location = useLocation();
  return useCallback((path: string, target: string) => {
    if (location.pathname === preventPath) {
      if (
        window.confirm(
          `${target}으로 이동하면 진행중인 정보가 초기화됩니다 정말 이동하시겠습니까?`
        )
      ) {
        navigate(path);
      }
    } else {
      navigate(path);
    }
  }, []);
};

export default usePreventMove;
