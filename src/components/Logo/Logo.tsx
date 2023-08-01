import { ReactComponent as LogoSvg } from "/src/images/svg/logosvg.svg";

interface ILogo {
  style?: string;
}

export const Logo: React.FC<ILogo> = ({ style }) => {
  return (
    <LogoSvg
      className={`${` bg-accentMain stroke-whiteText rounded-[12px] `} ${style} `}
    />
  );
};
