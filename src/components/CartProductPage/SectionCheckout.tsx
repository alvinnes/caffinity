import useTotalPrice from "../../hooks/useTotalPrice";
import PriceProduct from "../PriceProduct";

const SectionCheckout = () => {
  const totalPrice = useTotalPrice((state) => state.totalPrice);

  return (
    <div className="bg-secondary absolute bottom-0 left-0 flex w-full items-center justify-between rounded-lg px-2 py-2 shadow-sm sm:bottom-6 sm:left-1/2 sm:w-[97%] sm:-translate-x-1/2 sm:px-8">
      <button className="bg-coffe h-13 cursor-pointer rounded-sm px-4 font-semibold text-white shadow-sm sm:px-8">
        Checkout
      </button>
      <div className="bg-coffe/50 border-secondary w-fit rounded-xl border-4 border-solid px-8 py-5 text-white shadow-sm">
        <PriceProduct price={totalPrice} />
      </div>
    </div>
  );
};

export default SectionCheckout;
