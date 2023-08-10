import Modal from "react-modal";
import { ReactComponent as ArrowSvg } from "../../images/svg/arrow-right.svg";
import { ReactComponent as EditSvg } from "../../images/svg/edit-01.svg";
import { AsimetricRoundedBtn } from "../Buttons/AsimetricRoundedBtn";
import styles from "./MainModal.module.css";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogOutModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainUserModal: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  setIsEditModalOpen,
  setIsLogOutModalOpen,
}) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenEditModal = () => {
    handleCloseModal();
    setIsEditModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleOpenLogOutModal = () => {
    handleCloseModal();
    setIsLogOutModalOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  return (
    <div className="relative z-[1000] border-accentMain outline-none">
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Модальное окно"
        overlayClassName={styles.modalOverlay}
        shouldCloseOnOverlayClick={true}
        className="absolute top-[72px] md:top-[78px] right-[75px] md:right-[129px] xl:right-[211px]  bg-white rounded-lg p-[18px] border border-accentMain md:border-inherit "
      >
        <div
          className="flex justify-between items-center mb-6 md:mb-7 cursor-pointer hover:text-accentMain stroke-accentDark hover:stroke-accentMain"
          onClick={handleOpenEditModal}
        >
          <h3 className="text-customXs font-medium font-main">Edit profile</h3>
          <EditSvg className=" h-[14px]  w-[14px] " />
        </div>
        <div onClick={handleOpenLogOutModal}>
          <AsimetricRoundedBtn
            text="Log out"
            style=" flex items-center px-[25px]  md:px-8 md:py-[12px] md:text-[14px]  md:leading-[21px]   bg-accentMain border-transparent text-whiteText hover:bg-accentDark  focus:bg-accentDark transition"
          >
            <ArrowSvg className="pl-1 stroke-whiteText h-[20px]  w-[20px] " />
          </AsimetricRoundedBtn>
        </div>
      </Modal>
    </div>
  );
};

export default MainUserModal;
