import TextAbout from "./TextAbout";
import Title from "../../UI/Title";
import SubTitle from "../../UI/SubTitle";
import DecorationAbout from "./DecorationAbout";
import SocialMedia from "./SocialMedia";
import ImgAbout from "./ImgAbout";
import BtnAbout from "./BtnAbout";

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
        <BtnAbout />
      </div>
      <div className="relative z-2">
        <ImgAbout />
        <div className="mt-6 -mb-4 flex justify-between px-1">
          <SocialMedia />
        </div>
      </div>
      <DecorationAbout />
    </section>
  );
};

export default SectionAbout;
