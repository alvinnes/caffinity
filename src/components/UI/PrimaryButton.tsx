import { ReactNode } from "react";

type BtnHomeProps = {
  customStyle: string;
  text: string;
  link?: string;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler;
  disabledValue?: boolean;
};
const PrimaryButton = (props: BtnHomeProps) => {
  const { text, customStyle, onClick, disabledValue, link, icon } = props;
  return (
    <button
      onClick={onClick}
      disabled={disabledValue}
      className={`px-4 py-2.5 ${customStyle} text-white shadow-sm`}
    >
      <a href={link} className="flex items-center gap-2">
        {icon} {text}
      </a>
    </button>
  );
};

export default PrimaryButton;
