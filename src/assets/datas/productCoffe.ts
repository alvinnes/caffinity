export interface ProductCoffe {
  nama: string;
  category: string;
  price: number;
  img: string;
  description: string;
  tag: string[];
  id: number;
  rate: string;
  review: number;
}

const productCoffe: ProductCoffe[] = [
  {
    nama: "Nespresso",
    category: "Coffe pods",
    price: 80000,
    img: "/img/product_img/coffe-bag.png",
    description:
      "Luxury in every cup. Enjoy barista-quality coffee with Nespresso's bold",
    tag: ["#EspressoLovers", "#RoastedToPerfection"],
    id: 1,
    rate: "4/5",
    review: 546,
  },
  {
    nama: "Keurig",
    category: "Coffe pods",
    price: 50000,
    img: "/img/product_img/coffe-bag-1.png",
    description:
      "Coffee made simple. perfect for busy mornings and relaxing afternoons.",
    tag: ["#EspressoLovers", "#CoffeeAtItsBest"],
    id: 2,
    rate: "4.3/5",
    review: 1265,
  },
  {
    nama: "Lavazza",
    category: "Coffe pods",
    price: 80000,
    img: "/img/product_img/coffe-bag-2.png",
    description:
      "Lavazza brings the rich aroma and flavor of authentic espresso straight to your cup.",
    tag: ["#EspressoLovers", "#RichAndBold"],
    id: 3,
    rate: "3.9/5",
    review: 250,
  },
  {
    nama: "Illy",
    category: "Ground coffe",
    price: 90000,
    img: "/img/product_img/coffe-bag-3.png",
    description:
      "Pure perfection in every sip.100% Arabica coffee that's balanced, elegant, and unforgettable.",
    tag: ["#EspressoLovers", "#ArabicaBeans"],
    id: 4,
    rate: "4.3/5",
    review: 877,
  },
  {
    nama: "Bustelo",
    category: "ground coffe",
    price: 40000,
    img: "/img/product_img/coffe-bag-4.png",
    description:
      "Bustelo's strong Latin-style coffee packs the perfect punch to kickstart your day.",
    tag: ["#EspressoLovers", "#SignatureBlend"],
    id: 5,
    rate: "4.7/5",
    review: 2546,
  },
  {
    nama: "Peet's",
    category: "Flavored Coffe",
    price: 15000,
    img: "/img/product_img/coffe-bag-5.png",
    description:
      "Crafted for coffee lovers. Peet's dark roasts bring intense, robust flavors to fuel your passion.",
    tag: ["#EspressoLovers", "#ColdBrewPerfect"],
    id: 6,
    rate: "4.5/5",
    review: 1846,
  },
  {
    nama: "Espresso Blend",
    category: "Coffe Blend",
    price: 20000,
    img: "/img/product_img/coffe-bag-6.png",
    description:
      "A premium blend of Arabica beans with chocolate, caramel, and a hint of berries.",
    tag: ["#EspressoBlend", "#RichFlavor", "#ChocolateNotes"],
    id: 7,
    rate: "4.2/5",
    review: 1490,
  },
  {
    nama: "Single Origin Ethiopia",
    category: "Coffe Blend",
    price: 56500,
    img: "/img/product_img/coffe-bag-7.png",
    description:
      " Arabica coffee from Ethiopia with floral, citrus, and honey-like sweetness.",
    tag: ["#EthiopiaCoffee", "#SingleOrigin", "#FloralNotes"],
    id: 8,
    rate: "3.6/5",
    review: 446,
  },
  {
    nama: "House Blend",
    category: "Coffe Blend",
    price: 47000,
    img: "/img/product_img/coffe-bag-8.jpeg",
    description:
      "A balanced combination of Arabica and Robusta beans, perfect for black coffee ",
    tag: ["#EverydayCoffee", "#BalancedFlavor", "#ArabicaAndRobusta"],
    id: 9,
    rate: "3.5/5",
    review: 146,
  },
  {
    nama: "Cold Brew Blend",
    category: "Coffe Pods",
    price: 53500,
    img: "/img/product_img/coffe-bag-9.jpeg",
    description:
      "Specially crafted for cold brews, with flavors of dark chocolate, nuts, and tropical fruits.",
    tag: ["#ColdBrewCoffee", "#SmoothAndCool", "#PerfectForSummer"],
    id: 10,
    rate: "4.8/5",
    review: 11546,
  },
  {
    nama: "Dark Roast Sumatra",
    category: "Flavored Coffe",
    price: 56500,
    img: "/img/product_img/coffe-bag-10.png",
    description:
      "Coffee from Sumatra with bold, earthy flavors and a hint of spice.",
    tag: ["#SumatraCoffee", "#BoldAndEarthy", "#DarkRoastLovers"],
    id: 11,
    rate: "4.4/5",
    review: 3546,
  },
  {
    nama: " Light Roast Guatemala",
    category: "Ground Coffe",
    price: 60000,
    img: "/img/product_img/coffe-bag-11.png",
    description:
      "Light roast with citrus, green apple, and a touch of chocolate aftertaste.",
    tag: ["#GuatemalaCoffee", "#LightRoast", "#BrightAndFruity"],
    id: 12,
    rate: "4.9/5",
    review: 78546,
  },
  {
    nama: "Decaf Blend",
    category: "Coffe Blend",
    price: 25000,
    img: "/img/product_img/coffe-bag-12.png",
    description:
      "A caffeine-free coffee with a light chocolate taste and slight sweetness.",
    tag: ["#DecafCoffee", "#NoCaffeineNeeded", "#RelaxWithCoffee"],
    id: 13,
    rate: "4.1/5",
    review: 2546,
  },
  {
    nama: "Hazelnut Coffee",
    category: "Flavored Coffe",
    price: 28000,
    img: "/img/product_img/coffe-bag-13.png",
    description:
      "Coffee with mocha and hazelnut aromas for those who love unique flavors.",
    tag: ["#FlavoredCoffee", "#MochaHazelnut", "#NuttyAndRich"],
    id: 14,
    rate: "5/5",
    review: 122546,
  },
];

export default productCoffe;
