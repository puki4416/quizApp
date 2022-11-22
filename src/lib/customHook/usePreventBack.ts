import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface usePreventBackProps {
  target: string;
}

const usePreventBack = ({ target }: usePreventBackProps) => {
  const navigate = useNavigate();

  const preventGoBack = useCallback(() => {
    if (
      window.confirm(
        "뒤로 이동하면 진행중인 정보가 초기화됩니다 정말 이동하시겠습니까?"
      )
    ) {
      navigate(-1);
    } else {
      window.history.pushState(null, "", target);
    }
  }, []);

  useEffect(() => {
    window.history.pushState(null, "", target);
    window.addEventListener("popstate", preventGoBack);
    return () => {
      window.removeEventListener("popstate", preventGoBack);
    };
  }, []);

  return { preventGoBack };
};

export default usePreventBack;
