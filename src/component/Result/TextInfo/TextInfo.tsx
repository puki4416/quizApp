import { makeUseTime } from "../../../lib/businessFn/makeUseTime";
import styles from "./TextInfo.module.css";

interface TextInfoProps {
  startTime: Date | undefined;
  correct: number;
  wrong: number;
}

const TextInfo = ({ startTime, correct, wrong }: TextInfoProps) => {
  return (
    <ul className={styles.mainBlock}>
      <li className={styles.text}>
        {`소요 시간 : 
      ${makeUseTime(
        new Date().getTime() -
          (startTime !== undefined ? startTime?.getTime() : 0)
      )}`}
      </li>
      <li className={styles.text}>{`정답 수 : ${correct}`}</li>
      <li className={styles.text}>{`오답 수 : ${wrong}`}</li>
    </ul>
  );
};

export default TextInfo;
