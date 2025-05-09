import SubTitle from "../../UI/SubTitle";
import Features from "./Features";

const SectionFeatures = () => {
  return (
    <section
      id="features"
      className="flex w-full flex-col items-center gap-20 bg-slate-100 py-20 "
    >
      <div className="w-11/12 text-center sm:w-xl">
        <SubTitle
          text="Fitur"
          customStyle="before:left-1/2 before:-ml-13 before:-translate-x-1/2 "
        />
        <h2 className="font-outfit mt-3 mb-6 text-5xl leading-13 font-semibold">
          Mengapa Caffinity Jadi Favorit?
        </h2>
        <p className="text-center font-light">
          Kami percaya kopi terbaik perlu didampingi suasana terbaik. Inilah
          fitur-fitur yang kami hadirkan untuk menemani hari-harimu.
        </p>
      </div>
      <Features />
    </section>
  );
};

export default SectionFeatures;
