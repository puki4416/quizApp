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
      <h3 className={styles.question}>{decode(question)}</h3>
      <ul className={styles.answer}>
        {answers.map((answer, index) => (
          <li
            className={correctAnswer === answer ? styles.correct : ""}
            key={answer}
          >{`${index + 1}. ${decode(answer)}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionAnswer;
