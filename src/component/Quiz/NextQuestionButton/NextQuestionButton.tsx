import { QUIZ_END } from "../../../lib/constant/quizState";
import styles from "./NextQuestionButton.module.css";

interface AnswerProps {
  eventHandler: () => void;
  children: React.ReactNode;
  status: string;
}

const NextQuestionButton = ({
  children,
  eventHandler,
  status,
}: AnswerProps) => {
  if (status === QUIZ_END) {
    return (
      <button className={styles.mainBlock} onClick={eventHandler}>
        {children}
      </button>
    );
  }
  return null;
};

export default NextQuestionButton;
