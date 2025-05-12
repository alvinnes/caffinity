import { ReactNode } from "react";

interface SecondaryBtnProps {
  icon: ReactNode;
  text: string;
  link: string;
  customStyle?: string;
}

const SecondaryBtn = (props: SecondaryBtnProps) => {
  const { icon, text, customStyle, link } = props;
  return (
    <button
      className={`relative flex w-fit items-center gap-2 rounded-sm px-4 py-2.5 ${customStyle}`}
    >
      <a href={link} className="flex items-center gap-2">
        {text}
        {icon}
      </a>
    </button>
  );
};

export default SecondaryBtn;
