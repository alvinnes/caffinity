import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
  UsersThree,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { ReactNode } from "react";
import RadialGradient from "../UI/RadialGradient";
import imgAbout, { ImgAbout } from "../../services/ImgAbout";

const SectionAbout = () => {
  return (
    <section
      className="relative flex w-full bg-indigo-100/20 flex-col items-center gap-20 py-40"
      id="about"
    >
      <div className="flex items-center gap-4">
        <span className="flex size-8 items-center justify-center rounded-sm bg-blue-200 p-0.5">
          <UsersThree className="size-full rounded-sm bg-blue-400 p-0.5 text-white" />
        </span>
        <h2 className="text-3xl font-semibold text-slate-700">About US</h2>
      </div>
      <div className="flex flex-col items-center gap-20 sm:flex-row sm:gap-40">
        <Swiper
          grabCursor={true}
          effect="cards"
          modules={[EffectCards]}
          className="h-70 w-60"
        >
          {imgAbout.map((img: ImgAbout) => (
            <SwiperSlide className={img.styles}>
              <img src={img.img} alt="" className="size-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex w-10/12 flex-col gap-5 sm:w-xl">
          <h2 className="text-lg font-semibold">Coffe Shop Caffinity</h2>
          <TextAbout />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 flex w-full -translate-1/2 flex-wrap justify-center gap-4 gap-y-4 sm:bottom-15 sm:w-2xl sm:gap-x-8">
        <SocialMedia />
      </div>
      <RadialGradient position="top-20 right-10" size="size-80" />
      <RadialGradient position="bottom-25 left-10" size="size-100" />
    </section>
  );
};

const SocialMedia = () => {
  return (
    <>
      <SocialMediaItem
        name="caffinity_13"
        icon={<InstagramLogo size={20} />}
        link="#"
      />
      <SocialMediaItem
        name="caffinity_13"
        icon={<WhatsappLogo size={20} />}
        link="#"
      />
      <SocialMediaItem
        name="caffinity_13"
        icon={<FacebookLogo size={20} />}
        link="#"
      />
      <SocialMediaItem
        name="caffinity_13"
        icon={<TwitterLogo size={20} />}
        link="#"
      />
      <SocialMediaItem
        name="caffinity_13"
        icon={<TiktokLogo size={20} />}
        link="#"
      />
    </>
  );
};

type SocialMediaItemProps = {
  name: string;
  icon: ReactNode;
  link?: string;
};

const SocialMediaItem = (props: SocialMediaItemProps) => {
  const { name, icon, link } = props;
  return (
    <div className="flex w-fit items-center gap-2 rounded-sm bg-indigo-100/70 p-1.5 text-xs">
      <span>{icon}</span>
      <a href={link}>{name}</a>
    </div>
  );
};

const TextAbout = () => {
  return (
    <>
      <p>
        Caffinity adalah tempat di mana kopi terbaik bertemu dengan
        produktivitas. Kami hadir untuk menemani para developer, freelancer, dan
        pekerja kreatif dengan suasana yang nyaman serta kopi berkualitas
        tinggi.
      </p>
      <p>
        Caffinity berasal dari kalimat 'Caffein' dan 'Affinity', menggambarkan
        kecintaan kami terhadap kopi dan bagaimana kopi menyatukan komunitas.
      </p>
      <p>
        Disini menyediakan menu kopi spesial dengan rasa unik,lalu terdapat
        komunitas developer dan freelancer yang aktif,dan terkadang ada acara
        coding, hackaton, atau diskusi seputar teknologi
      </p>
    </>
  );
};

export default SectionAbout;
