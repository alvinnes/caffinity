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
      <span className="text-coffe">{icon}</span>
      <h2 className="font-outfit text-2xl text-slate-700 font-semibold sm:text-nowrap">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
