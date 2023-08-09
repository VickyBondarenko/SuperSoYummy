import Modal from "react-modal";
import styles from "./MainModal.module.css";

interface IModalProps {
  isOpen: boolean;

  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditModal: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative z-[1000]">
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Модальное окно"
        overlayClassName={styles.modalOverlay}
        shouldCloseOnOverlayClick={true}
      >
        <h2>Заголовок модального окна</h2>
        <p>Содержимое модального окна</p>
        <button className="bg-red-700" onClick={handleCloseModal}>
          Закрыть
        </button>
      </Modal>
    </div>
  );
};

export default EditModal;
