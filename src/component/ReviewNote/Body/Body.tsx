import { useRef } from "react";
import useReview from "../../../lib/customHook/useReview";
import ProblemInfo from "../ProblemInfo/ProblemInfo";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import SortSelect from "../SortSelect/SortSelect";
import styles from "./Body.module.css";

const Body = () => {
  const { reviews, changeSort } = useReview();
  const selectRef = useRef<HTMLSelectElement>(null);
  return (
    <div className={styles.mainBlock}>
      <div className={styles.titleBlock}>
        <div className={styles.dummy}></div>
        <div className={styles.title}>오답노트</div>
        <SortSelect selectRef={selectRef} eventHander={changeSort} />
      </div>
      {!reviews.length ? (
        <p className={styles.noResult}>추가된 오답이 없습니다</p>
      ) : (
        reviews.map((review) => {
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
        })
      )}
    </div>
  );
};

export default Body;
