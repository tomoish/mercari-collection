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
  const item2: ItemType = {
    id: 0,
    name: "コナン100巻",
    status: "hold",
    url: "https://iss.ndl.go.jp/thumbnail/9784098507177",
    price: 200,
  };
  return (
    <Layout title="home">
      <div className="p-2">
        <Item item={item} showPrice={false} />
      </div>
      {item.status === "sold" ? (
        <div>Item is sold</div>
      ) : item.status === "on sale" ? (
        <div>出品中です</div>
      ) : item.status === "hold" ? (
        <div>出品しますか？</div>
      ) : (
        <div></div>
      )}
      <div>推移図</div>
      <div>insight</div>
      <div className="grid grid-cols-3 gap-4 p-2">
        <Item item={item} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
      </div>
    </Layout>
  );
}
