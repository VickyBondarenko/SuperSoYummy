interface IBtn {
  text: string;
  style?: string;
}

export const AsimetricRoundedBtn: React.FC<IBtn> = ({ text, style }) => {
  return (
    <button
      type="button"
      className={`${`px-6 md:px-11  py-[12px] md:py-[22px] font-main text-whiteText text-[14px] md:text-[16px] leading-[21px] md:leading-[24px] border-2 rounded-tl-[24px] rounded-br-[24px] rounded-bl-[44px] rounded-tr-[44px]  `} ${style}`}
    >
      {text}
    </button>
  );
};
