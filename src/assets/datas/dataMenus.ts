export interface DataMenus {
  name: string;
  description: string;
  id: number;
  price: number;
  rating: string;
  category: string;
  img: string;
  tags: string[];
  reviews: number;
  ingredients: string[];
  nutrition: Nutrition;
}

interface Nutrition {
  calories: number;
  sugar: string;
  caffeine?: string;
  fat?: string;
  protein?: string;
}

const dataMenus: DataMenus[] = [
  {
    name: "Kopi Susu Gula Aren",
    id: 1,
    description:
      "Perpaduan antara espresso berkualitas dengan susu segar dan manisnya gula aren khas Nusantara menciptakan cita rasa yang lembut namun tetap memiliki karakter kuat dari kopi. Cocok dinikmati saat pagi atau sore hari untuk menyegarkan pikiran.",
    price: 23000,
    rating: "4.8/5",
    category: "Kopi",
    img: "/img/menu_products/menu-kopi/kopi-susu-gula-aren.png",
    tags: ["kopi susu", "gula aren", "favorit"],
    reviews: 4000,
    ingredients: ["Espresso", "Susu segar", "Gula aren"],
    nutrition: {
      calories: 150,
      sugar: "12g",
      caffeine: "80mg",
    },
  },
  {
    name: "Croissant Almond",
    id: 2,
    description:
      "Croissant berlapis-lapis yang dipanggang sempurna, disajikan dengan taburan almond renyah dan isian krim yang lembut. Setiap gigitannya memberi sensasi gurih dan manis yang cocok sebagai teman kopi atau camilan di waktu santai.",
    price: 18000,
    rating: "4.6/5",
    category: "Roti",
    img: "/img/menu_products/menu-roti/croissant-almond.png",
    tags: ["croissant", "almond", "pastry"],
    reviews: 5000,
    ingredients: ["Tepung terigu", "Mentega", "Almond", "Krim"],
    nutrition: {
      calories: 250,
      sugar: "8g",
      fat: "14g",
    },
  },
  {
    name: "Churros Coklat",
    id: 3,
    description:
      "Churros goreng yang renyah di luar dan empuk di dalam, dilapisi dengan gula kayu manis, disajikan bersama saus coklat pekat yang meleleh di mulut. Camilan bergaya Spanyol ini cocok disantap bersama teman atau sebagai kudapan sore.",
    price: 20000,
    rating: "4.7/5",
    category: "Cemilan",
    img: "/img/menu_products/menu-cemilan/churros-coklat.png",
    tags: ["churros", "coklat", "snack"],
    reviews: 5500,
    ingredients: ["Tepung terigu", "Telur", "Gula", "Kayu manis", "Coklat"],
    nutrition: {
      calories: 300,
      sugar: "15g",
      fat: "10g",
    },
  },
  {
    name: "Es Kopi Tiramisu",
    id: 4,
    description:
      "Minuman dingin dengan perpaduan rasa kopi dan tiramisu yang lembut dan manis. Krim dan sirup tiramisu menciptakan aroma dan rasa khas yang memanjakan lidah, cocok untuk pencinta dessert dalam bentuk minuman.",
    price: 28000,
    rating: "4.5/5",
    category: "Kopi",
    img: "/img/menu_products/menu-kopi/kopi-tiramisu.png",
    tags: ["kopi dingin", "tiramisu", "dessert"],
    reviews: 4500,
    ingredients: ["Espresso", "Susu", "Sirup tiramisu", "Es batu"],
    nutrition: {
      calories: 180,
      sugar: "14g",
      caffeine: "85mg",
    },
  },
  {
    name: "Banana Bread",
    id: 5,
    description:
      "Roti pisang yang lembut dan wangi ini dibuat dari pisang matang pilihan, dipanggang dengan teknik khusus untuk menghasilkan tekstur yang moist. Rasanya manis alami dan cocok untuk sarapan atau camilan sehat di sore hari.",
    price: 15000,
    rating: "4.6/5",
    category: "Roti",
    img: "/img/menu_products/menu-roti/banana-bread.png",
    tags: ["banana bread", "roti pisang", "snack"],
    reviews: 50000,
    ingredients: ["Pisang", "Tepung terigu", "Telur", "Gula", "Mentega"],
    nutrition: {
      calories: 220,
      sugar: "10g",
      fat: "9g",
    },
  },
  {
    name: "Tahu Lada Garam",
    id: 6,
    description:
      "Camilan klasik yang menggoda: tahu goreng renyah dengan bumbu lada dan garam yang pedas gurih. Disajikan hangat, cocok untuk dinikmati bersama teman atau sebagai teman minum kopi dengan rasa lokal yang menggigit.",
    price: 17000,
    rating: "4.7/5",
    category: "Cemilan",
    img: "/img/menu_products/menu-cemilan/tahu-lada-garam.png",
    tags: ["tahu", "pedas", "snack"],
    reviews: 40000,
    ingredients: ["Tahu", "Lada", "Garam", "Tepung", "Minyak goreng"],
    nutrition: {
      calories: 200,
      sugar: "2g",
      fat: "12g",
    },
  },
  {
    name: "Kopi Pandan Latte",
    id: 7,
    description:
      "Kopi latte yang dipadukan dengan aroma pandan khas Indonesia, menghasilkan rasa unik dan menyegarkan. Perpaduan susu, espresso, dan sirup pandan menghadirkan pengalaman ngopi yang tidak biasa namun tetap nikmat.",
    price: 26000,
    rating: "4.5/5",
    category: "Kopi",
    img: "/img/menu_products/menu-kopi/kopi-latte-pandan.png",
    tags: ["kopi pandan", "latte", "unik"],
    reviews: 45000,
    ingredients: ["Espresso", "Susu", "Sirup pandan"],
    nutrition: {
      calories: 160,
      sugar: "11g",
      caffeine: "80mg",
    },
  },
  {
    name: "Waffle Bite",
    id: 8,
    description:
      "Potongan mini waffle yang lembut dan hangat, dapat dipadukan dengan berbagai topping seperti coklat, madu, atau buah segar. Disajikan sebagai camilan manis untuk semua umur dan bisa disesuaikan sesuai selera.",
    price: 22000,
    rating: "4.6/5",
    category: "Cemilan",
    img: "/img/menu_products/menu-cemilan/waffle-bite.png",
    tags: ["waffle", "snack", "manis"],
    reviews: 49000,
    ingredients: [
      "Tepung terigu",
      "Telur",
      "Susu",
      "Gula",
      "Topping sesuai selera",
    ],
    nutrition: {
      calories: 240,
      sugar: "12g",
      fat: "10g",
    },
  },
  {
    name: "Mini Donat Matcha",
    id: 9,
    description:
      "Donat mini dengan tekstur empuk, dilapisi bubuk matcha dan gula halus untuk memberikan keseimbangan rasa manis dan pahit yang elegan. Cocok untuk pencinta matcha atau yang ingin mencoba camilan unik.",
    price: 15000,
    rating: "4.6/5",
    category: "Cemilan",
    img: "/img/menu_products/menu-cemilan/mini-donat.png",
    tags: ["donat", "matcha", "manis"],
    reviews: 35000,
    ingredients: ["Tepung terigu", "Gula", "Matcha", "Telur", "Mentega"],
    nutrition: {
      calories: 200,
      sugar: "10g",
      fat: "8g",
    },
  },
  {
    name: "Espresso Citrus",
    description:
      "Kreasi unik espresso yang dipadukan dengan rasa jeruk segar, menciptakan sensasi rasa pahit, asam, dan manis yang menyegarkan.",
    price: 28000,
    rating: "4.7/5",
    img: "/img/menu_products/menu-kopi/espresso-citrus.png",
    id: 10,
    reviews: 94,
    category: "Kopi",
    tags: ["segar", "unik", "citrus"],
    ingredients: ["espresso", "sirup jeruk", "es batu"],
    nutrition: { calories: 60, protein: "10g", fat: "10g", sugar: "10g" },
  },
  {
    name: "Affogato",
    description:
      "Paduan sempurna antara espresso panas dan es krim vanila lembut yang meleleh perlahan, menciptakan rasa kontras yang memikat.",
    price: 30000,
    rating: "4.9/5",
    img: "/img/menu_products/menu-kopi/affogato.png",
    id: 11,
    reviews: 167,
    category: "Kopi",
    tags: ["dingin", "espresso", "dessert"],
    ingredients: ["espresso", "es krim vanila"],
    nutrition: { calories: 220, protein: "8g", fat: "8g", sugar: "12g" },
  },
  {
    name: "Korean Garlic Bread",
    description:
      "Roti ala Korea dengan campuran krim keju dan bawang putih, tekstur luar renyah dan dalamnya lembut manis gurih.",
    price: 25000,
    rating: "4.9/5",
    reviews: 143,
    category: "Roti",
    img: "/img/menu_products/menu-roti/korean-garlic-bread.png",
    id: 12,
    tags: ["manis", "gurih", "korea"],
    ingredients: [
      "roti bun",
      "bawang putih",
      "cream cheese",
      "mentega",
      "gula",
    ],
    nutrition: { calories: 370, protein: "6g", fat: "22g", sugar: "5g" },
  },
  {
    name: "Roti Panggang Keju",
    description:
      "Roti panggang dengan isian keju leleh yang menggoda, disajikan hangat dengan rasa gurih dan tekstur renyah.",
    price: 19000,
    rating: "4.8/5",
    reviews: 98,
    category: "Roti",
    img: "/img/menu_products/menu-roti/roti-panggang-keju.png",
    id: 13,
    tags: ["keju", "panggang", "hangat"],
    ingredients: ["roti tawar", "keju cheddar", "mentega"],
    nutrition: { calories: 330, protein: "9g", fat: "20g", sugar: "13g" },
  },
  {
    name: "Roti Gandum Isi Tuna",
    description:
      "Roti gandum sehat diisi tuna segar dan mayones ringan, kaya protein dan cocok untuk sarapan atau makan siang cepat.",
    price: 22000,
    rating: "4.7/5",
    reviews: 52,
    category: "Roti",
    img: "/img/menu_products/menu-roti/roti-gandum-tuna.png",
    id: 14,
    tags: ["sehat", "protein tinggi", "sarapan"],
    ingredients: ["roti gandum", "tuna", "mayones", "selada", "timun"],
    nutrition: { calories: 280, protein: "14g", fat: "10", sugar: "4g" },
  },
  {
    name: "Risoles Mayo",
    description:
      "Risoles renyah berisi mayones creamy, telur, dan smoked beef, cocok dinikmati sebagai teman kopi di waktu santai.",
    price: 18000,
    rating: "4.6/5",
    reviews: 87,
    category: "Snack",
    img: "/img/menu_products/menu-cemilan/risole-mayo.png",
    id: 15,
    tags: ["gurih", "hangat", "favorit"],
    ingredients: [
      "tepung roti",
      "mayones",
      "telur",
      "smoked beef",
      "wortel",
      "kentang",
    ],
    nutrition: { calories: 210, protein: "5g", fat: "11g", sugar: "5g" },
  },
  {
    name: "French Fries",
    description:
      "Kentang goreng renyah disajikan dengan taburan garam halus dan pilihan saus sambal atau keju, pas untuk camilan kapan saja.",
    price: 20000,
    rating: "4.5/5",
    reviews: 134,
    category: "Snack",
    img: "/img/menu_products/menu-cemilan/french-fries.png",
    id: 16,
    tags: ["renyah", "asin", "camilan"],
    ingredients: ["kentang", "garam", "minyak goreng"],
    nutrition: { calories: 312, protein: "4g", fat: "17g", sugar: "10g" },
  },
];

export default dataMenus;
