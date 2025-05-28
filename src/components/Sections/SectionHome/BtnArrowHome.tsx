import { ArrowDown } from "@phosphor-icons/react";

const BtnArrowHome = () => {
  return (
    <div className="absolute -bottom-30 left-1/2 flex size-50 -translate-x-1/2 justify-center rounded-t-full bg-white">
      <span className="mt-4 flex size-15 items-center justify-center rounded-full bg-slate-800 p-0.5 text-white transition-all duration-500 hover:translate-y-1">
        <a href="#about">
          <ArrowDown size={40} />
        </a>
      </span>
    </div>
  );
};

export default BtnArrowHome;
