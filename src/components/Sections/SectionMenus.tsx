import { useState } from "react";
import productCoffe, { ProductCoffe } from "../../assets/datas/productCoffe";
import { ArrowCircleUpRight } from "@phosphor-icons/react";
import PrimaryButton from "../UI/PrimaryButton";
import ContentProductMenu from "../ContentProducts/ContentProductMenu";

const SectionMenus = () => {
  const [product, setProduct] = useState<ProductCoffe[]>(productCoffe);
  const populerProduct = product.filter(
    (item: ProductCoffe) => item.review > 1400,
  );
  console.log(product);
  return (
    <section
      id="menus"
      className="flex w-full flex-col items-center bg-indigo-100/30 py-20"
    >
      <h2 className="text-2xl font-semibold text-slate-700">Our Menus</h2>
      <p className="mt-8 w-10/12 text-center sm:w-xl">
        Kami percaya bahwa kopi dan kudapan yang tepat bisa membuat proses kerja
        lebih menyenangkan—itulah alasan setiap sajian kami dibuat dengan rasa,
        energi, dan perhatian.
      </p>
      <div className="mt-15 grid w-11/12 grid-cols-1 place-content-center gap-x-6 gap-y-4 sm:w-10/12 sm:grid-cols-2 sm:place-items-center sm:px-8">
        {populerProduct.map((item: ProductCoffe) => (
          <ContentProductMenu item={item} />
        ))}
      </div>
      <PrimaryButton
        icon={<ArrowCircleUpRight size={25} />}
        bgColor="bg-[#B17457] rounded-sm py-2.5 mt-15"
        link="#"
        text="Lihat Selengkapnya"
      />
    </section>
  );
};

export default SectionMenus;
