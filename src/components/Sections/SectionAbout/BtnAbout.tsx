import { ArrowCircleUpRight, ArrowRight } from "@phosphor-icons/react";
import PrimaryButton from "../../UI/PrimaryButton";
import SecondaryBtn from "../../UI/SecondaryBtn";

const BtnAbout = () => {
  return (
    <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
      <PrimaryButton
        text="Jelajahi Kopi Kami"
        icon={<ArrowCircleUpRight size={25} />}
        link="#menus"
        customStyle="bg-slate-800 rounded-sm"
      />
      <SecondaryBtn
        text="Hubungi Kami"
        icon={<ArrowRight size={20} />}
        link="#contact"
        customStyle="bg-inherit shadow-none text-slate-700"
      />
    </div>
  );
};

export default BtnAbout;
