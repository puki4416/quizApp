import { useLayoutEffect, useState } from "react";
import { QuizContentState } from "../../store/quizList/reducer";

interface QuizReview extends QuizContentState {
  count: string;
  date: Date;
}

const useReview = () => {
  const [reviews, setReviews] = useState<QuizReview[]>([]);
  useLayoutEffect(() => {
    const output = localStorage.getItem("wrongQuiz");
    const arr: QuizReview[] = output !== null ? JSON.parse(output) : [];
    setReviews(arr);
  }, []);
  return reviews;
};

export default useReview;
