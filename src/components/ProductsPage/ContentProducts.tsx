import { useState } from "react";
import productCoffe, { ProductCoffe } from "../../assets/datas/productCoffe";
import ContentProduct from "../Sections/SectionProducts/ContentProducts";
import BtnProducts from "./BtnProducts";
import NotifAddToCart from "../Sections/SectionProducts/NotifAddToCart";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import slideHeaderProduct, {
  SlideHeaderProduct,
} from "../../services/SlideHeaderProduct";
import ContentHeaderProducts from "./ContentHeaderProducts";

const ContentProducts = () => {
  const [products, setProducts] = useState<ProductCoffe[]>(productCoffe);
  const [isFiltering, setIsFiltering] = useState<boolean>(false);

  return (
    <section className="flex w-full flex-col items-center pt-20 pb-10 sm:pt-30">
      <div className="mb-20 sm:h-120 h-90 w-full sm:w-10/12 overflow-x-hidden rounded-xl bg-slate-100">
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
      <h1 className="text-center text-5xl leading-12 font-bold tracking-wider text-slate-700 uppercase sm:text-4xl">
        Semua Product
      </h1>
      <div className="my-20 w-11/12 overflow-x-hidden py-2 sm:my-25">
        <BtnProducts
          setIsFiltering={setIsFiltering}
          setProducts={setProducts}
        />
      </div>
      <div
        className={`grid w-full grid-cols-2 place-content-center gap-2 transition-all duration-400 ease-in-out sm:w-11/12 sm:grid-cols-[repeat(auto-fit,minmax(13rem,15rem))] sm:gap-x-8 sm:gap-y-20 ${isFiltering ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
      >
        {products.map((product: ProductCoffe) => (
          <ContentProduct
            product={product}
            key={product.id}
            customStyle="w-full "
          />
        ))}
      </div>
      <NotifAddToCart />
    </section>
  );
};

export default ContentProducts;
