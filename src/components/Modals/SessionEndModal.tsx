import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutUser } from "../../redux/authSlice/authThunk";
import { selectUserInfo } from "../../redux/authSlice/authSelectors";
import styles from "./SessionEndModal.module.css";

const SessionEndModal: React.FC = () => {
  const { _id: userId } = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser(userId));
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className={`${styles.modalContainer} `} id="logOutModal">
      <div className={`${styles.modalContent} dark:bg-accentHalfDark`}>
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-center">
          <h2 className="font-main text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] dark:text-whiteText">
            Session timeout. Please, sign in again.
          </h2>

          <button
            type="button"
            className="px-[39px] py-[21px] rounded-md border border-accentMain text-whiteText dark:hover:text-accentMain  bg-accentMain  hover:bg-accentDark dark:hover:bg-whiteText dark:hover:border-accentMain font-main text-[14px] md:text-[16px] leading-[18px]"
            onClick={handleLogOut}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SessionEndModal;
