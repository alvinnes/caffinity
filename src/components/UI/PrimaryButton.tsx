import { ReactNode } from "react";

type BtnHomeProps = {
  bgColor: string;
  text: string;
  link: string;
  icon: ReactNode;
};
const PrimaryButton = (props: BtnHomeProps) => {
  const { text, bgColor, link, icon } = props;
  return (
    <button
      className={`px-6 py-1.5 ${bgColor} rounded-full font-semibold text-white shadow-sm`}
    >
      <a href={link} className="flex items-center gap-2">
        {icon} {text}
      </a>
    </button>
  );
};

export default PrimaryButton;
