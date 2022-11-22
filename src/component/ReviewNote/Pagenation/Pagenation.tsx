import { makePage } from "../../../lib/businessFn/makePage";
import styles from "./Pagenation.module.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

interface PagenationProps {
  current: number;
  totalAmount: number;
  contentUnit: number;
  pageUnit: number;
  eventHander: (page: number) => void;
}

const Pagenation = ({
  current,
  totalAmount,
  contentUnit,
  pageUnit,
  eventHander,
}: PagenationProps) => {
  return (
    <div className={styles.mainBlock}>
      {current <= 5 ? (
        <GrFormPrevious className={styles.ban} />
      ) : (
        <GrFormPrevious
          onClick={() =>
            eventHander((Math.ceil(current / pageUnit) - 2) * pageUnit + 1)
          }
        />
      )}
      <ul className={styles.pageBlock}>
        {makePage(current, totalAmount, contentUnit, pageUnit).map((page) => {
          return (
            <li
              onClick={() => eventHander(page)}
              className={`${styles.pageButton} ${
                page === current ? styles.selected : ""
              }`}
            >
              {page}
            </li>
          );
        })}
      </ul>
      {totalAmount - Math.ceil(current / pageUnit) * contentUnit * pageUnit <=
      0 ? (
        <GrFormNext className={styles.ban} />
      ) : (
        <GrFormNext
          onClick={() => {
            eventHander(Math.ceil(current / pageUnit) * pageUnit + 1);
          }}
        />
      )}
    </div>
  );
};

export default Pagenation;
