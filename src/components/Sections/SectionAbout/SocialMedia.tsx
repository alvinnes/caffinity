import {
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { ReactNode } from "react";

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

export default SocialMedia;
