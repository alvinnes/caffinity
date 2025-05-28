import { Swiper, SwiperSlide } from "swiper/react";
import ContentHeaderProducts from "./ContentHeaderProducts";
import slideHeaderProduct, {
  SlideHeaderProduct,
} from "../../services/SlideHeaderProduct";
import { Autoplay, Pagination } from "swiper/modules";

const HeaderProducts = () => {
  return (
    <div className="mb-20 h-90 w-full overflow-x-hidden rounded-xl bg-slate-100 sm:h-120 sm:w-10/12">
      <Swiper
        grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="size-full"
      >
        {slideHeaderProduct.map((product: SlideHeaderProduct) => (
          <SwiperSlide className="relative bg-[url(/img/bg-2.jpg)] bg-cover bg-fixed shadow-2xl before:absolute before:top-0 before:left-0 before:size-full before:bg-linear-to-t before:from-black/60 before:via-black/30 before:to-transparent">
            <ContentHeaderProducts product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeaderProducts;
