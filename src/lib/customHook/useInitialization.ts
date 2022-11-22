import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeQuizList } from "../../store/quizList/reducer";
import { initializeQuiz } from "../../store/quizResult/reducer";
import { setWait } from "../../store/quizStatus/reducer";

const useInitial = (condition: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      if (condition) {
        dispatch(initializeQuizList());
        dispatch(initializeQuiz());
        dispatch(setWait());
      }
    };
  }, []);
};

export default useInitial;
