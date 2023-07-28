import { useAppSelector } from "../../hooks/reduxHooks";
import { selectUserInfo } from "../../redux/authSlice/authSelectors";
import styles from "./UserInfo.module.css";

export const UserInfo = () => {
  const { name: userName, avatarURL: userAvatar } =
    useAppSelector(selectUserInfo);
  return (
    <div className={styles.userInfo_conteiner}>
      <img
        className={styles.userInfo_avatar}
        src={userAvatar}
        alt="userAvatar"
      />

      <p className={styles.userInfo_userName}>{userName}</p>
    </div>
  );
};
