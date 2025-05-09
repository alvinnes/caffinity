import { Swiper, SwiperSlide } from "swiper/react";
import SubTitle from "../UI/SubTitle";
import Title from "../UI/Title";
import "swiper/css";
import { Pagination } from "swiper/modules";
import testimonials, { TestimonialsDatas } from "../../services/Testimonials";
import ContentTestimonials from "../ContentProducts/ContentTestimonials";

const SectionTestimonials = () => {
  return (
    <section
      id="testimonials"
      className="flex w-full flex-col items-center gap-30 py-20"
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
    </section>
  );
};

export default SectionTestimonials;
