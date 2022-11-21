import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getQuizList } from "../../store/quizList/reducer";

interface BodyHookProps {
  amountRef: React.RefObject<HTMLSelectElement>;
  categoryRef: React.RefObject<HTMLSelectElement>;
  difficultyRef: React.RefObject<HTMLSelectElement>;
}

const useStartQuiz = ({
  amountRef,
  categoryRef,
  difficultyRef,
}: BodyHookProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return () => {
    dispatch(
      getQuizList({
        amount: amountRef.current?.value as string,
        category: categoryRef.current?.value as string,
        difficulty: difficultyRef.current?.value as string,
        navigate,
      })
    );
  };
};

export default useStartQuiz;
