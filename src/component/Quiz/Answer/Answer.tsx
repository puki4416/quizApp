import { useRef } from "react";
import styles from "./Answer.module.css";
import { decode } from "html-entities";
import makeClassName from "../../../lib/businessFn/makeClassName";
import { QUIZ_END } from "../../../lib/constant/quizState";

interface AnswerProps {
  content: string;
  eventHandler: () => void;
  correct: boolean;
  status: string;
}

const Answer = ({ content, eventHandler, correct, status }: AnswerProps) => {
  const wrongCheck = useRef(false);

  return (
    <div
      className={`${styles.mainBlock} ${makeClassName(
        correct,
        wrongCheck.current,
        status,
        styles.correct,
        styles.wrong,
        QUIZ_END
      )}`}
      onClick={() => {
        eventHandler();
        if (!correct) wrongCheck.current = true;
      }}
    >
      {decode(content)}
    </div>
  );
};

export default Answer;
