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
  if (status === "End") {
    return (
      <div className={styles.mainBlock} onClick={eventHandler}>
        {children}
      </div>
    );
  }
  return null;
};

export default NextQuestionButton;
