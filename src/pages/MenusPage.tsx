import { Swiper, SwiperSlide } from "swiper/react";
import AddtionInformation from "../components/MenusPage/AddtionInformation";
import DescriptionMenu from "../components/MenusPage/DescriptionMenu";
import SubNavbar from "../components/SubNavbar";
import dataMenus, { DataMenus } from "../assets/datas/dataMenus";
import "swiper/css";
import DecorationMenusPage from "../components/MenusPage/DecorationMenusPage";
import SectionImg from "../components/MenusPage/SectionImg";

const MenusPage = () => {
  return (
    <main className="from-secondary flex min-h-screen w-full items-center justify-center bg-linear-to-t via-white to-white">
      <SubNavbar />
      <section className="relative flex w-11/12 items-center justify-center">
        <Swiper grabCursor={true}>
          {dataMenus.map((product: DataMenus) => (
            <SwiperSlide key={product.id}>
              <div className="flex min-h-screen w-full flex-col items-center justify-between gap-30 px-4 sm:flex-row sm:gap-0">
                <DescriptionMenu product={product} />
                <SectionImg product={product} />
                <AddtionInformation product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <DecorationMenusPage />
      </section>
    </main>
  );
};

export default MenusPage;
