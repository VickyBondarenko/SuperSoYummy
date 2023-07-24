import React from "react";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import styles from "./SocialLinks.module.css";

export const SocialLinks: React.FC = () => {
  return (
    <ul className={styles.social_link_list}>
      <li>
        <a href="https://www.facebook.com/" target="_blank">
          <BsFacebook className={styles.social_link_svg} size={20} />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/" target="_blank">
          <BsYoutube className={styles.social_link_svg} size={20} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/" target="_blank">
          <BsTwitter className={styles.social_link_svg} size={20} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" target="_blank">
          <BsInstagram className={styles.social_link_svg} size={20} />
        </a>
      </li>
    </ul>
  );
};
