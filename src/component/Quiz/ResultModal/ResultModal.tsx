import styles from "./ResultModal.module.css";
import { BiCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";

interface ResultModalProps {
  status: string;
}

const ResultModal = ({ status }: ResultModalProps) => {
  if (status === "Success" || status === "Fail") {
    return (
      <div className={styles.mainBlock}>
        {status === "Success" ? (
          <BiCircle color="#024bad" size={600} />
        ) : (
          <ImCross color={"red"} size={500} />
        )}
      </div>
    );
  }
  return null;
};

export default ResultModal;
