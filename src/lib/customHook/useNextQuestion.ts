import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProgress, setWait } from "../../store/quizStatus/reducer";

interface useNextQuestionProps {
  order: number;
  setOrder: React.Dispatch<React.SetStateAction<number>>;
  quizListLength: number;
  setFinal: React.Dispatch<React.SetStateAction<boolean>>;
}

const useNextQuestion = ({
  order,
  setOrder,
  setFinal,
  quizListLength,
}: useNextQuestionProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return () => {
    if (order === quizListLength - 1) {
      setFinal(true);
      navigate("/result", { replace: true });
      dispatch(setWait());
    } else {
      setOrder(order + 1);
      dispatch(setProgress());
    }
  };
};

export default useNextQuestion;
