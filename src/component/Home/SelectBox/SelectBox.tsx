import styles from "./SelectBox.module.css";

interface SelectBoxProps {
  title: string;
  optionData: {
    value: string;
    viewData: string;
  }[];
  defaultValue: string;
  selectRef: React.RefObject<HTMLSelectElement>;
}

const SelectBox = ({
  title,
  optionData,
  defaultValue,
  selectRef,
}: SelectBoxProps) => {
  return (
    <section>
      <h3 className={styles.title}>{title}</h3>
      <select
        defaultValue={defaultValue}
        className={styles.select}
        ref={selectRef}
      >
        {optionData.map(({ value, viewData }) => {
          return (
            <option value={value} key={value}>
              {viewData}
            </option>
          );
        })}
      </select>
    </section>
  );
};

export default SelectBox;
