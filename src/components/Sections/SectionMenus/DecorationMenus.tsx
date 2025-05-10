import { Fragment } from "react/jsx-runtime";
import Decoration from "../../UI/Decoration";

const DecorationMenus = () => {
  return (
    <Fragment>
      <Decoration
        img="/img/decoration/decor-7.png"
        position="sm:-right-15 right-65 -top-10 sm:top-10 -z-1"
        size="size-40 sm:size-110"
        rotate="rotate-130 sm:rotate-280"
      />
      <Decoration
        img="/img/decoration/decor-5.png"
        position="left-10 top-20 -z-1 hidden sm:block"
        size="size-60"
        rotate="rotate-10"
      />
      <Decoration
        img="/img/decoration/decor-3.png"
        position="-right-5 bottom-10 -z-1 hidden sm:block"
        size="size-50"
        rotate="rotate-10"
      />
      <Decoration
        img="/img/decoration/decor-7.png"
        position="sm:-left-20 -right-10 bottom-0 sm:-bottom-30 -z-1 "
        size="size-40 sm:size-120"
        rotate="rotate-300 sm:rotate-50"
      />
    </Fragment>
  );
};

export default DecorationMenus;
