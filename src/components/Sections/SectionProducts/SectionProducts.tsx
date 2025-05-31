import { ArrowCircleUpRight } from "@phosphor-icons/react";
import productCoffe, { ProductCoffe } from "../../../assets/datas/productCoffe";
import SubTitle from "../../UI/SubTitle";
import Title from "../../UI/Title";
import ContentProducts from "./ContentProducts";
import { Link } from "react-router";
import SectionNotif from "./SectionNotif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

const SectionProducts = () => {
  const popularProduct = productCoffe.filter(
    (product: ProductCoffe) => product.review > 1500,
  );
  return (
    <section
      id="product"
      className="bg-coffe/25 flex w-full flex-col items-center gap-4 py-30 text-center"
    >
      <div className="w-11/12 sm:w-xl">
        <SubTitle
          text="Product Populer"
          customStyle="before:left-1/2 before:-translate-x-1/2 before:-ml-28"
        />
        <Title text="Product Unggulan Kami" />
        <p>
          Dari biji kopi pilihan hingga sentuhan barista, temukan beragam produk
          kami yang siap menemani setiap momen.
        </p>
      </div>
      <div className="w-10/12 overflow-x-hidden py-15">
        <Swiper
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={4}
          spaceBetween={30}
          watchSlidesProgress={true}
          modules={[Pagination]}
          className="slide-popular-products h-105"
          breakpoints={{
            360: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {popularProduct.map((product: ProductCoffe) => (
            <SwiperSlide key={product.id}>
              <ContentProducts product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="mt-18 grid w-full grid-cols-1 place-content-center place-items-center gap-8 text-left sm:w-11/12 sm:grid-cols-[repeat(auto-fit,minmax(13rem,15rem))] sm:gap-0 sm:gap-x-8 sm:gap-y-18">
        {popularProduct.map((product: ProductCoffe) => (
          <ContentProducts product={product} key={product.id} />
        ))}
      </div> */}
      <button className="bg-coffe rounded-sm px-4 py-2.5 text-white shadow-sm">
        <Link to="/products" className="flex items-center gap-2">
          <ArrowCircleUpRight size={25} />
          Lihat Selengkapnya
        </Link>
      </button>
      <SectionNotif />
    </section>
  );
};

export default SectionProducts;
