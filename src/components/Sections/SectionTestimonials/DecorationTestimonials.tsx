import { Fragment } from "react/jsx-runtime";
import Decoration from "../../UI/Decoration";

const DecorationTestimonials = () => {
  return (
    <Fragment>
      <Decoration
        img="/img/decoration/decor-6.png"
        position="-left-4 sm:-left-8 top-0"
        size="size-40 sm:size-100"
        rotate="rotate-90"
      />
      <Decoration
        img="/img/decoration/decor-6.png"
        position="right-0 -bottom-4 sm:-bottom-8"
        size="size-40 sm:size-110"
        rotate="rotate-250"
      />
      <Decoration
        img="/img/decoration/decor-4.png"
        position="sm:right-22 right-4 top-1/2 -translate-y-1/2 -mt-10 sm:-mt-20"
        size="size-35 sm:size-50"
      />
    </Fragment>
  );
};

export default DecorationTestimonials;
