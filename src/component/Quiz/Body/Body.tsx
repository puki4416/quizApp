import { useState } from "react";
import { useSelector } from "react-redux";
import useAnswer from "../../../lib/customHook/useAnswer";
import useInitial from "../../../lib/customHook/useInitialization";
import useNextQuestion from "../../../lib/customHook/useNextQuestion";
import usePreventBack from "../../../lib/customHook/usePreventBack";
import usePreventClose from "../../../lib/customHook/usePreventClose";
import { ReducerType } from "../../../store";
import { QuizContentState } from "../../../store/quizList/reducer";
import Answer from "../Answer/Answer";
import Info from "../Info/Info";
import NextButton from "../NextQuestionButton/NextQuestionButton";
import Question from "../Question/Question";
import ResultModal from "../ResultModal/ResultModal";
import styles from "./Body.module.css";

const Body = () => {
  const quizList = useSelector(
    (state: ReducerType) => state.quizList.content
  ) as QuizContentState[];
  const { status } = useSelector((state: ReducerType) => state.quizStatus);
  const [order, setOrder] = useState(0);
  const [final, setFinal] = useState(false);
  const nextQuestionEventHandler = useNextQuestion({
    order,
    setOrder,
    quizListLength: quizList.length,
    setFinal,
  });
  const answerEventHadler = useAnswer({
    status,
    correctAnswer: quizList[order].correctAnswer,
    order,
  });
  usePreventBack({ target: "/quiz" });
  usePreventClose();
  useInitial(final);

  return (
    <main className={styles.mainBlock}>
      <Info
        category={quizList[order].category}
        difficulty={quizList[order].difficulty}
      />
      <Question content={quizList[order].question} order={order + 1} />
      {quizList[order].answers.map((answer) => {
        return (
          <Answer
            content={answer}
            eventHandler={() => answerEventHadler(answer)}
            correct={answer === quizList[order].correctAnswer}
            status={status}
            key={answer}
          />
        );
      })}
      <NextButton eventHandler={nextQuestionEventHandler} status={status}>
        다음
      </NextButton>
      <ResultModal status={status} />
    </main>
  );
};

export default Body;
