import { forwardRef } from "react";
import { Logo } from "../Logo/Logo";
import { ReactComponent as MenuSvg } from "../../images/svg/burgerMenu.svg";
import { UserInfo } from "../UserInfo/UserInfo";

export const Header = forwardRef<HTMLHeadElement>((_, ref) => {
  return (
    <header ref={ref} className="  w-full">
      <div className="container mx-auto flex justify-between w-full bg-transparent px-4 pt-[21px]">
        <a href="/">
          <Logo style="p-[6px] md:p-[7px] h-10 md:h-11 w-10 md:w-11" />
        </a>
        <div className="flex items-center gap-6 md:gap-[50px] xl:gap-0">
          <UserInfo />
          <MenuSvg className="stroke-accentDark w-7 md:w-8 h-7 md:h-8 xl:hidden" />
        </div>
      </div>
    </header>
  );
});
