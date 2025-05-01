import RadialGradient from "../UI/RadialGradient";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slideProduct, { SlideProduct } from "../../services/SlideProduct";
import formatPrice from "../../utils/formatPrice";

const SectionHome = () => {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen w-10/12 flex-col-reverse items-center justify-between sm:flex-row"
    >
      <div className="mt-20 w-full sm:w-xl">
        <h1 className="text-5xl font-bold text-slate-600 drop-shadow-sm sm:text-6xl">
          Great code starts with{" "}
          <span className="text-[#A67B5B]">great coffee.</span>
        </h1>
        <p className="sm:text-md mt-14 text-sm">
          Ngoding tanpa kopi ibarat kode tanpa semicolon terasa kurang lengkap.
          Caffinity hadir untuk menemani setiap baris kodenya!.{" "}
          <a href="" className="text-coffe font-semibold underline">
            Pesan Kopimu, Mulai Kodingmu!
          </a>
        </p>
        <div className="mt-6 flex gap-6 sm:gap-4">
          <ButtonCTA text="Buy now!" bgColor="bg-[#B17457]" link="#product" />
          <ButtonCTA text="Our menus" bgColor="bg-[#A67B5B]" link="#menus" />
        </div>
      </div>
      <div className="mt-30 flex h-100 w-11/12 items-end rounded-t-[20rem] rounded-b-md bg-[#ECB176] p-4 shadow-md sm:h-130 sm:w-sm">
        <div className="flex h-full w-full items-center justify-center overflow-x-hidden rounded-[inherit] bg-white">
          <Swiper
            centeredSlides={true}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination]}
          >
            {slideProduct.map((product: SlideProduct) => (
              <SwiperSlide>
                <img
                  src={product.img}
                  alt="product_diskon"
                  className="object-cove mx-auto h-55 w-50 sm:h-70 sm:w-65"
                />
                <div className="flex w-full items-center justify-center gap-4">
                  <p className="font-semibold text-slate-700 line-through sm:text-lg">
                    {formatPrice(product.disconPrice)}
                  </p>
                  <p className="text-md font-semibold text-slate-700 sm:text-lg">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <ButtonCTA
                  text="Add to Cart"
                  bgColor="bg-[#B17457] mb-13 mt-4 ml-20 sm:ml-30"
                  link="#product"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <RadialGradient position="top-0 left-0" size="size-120" />
      <RadialGradient position="bottom-10 right-10" size="size-130" />
    </section>
  );
};

type BtnHomeProps = {
  bgColor: string;
  text: string;
  link: string;
};

const ButtonCTA = (props: BtnHomeProps) => {
  const { text, bgColor, link } = props;
  return (
    <button
      className={`px-4 py-1.5 ${bgColor} rounded-sm font-semibold text-white shadow-sm sm:text-sm`}
    >
      <a href={link}>{text}</a>
    </button>
  );
};

export default SectionHome;
