import styles from "./ResultModal.module.css";
import { BiCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { QUIZ_FAIL, QUIZ_SUCCESS } from "../../../lib/constant/quizState";

interface ResultModalProps {
  status: string;
}

const ResultModal = ({ status }: ResultModalProps) => {
  if (status === QUIZ_SUCCESS || status === QUIZ_FAIL) {
    return (
      <div className={styles.mainBlock}>
        {status === QUIZ_SUCCESS ? (
          <BiCircle color="#024bad" size={"80%"} />
        ) : (
          <ImCross color={"red"} size={"80%"} />
        )}
      </div>
    );
  }
  return null;
};

export default ResultModal;
