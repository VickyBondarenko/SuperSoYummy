import React from "react";
import { PageTitle } from "../components/PageTitle/PageTitle";
import image404 from "../images/1error.png";

export const Page404: React.FC = () => {
  return (
    <section className="flex flex-col  gap-4 md:gap-8 px-4  pt-[50px] md:px-8 md:pb-[200px] xl:px-[99px]">
      <PageTitle title="" />
      <img
        src={image404}
        alt="image 404"
        className="w-[260px] h-[170px] md:w-[500px] md:h-[326px] mx-auto"
      />
      <div className="mx-auto">
        <p className="text-center dark:text-whiteText font-semibold tracking-[-0.36px] text-[18px] heading-[20px] md:tracking-[-0.48px] md:text-customBase md:pb-4">
          We are sorry,
        </p>
        <p className="text-customXs tracking-[-0.28px] md:text-customSm md:tracking-[-0.36px] dark:text-whiteText dark:text-opacity-50">
          but the page you were looking for can’t be found...
        </p>
      </div>
    </section>
  );
};
export default Page404;
