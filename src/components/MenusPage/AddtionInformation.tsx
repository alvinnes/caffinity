import { ReactNode } from "react";
import { DataMenus } from "../../assets/datas/dataMenus";

interface AddtionInformationProps {
  product: DataMenus;
}

const AddtionInformation = ({ product }: AddtionInformationProps) => {
  return (
    <div className="flex w-xs flex-col gap-15">
      <CardItem
        text="Bahan - bahan"
        color="sm:bg-secondary/80 bg-white"
        img="/img/decoration/decor-12.png"
      >
        <p className="text-sm">{product.ingredients.join(", ")}</p>
      </CardItem>
      <CardItem
        text="kandungan Nutrisi"
        color="sm:bg-secondary/40 bg-white"
        img="/img/decoration/decor-13.png"
      >
        <p className="text-sm">Gula : {product.nutrition.sugar}</p>
        <p className="text-sm">kalori : {product.nutrition.calories}</p>
      </CardItem>
    </div>
  );
};

interface CardItemProps {
  text: string;
  img: string;
  color: string;
  children: ReactNode;
}

const CardItem = (props: CardItemProps) => {
  const { color, text, img, children } = props;
  return (
    <div
      className={`${color} relative rounded-md px-3 py-6 text-center shadow-sm`}
    >
      <div className="absolute -top-8 left-1/2 size-15 -translate-x-1/2 rounded-full bg-white p-1 shadow-sm">
        <img
          src={img}
          alt="foto-karung-kopi"
          className="bg-secondary size-full rounded-full object-cover"
        />
      </div>
      <h2 className="mt-2 mb-1 text-xl font-semibold text-slate-700">{text}</h2>
      {children}
    </div>
  );
};

export default AddtionInformation;
