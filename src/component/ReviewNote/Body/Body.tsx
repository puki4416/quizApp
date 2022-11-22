import { useRef, useState } from "react";
import useReview from "../../../lib/customHook/useReview";
import Pagenation from "../Pagenation/Pagenation";
import ProblemInfo from "../ProblemInfo/ProblemInfo";
import QuestionAnswer from "../QuestionAnswer/QuestionAnswer";
import SortSelect from "../SortSelect/SortSelect";
import styles from "./Body.module.css";

const Body = () => {
  const { reviews, changeSort, deleteContent } = useReview();
  const selectRef = useRef<HTMLSelectElement>(null);
  const [page, setPage] = useState(1);
  return (
    <main className={styles.mainBlock}>
      <div className={styles.titleBlock}>
        <div className={styles.dummy}></div>
        <h2 className={styles.title}>오답노트</h2>
        <SortSelect selectRef={selectRef} eventHander={changeSort} />
      </div>
      {!reviews.length ? (
        <p className={styles.noResult}>추가된 오답이 없습니다</p>
      ) : (
        reviews.slice((page - 1) * 10, page * 10).map((review, index) => {
          return (
            <section key={review.question} className={styles.reviewBlock}>
              <ProblemInfo
                category={review.category}
                difficulty={review.difficulty}
                count={review.count}
                deleteContent={deleteContent}
                order={(page - 1) * 10 + index}
              />
              <QuestionAnswer
                question={review.question}
                answers={review.answers}
                correctAnswer={review.correctAnswer}
              />
            </section>
          );
        })
      )}
      <Pagenation
        current={page}
        totalAmount={reviews.length}
        contentUnit={10}
        pageUnit={5}
        eventHander={setPage}
      />
    </main>
  );
};

export default Body;
