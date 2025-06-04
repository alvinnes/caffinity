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
      <div className="w-8/12 overflow-x-hidden py-14 sm:w-10/12">
        <Swiper
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Pagination]}
          className="slide-popular-products h-105"
          breakpoints={{
            360: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
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
      <button className="bg-coffe -mt-12 rounded-sm px-4 py-2.5 text-white shadow-lg">
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
