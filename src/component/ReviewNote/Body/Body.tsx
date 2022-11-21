import useReview from "../../../lib/customHook/useReview";
import ProblemInfo from "../ProblemInfo/ProblemInfo";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import styles from "./Body.module.css";

const Body = () => {
  const reviews = useReview();

  return (
    <div className={styles.mainBlock}>
      <div className={styles.title}>오답노트</div>
      {reviews.map((review) => {
        return (
          <div key={review.question} className={styles.reviewBlock}>
            <ProblemInfo
              category={review.category}
              difficulty={review.difficulty}
              count={review.count}
            />
            <QuestionAnswer
              question={review.question}
              answers={review.answers}
              correctAnswer={review.correctAnswer}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Body;
