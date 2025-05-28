import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slideProduct, { SlideProduct } from "../../../services/SlideProduct";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import TextHome from "./TextHome";
import PrimaryButton from "../../UI/PrimaryButton";
import ContentProductHome from "./ContentProductHome";
import BtnArrowHome from "./BtnArrowHome";

const SectionHome = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col-reverse sm:flex-row"
    >
      <div className="flex min-h-screen w-full flex-col items-center justify-end bg-slate-800 px-6 pt-10 pb-40 sm:w-7/12">
        <TextHome />
        <div className="mt-10 flex gap-6 self-start sm:ml-14 sm:gap-4">
          <PrimaryButton
            text="Beli Sekarang!"
            customStyle="bg-[#B17457] rounded-full font-semibold"
            link="#product"
            icon={<ArrowCircleUpRight size={25} />}
          />
        </div>
      </div>
      <div className="flex h-screen w-full justify-center bg-slate-700 p-4 sm:w-5/12">
        <div className="flex h-full w-full items-center justify-center overflow-x-hidden">
          <Swiper
            grabCursor={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination]}
          >
            {slideProduct.map((product: SlideProduct) => (
              <SwiperSlide className="text-center">
                <ContentProductHome product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <BtnArrowHome />
    </section>
  );
};

export default SectionHome;
