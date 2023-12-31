import { forwardRef } from "react";
import { Logo } from "../Logo/Logo";
import { ReactComponent as MenuSvg } from "../../images/svg/burgerMenu.svg";
import { ReactComponent as SearchSvg } from "../../images/svg/search-icon.svg";
import EditModal from "../Modals/EditModal";
import LogOutModal from "../Modals/LogOutModal";
import { UserInfo } from "../UserInfo/UserInfo";
import { INavList } from "../Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ToggleTheme from "../ToggleTheme/ThoggleTheme";
// import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
// import { logoutUser } from "../../redux/authSlice/authThunk";
// import { selectUserInfo } from "../../redux/authSlice/authSelectors";
import MainUserModal from "../Modals/MainUserModal";
import { useState } from "react";
import SessionEndModal from "../Modals/SessionEndModal";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export const Header = forwardRef<HTMLHeadElement>((_, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleOpenBurgerMenu = () => {
    setIsBurgerMenuOpen(true);
  };
  //  const handleCloseModal = () => {
  //    setIsOpen(false);
  //  };

  //   const handleOpenEditModal = () => {
  //     handleCloseModal();
  //     setIsEditModalOpen(true);
  //   };

  //   const handleOpenLogOutModal = () => {
  //     handleCloseModal();
  //     setIsLogOutModalOpen(true);
  //   };

  const navList: INavList[] = [
    { name: "Categories", route: "/categories" },
    { name: "Add Recipes", route: "/add" },
    { name: "My recipes", route: "/myRecipes" },
    { name: "Favorite", route: "/favorite" },
    { name: "Shopping list", route: "/shopping" },
  ];
  // const { _id: userId } = useAppSelector(selectUserInfo);
  // const dispatch = useAppDispatch();
  const location = useLocation();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-width: 756px)",
  });

  // const handleLogOut = () => {
  //   dispatch(logoutUser(userId));
  // };

  return (
    <header ref={ref} className="relative   w-full z-10  ">
      <div className="container mx-auto flex justify-between items-center w-full bg-transparent px-4 py-[21px] xl:px-[100px]">
        <div className="flex gap-[187px] items-center">
          <Link to="/">
            <Logo style="p-[6px] md:p-[7px] h-10 md:h-11 w-10 md:w-11 hover:bg-overlayBackdrop transition" />
          </Link>
          {isDesktop && (
            <nav>
              <ul className="flex gap-[30px]">
                {navList.map((item, index: number) => (
                  <li
                    key={index}
                    className={`font-main font-medium text-customXs  transition focus:text-accentMain dark:focus:text-accentMain  ${
                      location.pathname.includes("/recipe")
                        ? "dark:text-[#23262A] hover:text-accentMain dark:hover:text-accentMain"
                        : `${
                            item.route === location.pathname
                              ? "text-accentMain dark:text-accentMain"
                              : "text-[#23262A] dark:text-whiteText hover:text-accentMain dark:hover:text-accentMain"
                          }`
                    }  `}
                  >
                    <Link to={`${item.route}`}>{item.name}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/search">
                    <SearchSvg
                      className={`w-6 h-6 transition   focus:stroke-accentMain dark:focus:stroke-accentMain ${
                        location.pathname.includes("/recipe")
                          ? "stroke-accentDark dark:stroke-accentDark hover:stroke-accentMain dark:hover:stroke-accentMain"
                          : `${
                              "/search" === location.pathname
                                ? "stroke-accentMain dark:stroke-accentMain"
                                : "stroke-accentDark dark:stroke-whiteText hover:stroke-accentMain dark:hover:stroke-accentMain"
                            }`
                      }   `}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>

        <div className="flex items-center ">
          <div onClick={handleOpenModal} className="mr-6 md:mr-[50px]">
            <UserInfo />
          </div>

          <MainUserModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setIsEditModalOpen={setIsEditModalOpen}
            setIsLogOutModalOpen={setIsLogOutModalOpen}
          />
          <EditModal isOpen={isEditModalOpen} setIsOpen={setIsEditModalOpen} />
          <LogOutModal
            isOpen={isLogOutModalOpen}
            setIsOpen={setIsLogOutModalOpen}
          />
          <SessionEndModal />

          {isDesktop ? (
            <ToggleTheme />
          ) : (
            <>
              <MenuSvg
                onClick={handleOpenBurgerMenu}
                className={`stroke-accentDark  w-7 md:w-8 h-7 md:h-8 cursor-pointer ${
                  location.pathname.includes("/recipe") ||
                  ("/" === location.pathname && isTablet)
                    ? "dark:stroke-accentDark "
                    : "dark:stroke-whiteText"
                }`}
              />
              <BurgerMenu
                isOpen={isBurgerMenuOpen}
                setIsOpen={setIsBurgerMenuOpen}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
});
