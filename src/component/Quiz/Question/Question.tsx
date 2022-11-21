import styles from "./Question.module.css";
import { decode } from "html-entities";

interface QuesitonProps {
  content: string;
  order: number;
}

const Question = ({ content, order }: QuesitonProps) => {
  return (
    <div className={styles.mainBlock}>{`${order}. ${decode(content)}`}</div>
  );
};

export default Question;
