import { forwardRef } from "react";
import { Logo } from "../Logo/Logo";

export const Header = forwardRef<HTMLHeadElement>((_, ref) => {
  return (
    <header ref={ref} className="  w-full">
      <div className="container mx-auto flex justify-between w-full bg-transparent px-4 pt-[21px]">
        <Logo style="p-[6px] md:p-[7px] h-10 md:h-11 w-10 md:w-11" />
        <div className="flex gap-6">
          <div>User info</div>
          <div>Burger menu</div>
        </div>
      </div>
    </header>
  );
});
