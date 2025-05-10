import { Swiper, SwiperSlide } from "swiper/react";
import SubTitle from "../UI/SubTitle";
import Title from "../UI/Title";
import "swiper/css";
import { Pagination } from "swiper/modules";
import testimonials, { TestimonialsDatas } from "../../services/Testimonials";
import ContentTestimonials from "../ContentProducts/ContentTestimonials";
import Decoration from "../UI/Decoration";

const SectionTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-secondary/50 relative flex w-full flex-col items-center gap-30 py-20"
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
      <div className="w-11/12 sm:w-10/12">
        <Swiper
          className="h-90"
          slidesPerView={3}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
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
      <Decoration
        img="/img/decoration/decor-6.png"
        position="-left-4 sm:-left-8 top-0"
        size="size-40 sm:size-100"
        rotate="rotate-90"
      />
      <Decoration
        img="/img/decoration/decor-6.png"
        position="right-0 -bottom-4 sm:-bottom-8"
        size="size-40 sm:size-110"
        rotate="rotate-250"
      />
      <Decoration
        img="/img/decoration/decor-4.png"
        position="sm:right-22 right-4 top-1/2 -translate-y-1/2 -mt-10 sm:-mt-20"
        size="size-35 sm:size-50"
      />
    </section>
  );
};

export default SectionTestimonials;
