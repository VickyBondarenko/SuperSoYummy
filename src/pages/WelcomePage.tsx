import { Link } from "react-router-dom";
import { AsimetricRoundedBtn } from "../components/Buttons/AsimetricRoundedBtn";
import { Logo } from "../components/Logo/Logo";

export const WelcomePage = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center text-center px-[35px] md:px-[131px] xl:px-[450px]  bg-welcome_mob md:bg-welcome_tab xl:bg-welcome bg-cover  bg-center">
      <div className="block mx-auto">
        <Logo style="p-[5px] md:p-3 h-[54px] md:h-[68px] w-[54px] md:w-[68px]" />
      </div>
      <div>
        <h1 className="text-whiteText text-customLg font-semibold font-main  tracking-[-0.56px] pt-7 md:pt-11 pb-[14px]">
          Welcome to the app!
        </h1>
        <p className="block mx-auto w-[305px] md:w-[505px] xl:w-[540px] text-whiteText text-[14px] leading-[18px] md:text-[18px] md:leading-[24px]  font-main  tracking-[-0.36px] pb-11 md:pb-10">
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
        <div className="flex justify-center gap-3 md:gap-[18px]">
          <Link to="/register">
            <AsimetricRoundedBtn
              style="bg-accentMain border-transparent text-whiteText hover:bg-accentDark  focus:bg-accentDark transition"
              text="Registration"
            />
          </Link>
          <Link to="/login">
            <AsimetricRoundedBtn
              style="border-whiteText hover:border-accentMain text-whiteText hover:text-accentMain focus:border-accentMain focus:text-accentMain transition"
              text="Sign In"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
