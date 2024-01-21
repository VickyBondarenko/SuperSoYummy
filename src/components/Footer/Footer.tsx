import React from "react";
import styles from "./Footer.module.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { changeParam } from "../../redux/searchSlice/searchSlice";

import { ReactComponent as Logo } from "../../images/svg/logosvg.svg";

import { SubscribeForm } from "./SubscribeForm/SubscribeForm";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { AdvantageList } from "./AdvantageList/AdvantageList";

export interface INavList {
  name: string;
  route: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const navList: INavList[] = [
  { name: "Ingredients", route: "/search" },
  { name: "Add Recipes", route: "/add" },
  { name: "My recipes", route: "/myRecipes" },
  { name: "Favorite", route: "/favorite" },
  { name: "Categories", route: "/categories" },
  { name: "Shopping list", route: "/shopping" },
];

export const Footer: React.FC = () => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const dispatch = useAppDispatch();

  return (
    <footer
      className={`${styles.footer_container} ${styles.footer_container_before}`}
    >
      <div className={styles.footer_content_wrapper}>
        <div
          className={`${styles.footer_content_container} dark:bg-accentMain `}
        >
          <div className={styles.footer_title_wrapper}>
            <Link to="/" className={styles.footer_logo_wrapper}>
              <Logo className={styles.footer_logo} />
            </Link>
            <h2 className={styles.footer_title}>So Yummy</h2>
            {isTablet && <AdvantageList />}
          </div>
          <nav>
            <ul className={styles.nav_list}>
              {navList.map((item, index: number) => (
                <li
                  key={index}
                  onClick={() => dispatch(changeParam("Ingredient"))}
                  className={`${styles.nav_item} dark:hover:text-accentDark`}
                >
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <SubscribeForm />
          <SocialLinks />
        </div>
      </div>
      <div
        className={`${styles.copywrite_wrapper} ${styles.copywrite_after} dark:bg-accentDarker dark:text-whiteText`}
      >
        <span className="mr-4 opacity-50">© 2024 All Rights Reserved. </span>
        <span className="opacity-50">Terms of Service</span>
      </div>
    </footer>
  );
};
