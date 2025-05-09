import { ReactNode } from "react";

interface FeatureItemProps {
  title: string;
  text: string;
  icon: ReactNode;
}

const FeatureItem = (props: FeatureItemProps) => {
  const { title, text, icon } = props;
  return (
    <div className="flex w-100 flex-col items-center justify-center gap-4 text-center">
      {icon}
      <h2 className="font-outfit text-2xl font-semibold text-nowrap">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
