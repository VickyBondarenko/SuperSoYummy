// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../redux/themeSlice/themeSlise";
import { selectTheme } from "../../redux/themeSlice/themeSelector";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import styles from "./ThoggleTheme.module.css";

const ToggleTheme = () => {
  // const [darkMode, setDarkMode] = useState(false);

  // const handleThemeToggle = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };

  const darkMode = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark_theme : ""}`}>
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
