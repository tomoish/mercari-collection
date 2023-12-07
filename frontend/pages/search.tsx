import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";

export default function Index() {
    const item: ItemType = {
        id: 0,
        name: "コナン100巻",
        status: "sold",
        url: "images/乃木コレ7.jpg",
        price: 200,
    };
    const item2: ItemType = {
      id: 0,
      name: "コナン100巻",
      status: "hold",
      url: "images/乃木コレ8.jpg",
      price: 200,
    };
    const item3: ItemType = {
      id: 0,
      name: "コナン100巻",
      status: "hold",
      url: "images/乃木コレ9.jpg",
      price: 200,
    };
    const item4: ItemType = {
      id: 0,
      name: "コナン100巻",
      status: "hold",
      url: "images/乃木コレ10.jpg",
      price: 200,
    };
    const item5: ItemType = {
      id: 0,
      name: "ポケモン3",
      status: "hold",
      url: "images/ポケモン3.jpg",
      price: 200,
    };
    const item6: ItemType = {
      id: 0,
      name: "ポケモン4",
      status: "hold",
      url: "images/ポケモン4.jpeg",
      price: 200,
    };
    const item7: ItemType = {
      id: 0,
      name: "ポケモン5",
      status: "hold",
      url: "images/ポケモン5.jpg",
      price: 200,
    };
    const item8: ItemType = {
      id: 0,
      name: "ポケモン6",
      status: "hold",
      url: "images/ポケモン6.jpg",
      price: 200,
    };
    const item9: ItemType = {
      id: 0,
      name: "ポケモン7",
      status: "hold",
      url: "images/ポケモン7.jpeg",
      price: 200,
    };
    const item10: ItemType = {
      id: 0,
      name: "ポケモン8",
      status: "hold",
      url: "images/ポケモン8.webp",
      price: 200,
    };
    const item11: ItemType = {
      id: 0,
      name: "ポケモン9",
      status: "hold",
      url: "images/ポケモン9.jpeg",
      price: 200,
    };
    const item12: ItemType = {
      id: 0,
      name: "ポケモン10",
      status: "hold",
      url: "images/ポケモン10.jpg",
      price: 200,
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
            <Item item={item11} showPrice={true} />
            <Item item={item5} showPrice={true} />
            <Item item={item12} showPrice={true} />
            <Item item={item4} showPrice={true} />
            <Item item={item3} showPrice={true} />
            <Item item={item10} showPrice={true} />
            <Item item={item3} showPrice={true} />
            <Item item={item9} showPrice={true} />
            <Item item={item2} showPrice={true} />
            <Item item={item8} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item7} showPrice={true} />
        </div>
        </Layout>
    );
}
