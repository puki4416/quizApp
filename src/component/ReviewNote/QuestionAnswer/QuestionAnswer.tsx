import styles from "./QuestionAnswer.module.css";
import { decode } from "html-entities";

interface QuestionAnswerProps {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const QuestionAnswer = ({
  question,
  answers,
  correctAnswer,
}: QuestionAnswerProps) => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.question}>{decode(question)}</div>
      <div className={styles.answer}>
        {answers.map((answer, index) => (
          <div
            className={correctAnswer === answer ? styles.correct : ""}
            key={answer}
          >{`${index + 1}. ${decode(answer)}`}</div>
        ))}
      </div>
    </div>
  );
};

export default QuestionAnswer;
