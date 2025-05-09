import SubTitle from "../../UI/SubTitle";
import Title from "../../UI/Title";
import Features from "./Features";

const SectionFeatures = () => {
  return (
    <section
      id="features"
      className="flex w-full flex-col items-center gap-20 bg-slate-100 py-20"
    >
      <div className="w-11/12 text-center sm:w-xl">
        <SubTitle
          text="Fitur"
          customStyle="before:left-1/2 before:-ml-13 before:-translate-x-1/2 "
        />
        <Title text="Mengapa Caffinity Jadi Favorit?" />
        <p className="text-center">
          Kami percaya kopi terbaik perlu didampingi suasana terbaik. Inilah
          fitur-fitur yang kami hadirkan untuk menemani hari-harimu.
        </p>
      </div>
      <Features />
    </section>
  );
};

export default SectionFeatures;
