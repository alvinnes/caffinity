import { Coffee, Storefront, WifiHigh } from "@phosphor-icons/react";
import FeatureItem from "./FeatureItem";

const Features = () => {
  return (
    <div className="mt-4 flex w-11/12 flex-col items-center gap-20 sm:flex-row sm:items-start sm:justify-center">
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
  );
};

export default Features;
