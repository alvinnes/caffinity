import { Fragment } from "react/jsx-runtime";
import Decoration from "../../UI/Decoration";

const DecorationFeatures = () => {
  return (
    <Fragment>
      <Decoration
        img="/img/decoration/decor-1.png"
        rotate="rotate-280 sm:rotate-290"
        size="size-35 sm:size-80 -z-1"
        position="sm:top-6 top-11/12 -right-4 sm:-right-8"
      />
      <Decoration
        img="/img/decoration/decor-2.png"
        rotate="rotate-100"
        size="size-35 sm:size-80 -z-1"
        position="-top-4 -left-4 sm:-left-8"
      />
    </Fragment>
  );
};

export default DecorationFeatures;
