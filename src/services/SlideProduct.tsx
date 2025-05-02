export type SlideProduct = {
  img: string;
  price: number;
  disconPrice: number;
};

const slideProduct: SlideProduct[] = [
  {
    img: "/img/product_img/coffe-bag-5.png",
    disconPrice: 15000,
    price: 19000,
  },
  {
    img: "/img/product_img/coffe-bag-6.png",
    disconPrice: 20000,
    price: 22000,
  },
  {
    img: "/img/product_img/coffe-bag.png",
    disconPrice: 30000,
    price: 35000,
  },
  {
    img: "/img/product_img/coffe-bag-1.png",
    disconPrice: 35000,
    price: 38000,
  },
];

export default slideProduct;
