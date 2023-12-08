import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Index() {
  const user_data = useSelector((state: any) => state.user.value);
  const item0 = useSelector((state: any) => state.item.value);
  const router = useRouter();

  const handleClick = (item: ItemType) => {
    try {
      const requestData = {
        "uid": `${user_data.id}`,
        "user_name": user_data.name
      };

      fetch(process.env.API_URL + `/items/change/user/${item.id}`, {
        method: "PUT",
        body: JSON.stringify(requestData),
      })
        .then((data) => {
          console.log("Success:", data);
          router.push("/user");
        })
        .catch((error) => {
          console.error("Error:", error);
        });;


    } catch (error) {
      console.error("Error while fetching user data", error);
    }
  };

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
        <div className="p-2">
          <Item item={item0} showPrice={false} />
        </div>
      </div>

      <button onClick={() => handleClick(item0)}>
        購入する
      </button>

      {/* <div className="grid grid-cols-3 gap-4 p-2">
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
      </div> */}
    </Layout>
  );
}
