import { forwardRef } from "react";

export const Header = forwardRef<HTMLHeadElement>((_, ref) => {
  return (
    <header ref={ref} className="h-[100px] bg-slate-600">
      Header
    </header>
  );
});
