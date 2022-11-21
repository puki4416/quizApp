import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeQuizList } from "../../store/quizList/reducer";
import { initializeQuiz } from "../../store/quizResult/reducer";
import { setWait } from "../../store/quizStatus/reducer";

const useInitial = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("121");
    return () => {
      console.log("qwqwe");
      dispatch(initializeQuizList());
      dispatch(initializeQuiz());
      dispatch(setWait());
    };
  }, []);
};

export default useInitial;
