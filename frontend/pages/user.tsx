import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";

export default function Index() {
  const item: ItemType = {
    id: 0,
    name: "sample",
    status: "sold",
    url: "",
    price: 200,
  };
  return (
    <Layout title="home">
      <div></div>
      <div className="grid grid-cols-3 gap-4">
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
