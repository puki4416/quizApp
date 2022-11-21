import styles from "./Info.module.css";

interface InfoProps {
  category: string;
  difficulty: string;
}

const Info = ({ category, difficulty }: InfoProps) => {
  return (
    <ul className={styles.mainBlock}>
      <li className={styles.subBlock}>카테고리 : {category}</li>
      <li className={styles.subBlock}>난이도 : {difficulty}</li>
    </ul>
  );
};

export default Info;
