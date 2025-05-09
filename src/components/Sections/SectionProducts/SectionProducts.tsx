import { ArrowCircleUpRight } from "@phosphor-icons/react";
import productCoffe, { ProductCoffe } from "../../../assets/datas/productCoffe";
import formatPrice from "../../../utils/formatPrice";
import SubTitle from "../../UI/SubTitle";
import Title from "../../UI/Title";
import IconProduct from "./IconProduct";
import PrimaryButton from "../../UI/PrimaryButton";

const SectionProducts = () => {
  const popularProduct = productCoffe.filter(
    (product: ProductCoffe) => product.review > 3000,
  );
  return (
    <section
      id="product"
      className="flex w-full flex-col items-center gap-4 bg-slate-100 py-30 text-center"
    >
      <SubTitle text="Product Populer" />
      <Title text="Product Unggulan Kami" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur quas
        optio exercitationem voluptatum amet dolor velit porro repudiandae
        beatae libero.
      </p>
      <div className="mt-18 grid w-full grid-cols-2 place-content-center gap-x-1 gap-y-1 text-left sm:w-11/12 sm:grid-cols-[repeat(auto-fit,minmax(13rem,15rem))] sm:gap-x-8 sm:gap-y-18">
        {popularProduct.map((product: ProductCoffe) => (
          <ContentProducts product={product} />
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

interface ContentProductsProps {
  product: ProductCoffe;
}

const ContentProducts = (props: ContentProductsProps) => {
  const { product } = props;
  return (
    <div className="relative h-70 rounded-md bg-white shadow-sm">
      <IconProduct />
      <div className="h-40 w-full rounded-sm bg-slate-100/50 p-2">
        <img
          src={product.img}
          alt={product.nama}
          className="size-full object-cover"
        />
      </div>
      <div className="flex h-30 flex-col justify-between p-2">
        <h2 className="tracking-wide text-slate-700">Coffe Latte</h2>
        <h3 className="text-sm">{formatPrice(product.price)}</h3>
        <button className="w-full rounded-sm bg-slate-100 py-1.5">
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default SectionProducts;
