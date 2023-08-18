import Modal from "react-modal";

import { ReactComponent as CloseSvg } from "../../images/svg/closeMenuIcon.svg";
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
        className={styles.modalContent}
      >
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-center">
          <CloseSvg
            className="absolute top-[18px] right-[18px] w-5 md:w-6 h-5 md:h-6 stroke-accentDark cursor-pointer"
            onClick={handleCloseModal}
          />
          <h2 className="font-main text-[14px] md:text-[18px] leading-[18px] md:leading-[24px] dark:text-whiteText">
            Edit Modal
          </h2>

          <button
            type="button"
            className="w-[137px] md:w-[192px] px-[18px] md:px-[39px] py-[21px] rounded-md border border-inherit hover:border-accentDark text-accentDark dark:hover:text-accentMain  bg-accentGray  hover:bg-whiteText dark:hover:bg-whiteText dark:hover:border-accentMain font-main text-[14px] md:text-[16px] leading-[18px]"
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
