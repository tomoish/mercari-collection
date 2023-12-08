import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";

export default function Index() {
    const item1: ItemType = {
      id: 0,
      name: "乃木コレ 賀喜遥香SSR",
      status: "",
      url: "/images/乃木コレ7_賀喜SSR.jpg",
      price: 14000,
    };
    const item2: ItemType = {
      id: 0,
      name: "乃木コレ 五百城茉央SR",
      status: "sold",
      url: "/images/乃木コレ8_五百城SR.jpg",
      price: 2200,
    };
    const item3: ItemType = {
      id: 0,
      name: "乃木コレ 池田瑛紗",
      status: "",
      url: "/images/乃木コレ9_池田1.jpg",
      price: 580,
    };
    const item4: ItemType = {
      id: 0,
      name: "乃木コレ 池田瑛紗",
      status: "sold",
      url: "/images/乃木コレ10_池田2.jpg",
      price: 580,
    };
    const item5: ItemType = {
      id: 0,
      name: "乃木コレ 五百城茉央",
      status: "sold",
      url: "/images/乃木コレ5_五百城.jpg",
      price: 600,
    };
    const item6: ItemType = {
      id: 0,
      name: "乃木コレ 伊藤理々杏SSR",
      status: "sold",
      url: "/images/乃木コレ6_伊藤SSR.jpg",
      price: 3900,
    };
    const item7: ItemType = {
      id: 0,
      name: "ポケモン ピカチュウ",
      status: "hold",
      url: "/images/ポケモン5_ピカチュウ昼寝",
      price: 33000,
    };
    const item8: ItemType = {
      id: 0,
      name: "ポケモン ナンジャモ",
      status: "hold",
      url: "/images/ポケモン8_ナンジャモR.jpg",
      price: 89000,
    };
    const item9: ItemType = {
      id: 0,
      name: "ポケモン ナンジャモ",
      status: "hold",
      url: "/images/ポケモン7_ナンジャモ.jpg",
      price: 67000,
    };
    const item10: ItemType = {
      id: 0,
      name: "ポケモン ナンジャモ",
      status: "hold",
      url: "/images/ポケモン8_ナンジャモR.jpg",
      price: 89000,
    };
    const item11: ItemType = {
      id: 0,
      name: "ポケモン ミライドンex",
      status: "hold",
      url: "/images/ポケモン9_ミライドンex.jpg",
      price: 3900,
    };
    const item12: ItemType = {
      id: 0,
      name: "ポケモン リザードンex2",
      status: "hold",
      url: "/images/ポケモン10_リザードンex2.jpg",
      price: 2900,
    };
    return (
    <Layout title="home">
        <div className="h-20 flex items-center justify-center text-center">
            <div className="flex items-center justify-center">
            <input
                type="text"
                placeholder="Search..."
                className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
            />
            <button
                className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => {
                // Handle search button click
                }}
            >
                Search
            </button>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 p-2">
            <Item item={item6} showPrice={true} />
            <Item item={item5} showPrice={true} />
            <Item item={item9} showPrice={true} />
            <Item item={item10} showPrice={true} />
            <Item item={item11} showPrice={true} />
            <Item item={item4} showPrice={true} />
            <Item item={item3} showPrice={true} />
            <Item item={item8} showPrice={true} />
            <Item item={item2} showPrice={true} />
            <Item item={item12} showPrice={true} />
            <Item item={item1} showPrice={true} />
            <Item item={item7} showPrice={true} />
        </div>
        </Layout>
    );
}
