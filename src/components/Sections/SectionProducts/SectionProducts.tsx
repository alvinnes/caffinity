import { ArrowCircleUpRight } from "@phosphor-icons/react";
import productCoffe, { ProductCoffe } from "../../../assets/datas/productCoffe";
import SubTitle from "../../UI/SubTitle";
import Title from "../../UI/Title";
import PrimaryButton from "../../UI/PrimaryButton";
import ContentProducts from "./ContentProducts";

const SectionProducts = () => {
  const popularProduct = productCoffe.filter(
    (product: ProductCoffe) => product.review > 3000,
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quas
          optio exercitationem voluptatum amet dolor velit porro repudiandae
          beatae libero.
        </p>
      </div>
      <div className="mt-18 grid w-full grid-cols-2 place-content-center text-left sm:w-11/12 sm:grid-cols-[repeat(auto-fit,minmax(13rem,15rem))] sm:gap-x-8 sm:gap-y-18">
        {popularProduct.map((product: ProductCoffe) => (
          <ContentProducts product={product} />
        ))}
      </div>
      <PrimaryButton
        icon={<ArrowCircleUpRight size={25} />}
        customStyle="bg-coffe rounded-sm py-2.5 mt-15"
        link="#"
        text="Lihat Selengkapnya"
      />
    </section>
  );
};

export default SectionProducts;
