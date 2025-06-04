import { DataMenus } from "../../assets/datas/dataMenus";

interface SectionImgProps {
  product: DataMenus;
}
const SectionImg = ({ product }: SectionImgProps) => {
  return (
    <div className="relative">
      <div className="to-secondary absolute -top-20 left-1/2 -z-1 flex h-50 w-70 -translate-x-1/2 justify-center rounded-t-full bg-linear-to-t from-white">
        <h2 className="font-fair text-coffe w-20 rotate-340 text-center text-3xl font-extrabold drop-shadow-sm">
          Special Menu
        </h2>
      </div>
      <img
        src={product.img}
        alt={product.name}
        className="size-85 rounded-full object-cover drop-shadow-lg"
      />
      {product.category == "Kopi" && (
        <img
          src="/img/decoration/decor-14.png"
          alt=""
          className="absolute -bottom-30 size-70 object-cover drop-shadow-sm"
        />
      )}
    </div>
  );
};

export default SectionImg;
