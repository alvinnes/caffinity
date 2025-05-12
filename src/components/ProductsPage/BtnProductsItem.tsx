interface BtnProductsItemProps {
  text: string | boolean;
  clicked: () => void;
  isActive?: boolean;
}

const BtnProductsItem = (props: BtnProductsItemProps) => {
  const { text, clicked, isActive } = props;
  return (
    <button
      className={`${isActive ? "bg-coffe text-white" : "bg-secondary/50 text-slate-600"} cursor-pointer rounded-sm px-4 py-2 font-semibold text-nowrap shadow-xs transition-all duration-400 ease-in`}
      onClick={clicked}
    >
      {text}
    </button>
  );
};

export default BtnProductsItem;
