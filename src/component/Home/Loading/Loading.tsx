import styles from "./Loading.module.css";
import "../../../imgs/spinner.gif";

interface LoadingProps {
  active: boolean;
}

const Loading = ({ active }: LoadingProps) => {
  if (active) {
    return (
      <div className={styles.mainBlock}>
        <img src="./spinner.gif" alt="spinner" className={styles.spinner} />
        <div className={styles.text}>퀴즈 문제를 생성중입니다</div>
      </div>
    );
  }
  return null;
};

export default Loading;
