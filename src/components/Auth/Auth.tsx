// import React from 'react'
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import AuthForm from "./Form";
import { ReactComponent as AuthBlackSvg } from "../../images/svg/authForm/Order-food-pana-black.svg";
import { ReactComponent as AuthWhiteSvg } from "../../images/svg/authForm/Order-food-pana-white.svg";

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

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <section className={styles.auth_wrapper}>
      {isDesktop ? (
        <AuthWhiteSvg className="w-[532px] h-[468px] " />
      ) : (
        <AuthBlackSvg className="w-[285px] h-[250px] md:w-[409px] md:h-[359px]" />
      )}
      <div className="flex-row justify-items-center">
        <AuthForm page={page} title={title} />
        <NavLink
          to={page === "signin" ? "/register" : "/login"}
          className=" block text-center decoration-inherit underline text-whiteText font-main text-customXs md:text-customSm xl:text-"
        >
          {redirect}
        </NavLink>
      </div>
    </section>
  );
};
