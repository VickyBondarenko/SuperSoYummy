import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleDarkMode } from "redux/theme/themeSlice";
// import { selectDarkMode } from "redux/theme/themeSelector";
import styles from "./ThoggleTheme.module.css";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  //   const darkMode = useSelector(selectDarkMode);
  //   const dispatch = useDispatch();
  //   const handleThemeToggle = () => {
  //     dispatch(toggleDarkMode());
  //   };

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
