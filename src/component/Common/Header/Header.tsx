import usePreventMove from "../../../lib/customHook/usePreventMove";
import styles from "./Header.module.css";

const Header = () => {
  const moveQuery = usePreventMove("/quiz");
  return (
    <header className={styles.mainBlock}>
      <div className={styles.logo} onClick={() => moveQuery("/", "홈")}>
        Quiz
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li onClick={() => moveQuery("/reviewnote", "오답노트")}>오답노트</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
