import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";

export default function Index() {
  const item: ItemType = {
    id: 0,
    name: "sample",
    status: "sold",
    url: "",
  };
  return (
    <Layout title="home">
      <div className="grid grid-cols-3 gap-4">
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
        <Item item={item} />
      </div>
    </Layout>
  );
}
