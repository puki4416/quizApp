import styles from "./QuizStartButton.module.css";

interface QuizStartButtonProps {
  children: string;
  eventHandler: () => void;
}

const QuizStartButton = ({ children, eventHandler }: QuizStartButtonProps) => {
  return (
    <button onClick={eventHandler} className={styles.mainBlock}>
      {children}
    </button>
  );
};

export default QuizStartButton;
