import { Coffee, Medal, UsersThree } from "@phosphor-icons/react";
import { ReactNode } from "react";

const SectionRating = () => {
  return (
    <section className="flex w-full justify-center gap-10 bg-secondary py-14 sm:gap-20">
      <RatingItem rating="20+" description="Varian Kopi" icon={<Coffee />} />
      <RatingItem rating="25+" description="Penghargaan" icon={<Medal />} />
      <RatingItem rating="120K" description="Testimoni" icon={<UsersThree />} />
    </section>
  );
};

interface RatingItemProps {
  rating: string;
  description: string;
  icon: ReactNode;
}

const RatingItem = (props: RatingItemProps) => {
  const { rating, description, icon } = props;
  return (
    <div className=" flex flex-col items-center justify-center gap-2 sm:size-45">
      <h3 className="flex items-center gap-2 text-2xl font-bold text-slate-800 drop-shadow-sm sm:gap-4 sm:text-6xl">
        {icon}
        {rating}
      </h3>
      <p className="sm:text-lg text-sm text-slate-700">{description}</p>
    </div>
  );
};

export default SectionRating;
