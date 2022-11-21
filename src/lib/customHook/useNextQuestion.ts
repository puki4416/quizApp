import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProgress, setWait } from "../../store/quizStatus/reducer";

interface useNextQuestionProps {
  order: number;
  setOrder: React.Dispatch<React.SetStateAction<number>>;
  quizListLength: number;
}

const useNextQuestion = ({
  order,
  setOrder,
  quizListLength,
}: useNextQuestionProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return () => {
    if (order === quizListLength - 1) {
      navigate("/result", { replace: true });
      dispatch(setWait());
    } else {
      setOrder(order + 1);
      dispatch(setProgress());
      console.log("asdf");
    }
  };
};

export default useNextQuestion;
