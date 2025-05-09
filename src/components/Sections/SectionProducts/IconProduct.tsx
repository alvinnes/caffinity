import { Eye, Heart, ShoppingCart } from "@phosphor-icons/react";
import { ReactNode } from "react";

const IconProduct = () => {
  return (
    <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-center gap-2">
      <IconProductItem icon={<Heart size={23} weight="bold" />} />
      <IconProductItem icon={<Eye size={23} weight="bold" />} />
      <IconProductItem icon={<ShoppingCart size={23} weight="bold" />} />
    </div>
  );
};

interface IconProductItemProps {
  icon: ReactNode;
}

const IconProductItem = (props: IconProductItemProps) => {
  const { icon } = props;
  return (
    <span className="flex size-6 items-center justify-center rounded-full bg-orange-300 p-1 text-white shadow-sm">
      {icon}
    </span>
  );
};

export default IconProduct;
