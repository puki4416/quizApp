import { makeUseTime } from "../../../lib/businessFn/makeUseTime";
import styles from "./TextInfo.module.css";

interface TextInfoProps {
  startTime: Date | undefined;
  correct: number;
  wrong: number;
}

const TextInfo = ({ startTime, correct, wrong }: TextInfoProps) => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.text}>
        {`소요 시간 : 
      ${makeUseTime(
        new Date().getTime() -
          (startTime !== undefined ? startTime?.getTime() : 0)
      )}`}
      </div>
      <div className={styles.text}>{`정답 수 : ${correct}`}</div>
      <div className={styles.text}>{`오답 수 : ${wrong}`}</div>
    </div>
  );
};

export default TextInfo;
