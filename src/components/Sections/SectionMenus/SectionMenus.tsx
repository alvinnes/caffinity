import { useState } from "react";
import productCoffe, { ProductCoffe } from "../../../assets/datas/productCoffe";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import PrimaryButton from "../../UI/PrimaryButton";
import SubTitle from "../../UI/SubTitle";
import Title from "../../UI/Title";
import ContentProductMenu from "./ContentProductMenu";
import DecorationMenus from "./DecorationMenus";

const SectionMenus = () => {
  const [product, _setProduct] = useState<ProductCoffe[]>(productCoffe);
  const populerProduct = product.filter(
    (item: ProductCoffe) => item.review > 1400,
  );
  return (
    <section
      id="menus"
      className="bg-secondary/25 relative flex w-full flex-col items-center py-20 text-center"
    >
      <div className="w-11/12 sm:w-xl">
        <SubTitle
          text="Menu Kami"
          customStyle="before:left-1/2 before:-ml-23"
        />
        <Title text="Apa yang Spesial dari Menu Kami ?" />
        <p className="mt-2 w-full">
          Kami percaya bahwa kopi dan kudapan yang tepat bisa membuat proses
          kerja lebih menyenangkan—itulah alasan setiap sajian kami dibuat
          dengan rasa, energi, dan perhatian.
        </p>
      </div>
      <div className="mt-20 grid w-11/12 grid-cols-1 place-content-center gap-x-6 gap-y-4 sm:w-10/12 sm:grid-cols-2 sm:place-items-center sm:px-8">
        {populerProduct.map((item: ProductCoffe) => (
          <ContentProductMenu item={item} />
        ))}
      </div>
      <PrimaryButton
        icon={<ArrowCircleUpRight size={25} />}
        customStyle="bg-coffe rounded-sm py-2.5 mt-15"
        link="#"
        text="Lihat Selengkapnya"
      />
      <DecorationMenus />
    </section>
  );
};

export default SectionMenus;
