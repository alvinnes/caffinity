import { ReactNode } from "react";

interface FeatureItemProps {
  title: string;
  text: string;
  icon: ReactNode;
}

const FeatureItem = (props: FeatureItemProps) => {
  const { title, text, icon } = props;
  return (
    <div className="bg-coffe/50 shadow-coffe/30 flex h-60 w-11/12 flex-col items-center justify-center gap-2 rounded-xl p-2 text-center shadow-lg sm:w-100">
      <span className="text-slate-700">{icon}</span>
      <h2 className="font-outfit text-2xl font-semibold text-slate-700 sm:text-nowrap">
        {title}
      </h2>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;
