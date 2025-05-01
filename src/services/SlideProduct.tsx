export type SlideProduct = {
  img: string;
  price: number;
  disconPrice: number;
};

const slideProduct: SlideProduct[] = [
  {
    img: "/img/product_img/coffe-bag-5.png",
    disconPrice: 788,
    price: 500,
  },
  {
    img: "/img/product_img/coffe-bag-6.png",
    disconPrice: 988,
    price: 600,
  },
  {
    img: "/img/product_img/coffe-bag-12.png",
    disconPrice: 488,
    price: 200,
  },
];

export default slideProduct;
