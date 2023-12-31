import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import Link from "next/link";

const ItemNC1: ItemType = {
  id: 0,
  name: "乃木コレ 齋藤飛鳥SSR",
  status: "",
  url: "/images/乃木コレ1_齋藤SSR.jpg",
  price: 21000,
};
const ItemNC2: ItemType = {
  id: 0,
  name: "乃木コレ 齋藤飛鳥SSR",
  status: "",
  url: "/images/乃木コレ2_齋藤SSR2.jpg",
  price: 21000,
};
const ItemNC3: ItemType = {
  id: 0,
  name: "乃木コレ 賀喜遥香SSR",
  status: "",
  url: "/images/乃木コレ3_賀喜SSR.jpg",
  price: 7900,
};
const ItemNC4: ItemType = {
  id: 0,
  name: "乃木コレ 中村麗乃",
  status: "",
  url: "/images/乃木コレ4_中村.jpg",
  price: 300,
};
const ItemNC5: ItemType = {
  id: 0,
  name: "乃木コレ 五百城茉央",
  status: "",
  url: "/images/乃木コレ5_五百城.jpg",
  price: 600,
};
const ItemNC6: ItemType = {
  id: 0,
  name: "乃木コレ 伊藤理々杏SSR",
  status: "sold",
  url: "/images/乃木コレ6_伊藤SSR.jpg",
  price: 3900,
};
const ItemNC7: ItemType = {
  id: 0,
  name: "乃木コレ 与田祐希SSR",
  status: "",
  url: "/images/乃木コレ7_与田SSR.jpg",
  price: 17000,
};
const ItemNC8: ItemType = {
  id: 0,
  name: "乃木コレ 五百城茉央SR",
  status: "sold",
  url: "/images/乃木コレ8_五百城SR.jpg",
  price: 2200,
};
const ItemNC9: ItemType = {
  id: 0,
  name: "乃木コレ 池田瑛紗",
  status: "",
  url: "/images/乃木コレ9_池田1.jpg",
  price: 580,
};
const ItemNC10: ItemType = {
  id: 0,
  name: "乃木コレ 池田瑛紗",
  status: "",
  url: "/images/乃木コレ10_池田2.jpg",
  price: 580,
};
const ItemNC11: ItemType = {
  id: 0,
  name: "乃木コレ 池田瑛紗",
  status: "",
  url: "/images/乃木コレ11_池田3.jpg",
  price: 580,
};
const ItemNC12: ItemType = {
  id: 0,
  name: "乃木コレ 山下美月SSR",
  status: "",
  url: "/images/乃木コレ12_山下SSR.jpg",
  price: 16000,
};
const Poke1: ItemType = {
  id: 0,
  name: "ポケモン リザードン",
  status: "",
  url: "/images/ポケモン1_リザードン.jpg",
  price: 770,
};
const Poke2: ItemType = {
  id: 0,
  name: "ポケモン いたずら好きのピチュー",
  status: "",
  url: "/images/ポケモン2_ピチュー.jpg",
  price: 890,
};
const Poke3: ItemType = {
  id: 0,
  name: "ポケモン ミュウツー",
  status: "",
  url: "/images/ポケモン3_ミュウツー.jpg",
  price: 2800,
};
const Poke4: ItemType = {
  id: 0,
  name: "ポケモン マリオピカチュウ",
  status: "",
  url: "/images/ポケモン4_マリオピカチュウ.jpg",
  price: 160000,
};
const Poke5: ItemType = {
  id: 0,
  name: "ポケモン ピカチュウ",
  status: "",
  url: "/images/ポケモン5_ピカチュウ昼寝.jpg",
  price: 33000,
};
const Poke6: ItemType = {
  id: 0,
  name: "ポケモン リザードンex",
  status: "",
  url: "/images/ポケモン6_リザードンex.jpg",
  price: 3900,
};
const Poke7: ItemType = {
  id: 0,
  name: "ポケモン ナンジャモ",
  status: "",
  url: "/images/ポケモン7_ナンジャモ.jpg",
  price: 67000,
};
const Poke8: ItemType = {
  id: 0,
  name: "ポケモン ナンジャモ",
  status: "",
  url: "/images/ポケモン8_ナンジャモR.jpg",
  price: 89000,
};
const Poke9: ItemType = {
  id: 0,
  name: "ポケモン ミライドンex",
  status: "",
  url: "/images/ポケモン9_ミライドンex.jpg",
  price: 3900,
};
const Poke10: ItemType = {
  id: 0,
  name: "ポケモン リザードンex2",
  status: "",
  url: "/images/ポケモン10_リザードンex2.jpg",
  price: 2900,
};

export { ItemNC1, ItemNC2, ItemNC3, ItemNC4, ItemNC5, ItemNC6, ItemNC7, ItemNC8, ItemNC9, ItemNC10, ItemNC11, ItemNC12, Poke1, Poke2, Poke3, Poke4, Poke5, Poke6, Poke7, Poke8, Poke9, Poke10 }