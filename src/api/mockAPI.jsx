import QuantityInput from "../components/QuantityInput";

const fetchLoadingAnimation = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  });
};

// Creating Latest Guides Data for Homepage
const latestGuidesData = [
  {
    category: "Skilling & leveling",
    title: "OSRS Crafting Guide 1-99",
    author: "Mina",
    date: "Oct 3rd",
  },
  {
    category: "Tips & Tricks",
    title: "OSRS Crafting Guide 1-99",
    author: "Dillan",
    date: "Oct 2nd",
  },
  {
    category: "Tips & Tricks",
    title: "Monster Hunter Now Referral Codes Guide",
    author: "Andrea",
    date: "Sept 21st",
  },
  {
    category: "Skilling & Leveling",
    title: "OSRS Crafting Guide 1-99",
    author: "Mina",
    date: "Sept 26th",
  },
  {
    category: "GTA V",
    title: "Fans are now looking to the moon for the latest update",
    author: "Andrea Tan",
    date: "Sept 27th",
  },
  {
    category: "FIFA",
    title: "EA delists FIFA titles from all digital storefronts excluding this",
    author: "Mina",
    date: "Sept 14th",
  },
];
const fetchLatestGuideData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(latestGuidesData), 2000);
  });
};

// Table Data
function createData(item, delivery, quantity, price) {
  return { item, delivery, quantity, price };
}

const rows = [
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),

  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),

  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
  createData(
    "[Big-PC] Aklec Prime +2 Lex prime [Bundle] + Free Orokin Catalyst (MR15",
    "48 H",
    <QuantityInput />,
    "$5.00"
  ),
];

const fetchTableData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(rows), 3500);
  });
};

//Creating game statistics image data for items & skins page

const imageURL = [
  { image: "/src/assets/csgo.png" },
  { image: "/src/assets/fortnite.jpg" },
  { image: "/src/assets/valorant.png" },
  { image: "/src/assets/cod.jpg" },
];

const fetchImageData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(imageURL), 3000);
  });
};

export {
  fetchLoadingAnimation,
  fetchLatestGuideData,
  fetchTableData,
  fetchImageData,
};
