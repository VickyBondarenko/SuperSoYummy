import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer
      className={`${styles.footer_container} ${styles.footer_container_before}`}
    >
      <div className={styles.footer_content_wrapper}></div>
      <div className={`${styles.copywrite_wrapper} ${styles.copywrite_after}`}>
        <span className="mr-4 opacity-50">© 2023 All Rights Reserved. </span>
        <span className="opacity-50">Terms of Service</span>
      </div>
    </footer>
  );
};
