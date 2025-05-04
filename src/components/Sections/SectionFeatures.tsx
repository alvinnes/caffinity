import { Coffee, Storefront, WifiHigh } from "@phosphor-icons/react";
import SubTitle from "../UI/SubTitle";
import { ReactNode } from "react";

const SectionFeatures = () => {
  return (
    <section
      id="features"
      className="flex w-full flex-col items-center gap-20 bg-slate-100/70 py-20"
    >
      <div className="w-11/12 text-center sm:w-xl">
        <SubTitle
          text="Fitur"
          customStyle="before:left-1/2 before:-ml-13 before:-translate-x-1/2 "
        />
        <h2 className="font-outfit mt-3 mb-6 text-5xl leading-13 font-semibold text-slate-700">
          Mengapa Caffinity Jadi Favorit?
        </h2>
        <p className="text-center">
          Kami percaya kopi terbaik perlu didampingi suasana terbaik. Inilah
          fitur-fitur yang kami hadirkan untuk menemani hari-harimu.
        </p>
      </div>
      <div className="flex w-11/12 flex-col items-center gap-20 sm:flex-row sm:items-start sm:justify-around">
        <FeatureItem
          title="Wifi Cepat Tanpa Drama"
          text="Koneksi stabil untuk kerja, meeting, atau streaming sambil ngopi."
          icon={<WifiHigh className="size-20" />}
        />
        <FeatureItem
          title="Tempat Nyaman untuk Ngoding"
          text="Ruang yang tenang, colokan melimpah, dan suasana yang mendukung fokus."
          icon={<Storefront className="size-20" />}
        />
        <FeatureItem
          title="Menu untuk Setiap Rasa"
          text="Pilihan kopi dan kudapan yang disesuaikan dengan setiap mood dan selera."
          icon={<Coffee className="size-20" />}
        />
      </div>
    </section>
  );
};

interface FeatureItemProps {
  title: string;
  text: string;
  icon: ReactNode;
}

const FeatureItem = (props: FeatureItemProps) => {
  const { title, text, icon } = props;
  return (
    <div className="flex h-65 w-70 flex-col items-center justify-center gap-4 text-center">
      {icon}
      <h2 className="font-outfit text-2xl font-semibold">{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default SectionFeatures;
