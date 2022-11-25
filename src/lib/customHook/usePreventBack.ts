import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ALRET_MOVE_BACK } from "../constant/alert";

interface usePreventBackProps {
  target: string;
}

const usePreventBack = ({ target }: usePreventBackProps) => {
  const navigate = useNavigate();

  const preventGoBack = useCallback(() => {
    if (window.confirm(ALRET_MOVE_BACK)) {
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
