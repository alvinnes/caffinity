export type SlideHeaderProduct = {
  img: string;
  price: number;
  disconPrice: number;
  rating: string;
  name: string;
};

const slideHeaderProduct: SlideHeaderProduct[] = [
  {
    img: "/img/product_img/coffe-bag-5.png",
    disconPrice: 19000,
    price: 15000,
    rating: "4.5/5",
    name: "Peet's",
  },
  {
    img: "/img/product_img/coffe-bag-6.png",
    disconPrice: 22000,
    price: 20000,
    rating: "4.6/5",
    name: "Espresso Blend",
  },
  {
    img: "/img/product_img/coffe-bag.png",
    disconPrice: 35000,
    price: 30000,
    rating: "4.6/5",
    name: "Nespresso",
  },
  {
    img: "/img/product_img/coffe-bag-2.png",
    disconPrice: 38000,
    price: 35000,
    rating: "4.9/5",
    name: "Lavazza",
  },
];

export default slideHeaderProduct;
