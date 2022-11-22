import styles from "./ProblemInfo.module.css";

interface InfoProps {
  category: string;
  difficulty: string;
  count: number;
}

const ProblemInfo = ({ category, difficulty, count }: InfoProps) => {
  return (
    <ul className={styles.mainBlock}>
      <li>카테고리 : {category}</li>
      <li>난이도 : {difficulty}</li>
      <li>오답횟수 : {count}</li>
    </ul>
  );
};

export default ProblemInfo;
