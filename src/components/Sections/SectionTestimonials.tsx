import { Swiper, SwiperSlide } from "swiper/react";
import SubTitle from "../UI/SubTitle";
import Title from "../UI/Title";
import "swiper/css";
import { Pagination } from "swiper/modules";
import testimonials, { TestimonialsDatas } from "../../services/Testimonials";

const SectionTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center gap-30 bg-slate-100/50 py-20"
    >
      <div className="w-11/12 text-center sm:w-xl">
        <SubTitle
          text="Testimoni"
          customStyle="before:left-1/2 before:-ml-20 mb-6 before:-translate-1/2"
        />
        <Title text="Apa Yang Dikatakan Oleh Pengunjung Kami ?" />
        <p>
          Kata mereka, bukan kata kami — inilah pengalaman para pelanggan setia
          Caffinity.
        </p>
      </div>
      <div className="w-10/12">
        <Swiper
          className="h-90"
          slidesPerView={3}
          pagination={{ clickable: true, dynamicBullets: true }}
          grabCursor={true}
          watchSlidesProgress={true}
          modules={[Pagination]}
        >
          {testimonials.map((testimoni: TestimonialsDatas) => (
            <SwiperSlide>
              <ContentTestimonials testimoni={testimoni} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

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
        <div className="size-12 rounded-full bg-white"></div>
        <p className="-ml-18 text-sm tracking-wide uppercase">
          {testimoni.name}
        </p>
        <p className="text-[0.8rem]">20-01-2025</p>
      </div>
    </div>
  );
};

export default SectionTestimonials;
