import { Fragment } from "react/jsx-runtime";
import Decoration from "../UI/Decoration";

const DecorationMenusPage = () => {
  return (
    <Fragment>
      <Decoration
        img="/img/decoration/decor-10.png"
        size="size-30 sm:w-40 object-cover h-20"
        rotate="rotate-200 sm:rotate-190"
        position="top-20 sm:top-40 left-60 sm:left-30"
      />
      <Decoration
        img="/img/decoration/decor-9.png"
        size="sm:size-40 size-30"
        rotate="sm:rotate-250"
        position="sm:top-30 sm:right-30 right-0 top-90 "
      />
    </Fragment>
  );
};

export default DecorationMenusPage;
