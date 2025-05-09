import { ReactNode } from "react";

interface FeatureItemProps {
  title: string;
  text: string;
  icon: ReactNode;
}

const FeatureItem = (props: FeatureItemProps) => {
  const { title, text, icon } = props;
  return (
    <div className="flex w-11/12 flex-col items-center justify-center gap-4 text-center sm:w-100">
      {icon}
      <h2 className="font-outfit text-2xl font-semibold sm:text-nowrap">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
