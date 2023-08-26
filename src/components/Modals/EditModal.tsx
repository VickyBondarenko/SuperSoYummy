import Modal from "react-modal";

import { ReactComponent as CloseSvg } from "../../images/svg/closeMenuIcon.svg";
import { EditUserInfo } from "../EditUserInfo/EditUserInfo";
import styles from "./EditModal.module.css";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
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
        className={`${styles.modalContent} dark:bg-accentHalfDark `}
      >
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-center ">
          <CloseSvg
            className="absolute top-[18px] right-[18px] w-5 md:w-6 h-5 md:h-6 stroke-accentDark dark:stroke-whiteText hover:stroke-accentMain dark:hover:stroke-accentMain cursor-pointer"
            onClick={handleCloseModal}
          />

          <EditUserInfo handleCloseModal={handleCloseModal} />
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
