import Modal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutUser } from "../../redux/authSlice/authThunk";
import { selectUserInfo } from "../../redux/authSlice/authSelectors";
import { ReactComponent as CloseSvg } from "../../images/svg/closeMenuIcon.svg";
import styles from "./LogOutModal.module.css";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogOutModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const { _id: userId } = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logoutUser(userId));
    document.body.classList.remove("overflow-hidden");
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="relative z-[1000] border-accentMain">
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Модальное окно"
        overlayClassName={styles.modalOverlay}
        shouldCloseOnOverlayClick={false}
        className={styles.modalContent}
      >
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-center">
          <CloseSvg
            className="absolute top-[18px] right-[18px] w-5 md:w-6 h-5 md:h-6 stroke-accentDark cursor-pointer"
            onClick={handleCloseModal}
          />
          <h2 className="font-main text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] dark:text-whiteText">
            Are you sure you want to log out?
          </h2>
          <div className="flex gap-2 md:gap-4">
            <button
              type="button"
              className="w-[137px] md:w-[192px] px-[18px] md:px-[39px] py-[21px] rounded-md border border-accentMain text-whiteText dark:hover:text-accentMain  bg-accentMain  hover:bg-accentDark dark:hover:bg-whiteText dark:hover:border-accentMain font-main text-[14px] md:text-[16px] leading-[18px]"
              onClick={handleLogOut}
            >
              Log out
            </button>
            <button
              type="button"
              className="w-[137px] md:w-[192px] px-[18px] md:px-[39px] py-[21px] rounded-md border border-inherit hover:border-accentDark text-accentDark dark:hover:text-accentMain  bg-accentGray  hover:bg-whiteText dark:hover:bg-whiteText dark:hover:border-accentMain font-main text-[14px] md:text-[16px] leading-[18px]"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LogOutModal;
