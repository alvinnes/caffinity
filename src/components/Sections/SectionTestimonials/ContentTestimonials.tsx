import { Star } from "@phosphor-icons/react";
import { TestimonialsDatas } from "../../services/Testimonials";

interface ContentTestimonialsProps {
  testimoni: TestimonialsDatas;
}

const ContentTestimonials = (props: ContentTestimonialsProps) => {
  const { testimoni } = props;
  return (
    <div className="mx-auto flex h-75 w-80 flex-col justify-between rounded-md bg-white p-3 shadow-xs shadow-slate-300">
      <h2 className="text-2xl font-semibold text-slate-700">
        {testimoni.title}
      </h2>
      <div className="flex items-center gap-1">
        <Star size={15} className="text-orange-300" weight="fill" />
        <Star size={15} className="text-orange-300" weight="fill" />
        <Star size={15} className="text-orange-300" weight="fill" />
        <Star size={15} className="text-orange-300" weight="fill" />
        <Star size={15} className="text-orange-300" weight="fill" />
        <p className="font-outfit text-sm ml-2">{testimoni.rate}</p>
      </div>

      <p className="line-clamp-5 text-sm leading-6 text-ellipsis">
        {testimoni.comment}
      </p>
      <div className="flex items-center justify-between">
        <div className="size-12 overflow-hidden rounded-full bg-white">
          <img src={testimoni.img} alt="" className="size-full object-cover" />
        </div>
        <p className="-ml-18 text-sm tracking-wide uppercase">
          {testimoni.name}
        </p>
        <p className="text-[0.8rem]">20-01-2025</p>
      </div>
    </div>
  );
};

export default ContentTestimonials;
