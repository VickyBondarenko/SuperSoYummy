import { toggleTheme } from "../../redux/themeSlice/themeSlise";
import { selectTheme } from "../../redux/themeSlice/themeSelector";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import styles from "./ThoggleTheme.module.css";

const ToggleTheme = () => {
  const darkMode = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`${styles.container} `}>
      <label className={styles.switch}>
        <input
          type="checkbox"
          id="themeSwitch"
          checked={darkMode}
          onChange={handleThemeToggle}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ToggleTheme;
