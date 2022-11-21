import { useRef } from "react";
import { useSelector } from "react-redux";
import { amount, category, difficulty } from "../../../data/optionData";
import useStartQuiz from "../../../lib/customHook/useStartQuiz";
import { ReducerType } from "../../../store";
import Loading from "../Loading/Loading";
import QuizStartButton from "../QuizStartButton/QuizStartButton";
import SelectBox from "../SelectBox/SelectBox";
import styles from "./Body.module.css";

const Body = () => {
  const active = useSelector((state: ReducerType) => state.quizList.loading);
  const amountRef = useRef<HTMLSelectElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const difficultyRef = useRef<HTMLSelectElement>(null);
  const startQuizButtonEventHandler = useStartQuiz({
    amountRef,
    categoryRef,
    difficultyRef,
  });

  return (
    <div className={styles.mainBlock}>
      <h2 className={styles.title}>Quiz</h2>
      <SelectBox
        title={"문제수"}
        optionData={amount}
        defaultValue="10"
        selectRef={amountRef}
      />
      <SelectBox
        title={"카테고리"}
        optionData={category}
        defaultValue=""
        selectRef={categoryRef}
      />
      <SelectBox
        title={"난이도"}
        optionData={difficulty}
        defaultValue=""
        selectRef={difficultyRef}
      />
      <QuizStartButton eventHandler={startQuizButtonEventHandler}>
        퀴즈 풀기
      </QuizStartButton>
      <Loading active={active} />
    </div>
  );
};

export default Body;
