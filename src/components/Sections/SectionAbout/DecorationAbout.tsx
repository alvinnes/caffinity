import { Fragment } from "react/jsx-runtime";
import Decoration from "../../UI/Decoration";

const DecorationAbout = () => {
  return (
    <Fragment>
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
        size="size-80 z-1"
      />
      <Decoration
        img="/img/decoration/decor-5.png"
        position="sm:bottom-8 bottom-0 right-5 sm:right-1/2 sm:-mr-70"
        rotate="rotate-250"
        size="size-40 -z-1"
      />
    </Fragment>
  );
};

export default DecorationAbout;
