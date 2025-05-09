import {
  ArrowCircleUpRight,
  ArrowRight,
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { ReactNode } from "react";
import RadialGradient from "../UI/RadialGradient";
import TextAbout from "../SectionText/TextAbout";
import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";

const SectionAbout = () => {
  return (
    <section
      className="relative flex w-full flex-col-reverse items-center justify-around gap-25 py-40 sm:flex-row sm:gap-0"
      id="about"
    >
      <div className="flex w-10/12 flex-col gap-4 sm:w-xl">
        <div className="flex flex-col gap-4">
          <SubTitle text="Tentang kami" />
          <Title text="Cerita di Balik Caffinity" />
        </div>
        <TextAbout />
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button className="flex w-fit items-center gap-2 rounded-sm bg-slate-800 px-4 py-2.5 text-white shadow-sm">
            <ArrowCircleUpRight size={25} />
            Jelajahi Kopi Kami
          </button>
          <button
            className={`relative flex w-fit items-center gap-2 rounded-sm px-4 py-2.5`}
          >
            Hubungi Kami
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="h-80 w-70 overflow-hidden rounded-xl bg-slate-300 sm:h-90 sm:w-80">
          <img src="/img/bg-1.jpg" alt="" className="size-full object-cover" />
        </div>
        <div className="absolute top-1/2 -left-10 size-35 -translate-y-1/2 overflow-hidden rounded-xl bg-slate-400 sm:-left-25 sm:size-40">
          <img
            src="/img/product_img/coffe-bag-9.jpeg"
            alt=""
            className="size-full object-cover"
          />
        </div>
        <div className="mt-6 -mb-4 flex justify-between px-1">
          <SocialMedia />
        </div>
      </div>
      <RadialGradient position="top-50 sm:top-0 right-10" size="size-80" />
      <RadialGradient position="bottom-25 left-10" size="size-100" />
    </section>
  );
};

const SocialMedia = () => {
  return (
    <>
      <SocialMediaItem icon={<InstagramLogo size={23} />} link="#" />
      <SocialMediaItem icon={<WhatsappLogo size={23} />} link="#" />
      <SocialMediaItem icon={<FacebookLogo size={23} />} link="#" />
      <SocialMediaItem icon={<TwitterLogo size={23} />} link="#" />
      <SocialMediaItem icon={<TiktokLogo size={23} />} link="#" />
    </>
  );
};

type SocialMediaItemProps = {
  icon: ReactNode;
  link?: string;
};

const SocialMediaItem = (props: SocialMediaItemProps) => {
  const { icon, link } = props;
  return (
    <div className="w-fit items-center gap-2 rounded-md bg-slate-100/80 px-2.5 py-1.5 text-xs">
      <a href={link}>{icon}</a>
    </div>
  );
};

export default SectionAbout;
