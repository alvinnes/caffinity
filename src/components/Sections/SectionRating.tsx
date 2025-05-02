const SectionRating = () => {
  return (
    <section className="flex w-full justify-center gap-10 bg-slate-100/30 py-10 sm:gap-20">
      <RatingItem rating="20+" description="Varian Kopi" />
      <RatingItem rating="25+" description="Penghargaan" />
      <RatingItem rating="120K" description="Testimoni" />
    </section>
  );
};

interface RatingItemProps {
  rating: string;
  description: string;
}

const RatingItem = (props: RatingItemProps) => {
  const { rating, description } = props;
  return (
    <div className="sm-35 flex flex-col items-center justify-center gap-2 sm:size-40">
      <h3 className="text-4xl font-bold text-slate-800 drop-shadow-sm sm:text-6xl">
        {rating}
      </h3>
      <p className="text-slate-700">{description}</p>
    </div>
  );
};

export default SectionRating;
