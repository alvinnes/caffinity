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
import TextAbout from "../SectionText/TextAbout";
import Title from "../UI/Title";
import SubTitle from "../UI/SubTitle";
import Decoration from "../UI/Decoration";

const SectionAbout = () => {
  return (
    <section
      className="bg-secondary/25 relative flex w-full flex-col-reverse items-center justify-around gap-25 py-40 sm:flex-row sm:gap-0"
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
      <Decoration
        img="/img/decoration/decor-6.png"
        position="sm:top-0 top-130 -right-10 sm:-right-20"
        rotate="rotate-250"
        size="sm:size-100 size-55 -z-1"
      />
      <Decoration
        img="/img/decoration/decor-1.png"
        position="-top-10 -left-20"
        rotate="rotate-130"
        size="size-80 -z-1"
      />
      <Decoration
        img="/img/decoration/decor-5.png"
        position="sm:bottom-8 bottom-0 right-5 sm:right-1/2 sm:-mr-70"
        rotate="rotate-250"
        size="size-40 -z-1"
      />
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
    <div className="w-fit items-center gap-2 rounded-md bg-white px-2.5 py-1.5 text-xs shadow-xs">
      <a href={link}>{icon}</a>
    </div>
  );
};

export default SectionAbout;
