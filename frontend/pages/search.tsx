import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";

export default function Index() {
    const item: ItemType = {
        id: 0,
        name: "コナン100巻",
        status: "sold",
        url: "https://iss.ndl.go.jp/thumbnail/9784098507177",
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
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
            <Item item={item} showPrice={true} />
        </div>
        </Layout>
    );
}
