export type SlideProduct = {
  img: string;
  price: number;
  disconPrice: number;
  description: string;
  category: string;
  tag: string[];
  id: number;
  rate: string;
  review: number;
  quantity?: number;
  nama: string;
};

const slideProduct: SlideProduct[] = [
  {
    nama: "Peet's",
    img: "/img/product_img/coffe-bag-5.png",
    disconPrice: 80000,
    category: "Coffe pods",
    price: 75000,
    description:
      "Luxury in every cup. Enjoy barista-quality coffee with Nespresso's bold",
    tag: ["#EspressoLovers", "#RoastedToPerfection"],
    id: 1,
    rate: "4/5",
    review: 546,
  },
  {
    nama: "Espresso Blend",
    img: "/img/product_img/coffe-bag-6.png",
    disconPrice: 150000,
    category: "Coffe pods",
    price: 69999,
    description:
      "Lavazza brings the rich aroma and flavor of authentic espresso straight to your cup.",
    tag: ["#EspressoLovers", "#RichAndBold"],
    id: 3,
    rate: "3.9/5",
    review: 250,
  },
  {
    nama: "Nespresso",
    img: "/img/product_img/coffe-bag.png",
    disconPrice: 15000,
    category: "Flavored Coffe",
    price: 10000,
    description:
      "Crafted for coffee lovers. Peet's dark roasts bring intense, robust flavors to fuel your passion.",
    tag: ["#EspressoLovers", "#ColdBrewPerfect"],
    id: 6,
    rate: "4.5/5",
    review: 1846,
  },
  {
    nama: "keurig",
    img: "/img/product_img/coffe-bag-1.png",
    disconPrice: 20000,
    category: "Coffe Blend",
    price: 15000,
    description:
      "A premium blend of Arabica beans with chocolate, caramel, and a hint of berries.",
    tag: ["#EspressoBlend", "#RichFlavor", "#ChocolateNotes"],
    id: 7,
    rate: "4.2/5",
    review: 1490,
  },
];

export default slideProduct;
