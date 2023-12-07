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
      <div className="h-20 flex items-center justify-center">
        <div className="mr-4">
          <img
            src="https://iss.ndl.go.jp/thumbnail/9784098507177"
            alt="ユーザーアイコン"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <p className="text-4xl font-semibold">江戸川コナン</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-2">
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
      </div>
    </Layout>
  );
}
