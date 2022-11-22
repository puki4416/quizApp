import DeleteButton from "../DeleteButton/DeleteButton";
import styles from "./ProblemInfo.module.css";

interface InfoProps {
  category: string;
  difficulty: string;
  count: number;
  deleteContent: (index: number) => void;
  order: number;
}

const ProblemInfo = ({
  category,
  difficulty,
  count,
  deleteContent,
  order,
}: InfoProps) => {
  return (
    <ul className={styles.mainBlock}>
      <li key={"category"}>카테고리 : {category}</li>
      <li key={"difficulty"}>난이도 : {difficulty}</li>
      <li key={"count"}>오답횟수 : {count}</li>
      <li key={"deleteButton"} className={styles.buttonBlock}>
        <DeleteButton eventHandler={() => deleteContent(order)} />
      </li>
    </ul>
  );
};

export default ProblemInfo;
