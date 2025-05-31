import { Swiper, SwiperSlide } from "swiper/react";
import SubTitle from "../../UI/SubTitle";
import Title from "../../UI/Title";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";
import DecorationTestimonials from "./DecorationTestimonials";
import ContentTestimonials from "./ContentTestimonials";
import testimonials, {
  TestimonialsDatas,
} from "../../../services/Testimonials";

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
          className="slide-testimonials h-90"
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
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials.map((testimoni: TestimonialsDatas) => (
            <SwiperSlide key={testimoni.name}>
              <ContentTestimonials testimoni={testimoni} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <DecorationTestimonials />
    </section>
  );
};

export default SectionTestimonials;
