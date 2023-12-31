import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
// import { useAppSelector } from "../../hooks/reduxHooks";
import { selectUserInfo } from "../../redux/authSlice/authSelectors";
import { useLocation } from "react-router-dom";
import styles from "./UserInfo.module.css";
import { useEffect } from "react";
import { getCurrentUser } from "../../redux/authSlice/authThunk";
import { useMediaQuery } from "react-responsive";

export const UserInfo = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const { name: userName, avatarURL: userAvatar } =
    useAppSelector(selectUserInfo);

  const location = useLocation();
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <div className={styles.userInfo_conteiner}>
      <img
        className={styles.userInfo_avatar}
        src={userAvatar}
        alt="userAvatar"
      />

      <p
        className={`${
          styles.userInfo_userName
        } hover:text-accentMain dark:hover:text-accentMain ${
          ("/" === location.pathname && isDesktop) ||
          location.pathname.includes("/recipe")
            ? " "
            : "dark:text-whiteText"
        }`}
      >
        {userName}
      </p>
    </div>
  );
};
