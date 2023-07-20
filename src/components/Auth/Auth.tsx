// import React from 'react'
import { NavLink } from "react-router-dom";
import MyForm from "./Form";
import styles from "./Auth.module.css";

interface FormProps {
  page: "signin" | "register";
}

export const Auth: React.FC<FormProps> = ({ page }) => {
  let redirect;
  let title;

  if (page === "register") {
    redirect = "Sign in";
    title = "Registration";
  } else {
    redirect = "Registration";
    title = "Sign In";
  }
  // // { (page === "register")?redirect="Registration":redirect="Log in" }
  //   }
  return (
    <div>
      <div className={styles.bgr_img}></div>
      {/* <SvgOrderWhite className={styles.bgr_img_big} /> */}
      <div className={styles.wrapper}>
        {/* <SvgOrderBlack className={styles.bgr_img_svg} /> */}

        <div className={styles.wrp_test}>
          <div className={styles.form_wrapper}>
            <h2 className={styles.form_title}>{title}</h2>

            <MyForm page={"register"} />
          </div>

          <NavLink
            to={page === "signin" ? "/register" : "/signin"}
            className={styles.auth_link}
          >
            {redirect}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
