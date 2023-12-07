import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";

export default function Index() {
  const item: ItemType = {
    id: 0,
    name: "乃木コレ 齋藤飛鳥SSR",
    status: "",
    url: "/images/乃木コレ_齋藤飛鳥SSR.jpg",
    price: 21000,
  };
  const item2: ItemType = {
    id: 0,
    name: "乃木コレ 賀喜遥香SSR",
    status: "",
    url: "/images/乃木コレ1.jpg",
    price: 14000,
  };
  const item3: ItemType = {
    id: 0,
    name: "乃木コレ 齋藤飛鳥SR",
    status: "",
    url: "/images/乃木コレ2.jpg",
    price: 7900,
  };
  const item4: ItemType = {
    id: 0,
    name: "乃木コレ 中村麗乃",
    status: "",
    url: "/images/乃木コレ3.jpg",
    price: 300,
  };
  const item5: ItemType = {
    id: 0,
    name: "乃木コレ 五百城茉央",
    status: "sold",
    url: "/images/乃木コレ4.jpeg",
    price: 600,
  };
  const item6: ItemType = {
    id: 0,
    name: "乃木コレ 伊藤理々杏SSR",
    status: "sold",
    url: "/images/乃木コレ5.jpg",
    price: 3900,
  };
  const item7: ItemType = {
    id: 0,
    name: "乃木コレ 賀喜遥香SSR",
    status: "",
    url: "/images/乃木コレ11.jpg",
    price: 14000,
  };
  const item8: ItemType = {
    id: 0,
    name: "乃木コレ 五百城茉央SR",
    status: "sold",
    url: "/images/乃木コレ7.jpg",
    price: 2200,
  };
  const item9: ItemType = {
    id: 0,
    name: "乃木コレ 池田瑛紗",
    status: "",
    url: "/images/乃木コレ8.jpg",
    price: 580,
  };
  const item10: ItemType = {
    id: 0,
    name: "乃木コレ 池田瑛紗",
    status: "sold",
    url: "/images/乃木コレ9.jpg",
    price: 580,
  };
  const item11: ItemType = {
    id: 0,
    name: "乃木コレ 池田瑛紗",
    status: "",
    url: "/images/乃木コレ10.jpg",
    price: 580,
  };
  const item12: ItemType = {
    id: 0,
    name: "乃木コレ 山下美月SSR",
    status: "",
    url: "/images/乃木コレ12.jpg",
    price: 16000,
  };
  return (
    <Layout title="home">
      <div className="h-20 flex items-center justify-center">
        <div className="mr-4">
          <img
            src="/images/ユーザーアイコン.jpg"
            alt="ユーザーアイコン"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <p className="text-4xl font-semibold">乃木坂コレクター</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-2">
        <Item item={item} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item3} showPrice={false} />
        <Item item={item4} showPrice={false} />
        <Item item={item5} showPrice={false} />
        <Item item={item6} showPrice={false} />
        <Item item={item7} showPrice={false} />
        <Item item={item8} showPrice={false} />
        <Item item={item9} showPrice={false} />
        <Item item={item10} showPrice={false} />
        <Item item={item11} showPrice={false} />
        <Item item={item12} showPrice={false} />
      </div>
    </Layout>
  );
}
