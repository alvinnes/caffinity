import { TestimonialsDatas } from "../../services/Testimonials";

interface ContentTestimonialsProps {
  testimoni: TestimonialsDatas;
}

const ContentTestimonials = (props: ContentTestimonialsProps) => {
  const { testimoni } = props;
  return (
    <div className="mx-auto flex h-75 w-80 flex-col justify-between rounded-md bg-slate-200 p-3 shadow-sm shadow-slate-500">
      <h2 className="text-2xl font-semibold text-slate-700">
        {testimoni.title}
      </h2>
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
