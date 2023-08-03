import { forwardRef } from "react";
import { Logo } from "../Logo/Logo";
import { ReactComponent as MenuSvg } from "../../images/svg/burgerMenu.svg";
import { ReactComponent as SearchSvg } from "../../images/svg/search-icon.svg";
import { UserInfo } from "../UserInfo/UserInfo";
import { INavList } from "../Footer/Footer";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import ToggleTheme from "../ToggleTheme/ThoggleTheme";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { logoutUser } from "../../redux/authSlice/authThunk";
import { selectUserInfo } from "../../redux/authSlice/authSelectors";

export const Header = forwardRef<HTMLHeadElement>((_, ref) => {
  const navList: INavList[] = [
    { name: "Categories", route: "/categories" },
    { name: "Add Recipes", route: "/add" },
    { name: "My recipes", route: "/myRecipes" },
    { name: "Favorite", route: "/favorite" },
    { name: "Shopping list", route: "/shopping" },
  ];
  const { _id: userId } = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  const handleLogOut = () => {
    dispatch(logoutUser(userId));
  };

  return (
    <header ref={ref} className="relative   w-full z-10 dark:bg-yellow-300 ">
      <div className="container mx-auto flex justify-between items-center w-full bg-transparent px-4 py-[21px] xl:px-[100px]">
        <Link to="/">
          <Logo style="p-[6px] md:p-[7px] h-10 md:h-11 w-10 md:w-11" />
        </Link>
        {isDesktop && (
          <nav>
            <ul className="flex gap-[30px]">
              {navList.map((item, index: number) => (
                <li
                  key={index}
                  className={`font-main font-medium text-customXs text-[#23262A] transition focus:text-accentMain ${
                    item.route === location.pathname
                      ? "text-accentMain"
                      : "hover:text-accentMain"
                  }`}
                >
                  <Link to={`${item.route}`}>{item.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/search">
                  <SearchSvg
                    className={`w-6 h-6 transition stroke-accentDark focus:stroke-accentMain  ${
                      "/search" === location.pathname
                        ? "stroke-accentMain"
                        : "hover:stroke-accentMain"
                    }`}
                  />
                </Link>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex items-center gap-6 md:gap-[50px]">
          <UserInfo />
          <button
            id="myModal"
            className="hidden"
            type="button"
            onClick={handleLogOut}
          >
            modal
          </button>
          {isDesktop ? (
            <ToggleTheme />
          ) : (
            <MenuSvg className="stroke-accentDark w-7 md:w-8 h-7 md:h-8 " />
          )}
        </div>
      </div>
    </header>
  );
});
