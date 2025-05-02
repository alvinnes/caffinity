import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slideProduct, { SlideProduct } from "../../services/SlideProduct";
import formatPrice from "../../utils/formatPrice";
import { ReactNode } from "react";
import {
  ArrowCircleUpRight,
  ArrowDown,
  ShoppingCart,
} from "@phosphor-icons/react";
import TextHome from "../SectionText/TextHome";

const SectionHome = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col-reverse sm:flex-row"
    >
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-800 px-6 pt-10 pb-40 sm:w-7/12">
        <TextHome />
        <div className="mt-10 flex gap-6 self-start sm:ml-14 sm:gap-4">
          <ButtonCTA
            text="Buy now!"
            bgColor="bg-[#B17457]"
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
                <ContentProduct product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="absolute -bottom-30 left-1/2 flex size-50 -translate-x-1/2 justify-center rounded-t-full bg-white">
        <span className="mt-6 flex size-15 items-center justify-center rounded-full bg-slate-800 p-0.5 text-white transition-all duration-500 hover:translate-y-1">
          <a href="#about">
            <ArrowDown size={40} />
          </a>
        </span>
      </div>
    </section>
  );
};

type ContentProduct = {
  product: SlideProduct;
};

const ContentProduct = ({ product }: ContentProduct) => {
  return (
    <>
      <img
        src={product.img}
        alt="product_diskon"
        className="mx-auto h-100 w-95 object-cover"
      />
      <div className="flex w-full items-center justify-center gap-4 text-white">
        <p className="font-semibold line-through sm:text-lg">
          {formatPrice(product.disconPrice)}
        </p>
        <p className="text-md font-semibold sm:text-lg">
          {formatPrice(product.price)}
        </p>
      </div>
      <ButtonCTA
        text="Add to Cart"
        bgColor="bg-[#B17457] mb-13 mt-4 "
        link="#product"
        icon={<ShoppingCart size={20} />}
      />
    </>
  );
};

type BtnHomeProps = {
  bgColor: string;
  text: string;
  link: string;
  icon: ReactNode;
};

const ButtonCTA = (props: BtnHomeProps) => {
  const { text, bgColor, link, icon } = props;
  return (
    <button
      className={`px-6 py-1.5 ${bgColor} rounded-full font-semibold text-white shadow-sm`}
    >
      <a href={link} className="flex items-center gap-2">
        {icon} {text}
      </a>
    </button>
  );
};

export default SectionHome;
