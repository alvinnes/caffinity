import { Fragment } from "react/jsx-runtime";

const ImgAbout = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ImgAbout;
