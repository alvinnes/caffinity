import { Fragment } from "react/jsx-runtime";
import NotifAddToCart from "./NotifAddToCart";
import { CheckCircle, X } from "@phosphor-icons/react";
import useNotifCart from "../../../hooks/useNotifCart";

const SectionNotif = () => {
  const isClickedCart = useNotifCart((state) => state.isClicked);
  const isClickedWiselist = useNotifCart((state) => state.isClickedWiselist);
  const isSuccesAddWishlist = useNotifCart(
    (state) => state.isSuccesAddWishlist,
  );

  return (
    <Fragment>
      <NotifAddToCart
        isClicked={isClickedCart}
        text="Berhasil Memasukkan"
        icon={
          <CheckCircle size={30} className="text-emerald-300" weight="fill" />
        }
      />
      <NotifAddToCart
        isClicked={isClickedWiselist}
        text="Product sudah ada di wiselist"
        icon={<X size={30} className="text-red-500" weight="fill" />}
      />
      <NotifAddToCart
        isClicked={isSuccesAddWishlist}
        text="Berhasil Memasukkan"
        icon={
          <CheckCircle size={30} className="text-emerald-300" weight="fill" />
        }
      />
    </Fragment>
  );
};

export default SectionNotif;
