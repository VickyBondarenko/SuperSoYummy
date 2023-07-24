import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../images/svg/logosvg.svg";
import { SubscribeForm } from "./SubscribeForm/SubscribeForm";
import { SocialLinks } from "../SocialLinks/SocialLinks";
import { AdvantageList } from "./AdvantageList/AdvantageList";
import { Link } from "react-router-dom";

interface INavList {
  name: string;
  route: string;
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

  return (
    <footer
      className={`${styles.footer_container} ${styles.footer_container_before}`}
    >
      <div className={styles.footer_content_wrapper}>
        <div className={styles.footer_content_container}>
          <div className={styles.footer_title_wrapper}>
            <div className={styles.footer_logo_wrapper}>
              <Link to="/">
                <Logo className={styles.footer_logo} />
              </Link>
            </div>
            <h2 className={styles.footer_title}>So Yummy</h2>
            {isTablet && <AdvantageList />}
          </div>
          <nav>
            <ul className={styles.nav_list}>
              {navList.map((item, index: number) => (
                <li key={index}>
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <SubscribeForm />
          <SocialLinks />
        </div>
      </div>
      <div className={`${styles.copywrite_wrapper} ${styles.copywrite_after}`}>
        <span className="mr-4 opacity-50">© 2023 All Rights Reserved. </span>
        <span className="opacity-50">Terms of Service</span>
      </div>
    </footer>
  );
};
