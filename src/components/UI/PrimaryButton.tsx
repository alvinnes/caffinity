import { ReactNode } from "react";

type BtnHomeProps = {
  customStyle: string;
  text: string;
  link: string;
  icon: ReactNode;
};
const PrimaryButton = (props: BtnHomeProps) => {
  const { text, customStyle, link, icon } = props;
  return (
    <button className={`px-4 py-2.5 ${customStyle} text-white shadow-sm`}>
      <a href={link} className="flex items-center gap-2">
        {icon} {text}
      </a>
    </button>
  );
};

export default PrimaryButton;
