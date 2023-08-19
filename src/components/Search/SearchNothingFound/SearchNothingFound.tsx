import React from "react";
import nothingFound from "../../../images/1placeholder.png";

interface INothingFoundProps {
  text: string;
}

export const SearchNothingFound: React.FC<INothingFoundProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 md:gap-8">
      <img
        src={nothingFound}
        className="w-[210px] h-[135px] md:w-[350px] md:h-[225px] "
      />
      <p className="text-black dark:text-whiteText text-opacity-50 text-[14px] tracking-[-0.28px] font-medium md:text-[24px] md:tracking-[-0.48px]">
        {text}
      </p>
    </div>
  );
};
