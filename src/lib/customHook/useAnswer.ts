import { useDispatch } from "react-redux";
import { setFail, setSuccess } from "../../store/quizStatus/reducer";

interface useAnswerProps {
  status: string;
  correctAnswer: string;
  order: number;
}

const useAnswer = ({ status, correctAnswer, order }: useAnswerProps) => {
  const dispatch = useDispatch();
  return (answer: string) => {
    if (status === "Progress") {
      dispatch(answer === correctAnswer ? setSuccess() : setFail(order));
    }
  };
};

export default useAnswer;
