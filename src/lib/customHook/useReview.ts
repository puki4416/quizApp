import { useEffect, useLayoutEffect, useState } from "react";
import { difficulty } from "../../data/difficultyOrder";
import { QuizContentState } from "../../store/quizList/reducer";

interface QuizReview extends QuizContentState {
  count: number;
  date: Date;
}

const useReview = () => {
  const [reviews, setReviews] = useState<QuizReview[]>([]);
  useLayoutEffect(() => {
    const output = localStorage.getItem("wrongQuiz");
    const arr: QuizReview[] = output !== null ? JSON.parse(output) : [];
    changeSort("recent", arr);
  }, []);

  const changeSort = (type: string, newreviews: QuizReview[] = reviews) => {
    const newReviews = newreviews.map((review) => {
      return { ...review, answers: [...review.answers] };
    });

    if (type === "manyCount") newReviews.sort((a, b) => b.count - a.count);
    if (type === "recent")
      newReviews.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
    if (type === "difficulty")
      newReviews.sort(
        (a, b) => difficulty[a.difficulty] - difficulty[b.difficulty]
      );

    setReviews(newReviews);
  };

  const deleteContent = (index: number) => {
    const newReviews = reviews.map((review) => {
      return { ...review, answers: [...review.answers] };
    });
    newReviews.splice(index, 1);
    setReviews(newReviews);
    localStorage.setItem("wrongQuiz", JSON.stringify(newReviews));
  };

  return { reviews, changeSort, deleteContent };
};

export default useReview;
