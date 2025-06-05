import { Swiper, SwiperSlide } from "swiper/react";
import AddtionInformation from "../components/MenusPage/AddtionInformation";
import DescriptionMenu from "../components/MenusPage/DescriptionMenu";
import SubNavbar from "../components/SubNavbar";
import dataMenus, { DataMenus } from "../assets/datas/dataMenus";
import "swiper/css";
import DecorationMenusPage from "../components/MenusPage/DecorationMenusPage";
import SectionImg from "../components/MenusPage/SectionImg";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const MenusPage = () => {
  return (
    <main className="from-secondary flex min-h-screen w-full items-center justify-center bg-linear-to-t via-white to-white">
      <SubNavbar />
      <section className="relative flex w-full items-center justify-center py-10 sm:w-11/12 sm:py-0">
        <Swiper
          grabCursor={true}
          navigation={{ nextEl: ".btn-next", prevEl: ".btn-prev" }}
          effect="fade"
          speed={1300}
          fadeEffect={{ crossFade: true }}
          modules={[Navigation, EffectFade]}
        >
          {dataMenus.map((product: DataMenus) => (
            <SwiperSlide key={product.id}>
              <div className="flex min-h-screen w-full flex-col items-center justify-between gap-20 px-4 sm:flex-row sm:gap-0">
                <DescriptionMenu product={product} />
                <SectionImg product={product} />
                <AddtionInformation product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-250 z-4 flex gap-4 sm:bottom-30">
          <button className="btn-prev bg-coffe flex cursor-pointer justify-center rounded-full px-8 py-1.5 text-white shadow-sm">
            <ArrowLeft size={30} />
          </button>
          <button className="btn-next bg-coffe flex cursor-pointer justify-center rounded-full px-8 py-1.5 text-white shadow-sm">
            <ArrowRight size={30} />
          </button>
        </div>
        <DecorationMenusPage />
      </section>
    </main>
  );
};

export default MenusPage;
