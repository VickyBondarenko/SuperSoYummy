import { forwardRef } from "react";

export const Header = forwardRef<HTMLHeadElement>((_, ref) => {
  return (
    <header ref={ref} className="h-[64px] bg-transparent border-b-2">
      Header
    </header>
  );
});
