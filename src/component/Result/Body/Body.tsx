import { useSelector } from "react-redux";
import { ReducerType } from "../../../store";
import styles from "./Body.module.css";
import { QuizContentState } from "../../../store/quizList/reducer";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";
import useSaveWrong from "../../../lib/customHook/useSaveWrong";
import TextInfo from "../TextInfo/TextInfo";
import useInitial from "../../../lib/customHook/useInitialization";

const Body = () => {
  const result = useSelector((state: ReducerType) => state.quizResult);
  const quizList = useSelector(
    (state: ReducerType) => state.quizList.content
  ) as QuizContentState[];
  useSaveWrong({ wrongNumbers: result.wrongNumbers, quizList });
  useInitial(true);
  return (
    <main className={styles.mainBlock}>
      <h2 className={styles.title}>퀴즈결과</h2>
      <Chart correctAmount={result.correct} wrongAmount={result.wrong} />
      <TextInfo
        startTime={result.startTime}
        correct={result.correct}
        wrong={result.wrong}
      />
      <Link to={"/reviewnote"} className={styles.moveButton}>
        오답노트로 이동하기
      </Link>
    </main>
  );
};

export default Body;
