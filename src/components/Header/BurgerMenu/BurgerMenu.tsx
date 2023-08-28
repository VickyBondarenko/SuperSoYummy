import Modal from "react-modal";
import { ReactComponent as CloseSvg } from "../../../images/svg/closeMenuIcon.svg";
import { ReactComponent as SearchSvg } from "../../../images/svg/search-icon.svg";
import { Logo } from "../../Logo/Logo";
import { INavList } from "../../Footer/Footer";
import styles from "./BurgerMenu.module.css";
import { Link } from "react-router-dom";
import ToggleTheme from "../../ToggleTheme/ThoggleTheme";

interface IModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navList: INavList[] = [
  { name: "Categories", route: "/categories" },
  { name: "Add Recipes", route: "/add" },
  { name: "My recipes", route: "/myRecipes" },
  { name: "Favorite", route: "/favorite" },
  { name: "Shopping list", route: "/shopping" },
];

const BurgerMenu: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const handleCloseModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="relative z-[1000] border-accentMain">
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Burger Menu"
        overlayClassName={styles.modalOverlay}
        shouldCloseOnOverlayClick={false}
        className={`${styles.modalContent} dark:bg-accentDarker`}
      >
        <CloseSvg
          className="absolute top-[22px] md:top-6 right-4 md:right-8 w-8  h-8  stroke-accentDark hover:stroke-accentMain  dark:hover:stroke-accentMain cursor-pointer dark:stroke-whiteText"
          onClick={handleCloseModal}
        />
        <Link to="/">
          <Logo style="w-[40px] md:w-[44px] h-[40px] md:h-[44px] p-[6px] md:p-[7px]" />
        </Link>
        <div className="">
          <nav>
            <ul className="flex flex-col justify-center items-center pt-[124px] gap-10">
              {navList.map((item, index: number) => (
                <li
                  key={index}
                  onClick={handleCloseModal}
                  className={`font-main font-medium text-[18px] md:text-[24px] leading-[18px] md:leading-6 text-[#23262A] transition focus:text-accentMain  dark:focus:text-accentMain    ${
                    item.route === location.pathname
                      ? `text-accentMain dark:text-accentMain`
                      : `hover:text-accentMain dark:hover:text-accentMain dark:text-whiteText`
                  }`}
                >
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              ))}
              <li
                onClick={handleCloseModal}
                className={`font-main font-medium text-[18px] md:text-[24px] leading-[18px] md:leading-6 text-[#23262A] transition focus:text-accentMain dark:focus:text-accentMain   ${
                  "/search" === location.pathname
                    ? "text-accentMain dark:text-accentMain stroke-accentMain dark:stroke-accentMain"
                    : "hover:text-accentMain dark:hover:text-accentMain hover:stroke-accentMain dark:hover:stroke-accentMain dark:text-whiteText"
                }`}
              >
                <Link to="/search" className="flex gap-1">
                  <SearchSvg
                    className={`w-5 h-5 md:w-6 md:h-6 transition stroke-accentDark  focus:stroke-accentMain dark:focus:stroke-accentMain  ${
                      "/search" === location.pathname
                        ? "stroke-accentMain dark:stroke-accentMain"
                        : "hover:stroke-accentMain dark:hover:stroke-accentMain dark:stroke-whiteText"
                    }`}
                  />
                  <p className=""> Search</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <ToggleTheme style="absolute bottom-[18px] md:bottom-8 left-4 md:left-8" />
      </Modal>
    </div>
  );
};

export default BurgerMenu;
