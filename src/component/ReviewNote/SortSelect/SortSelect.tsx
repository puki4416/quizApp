import styles from "./SortSelect.module.css";

interface SortSelect {
  selectRef: React.RefObject<HTMLSelectElement>;
  eventHander: (type: string) => void;
}

const SortSelect = ({ selectRef, eventHander }: SortSelect) => {
  return (
    <select
      defaultValue={"recent"}
      className={styles.mainBlock}
      ref={selectRef}
      onChange={(e) => eventHander(e.target.value)}
    >
      <option value={"recent"} key={"recent"}>
        최신순
      </option>
      <option value={"manyCount"} key={"count"}>
        오답횟수순
      </option>
      <option value={"difficulty"} key={"difficulty"}>
        난이도순
      </option>
    </select>
  );
};

export default SortSelect;
