import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../lib/features/item/itemSlice";

// import from ItemProducts
import { ItemNC1, ItemNC2, ItemNC3, ItemNC4, ItemNC5, ItemNC6, ItemNC7, ItemNC8, ItemNC9, ItemNC10, ItemNC11, ItemNC12, Poke1,  Poke2, Poke3, Poke4, Poke5, Poke6, Poke7, Poke8, Poke9, Poke10 } from "@/components/items/ItemProducts";

export default function Index() {
  const user_data = useSelector((state: any) => state.user.value);
  const [items, setItems] = useState<ItemType[]>();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetch(process.env.API_URL + "/items/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(user_data.id);
        const itemsList: ItemType[] = data
          .filter((item: any) => item.user_id !== user_data.id)
          .map((item: any) => ({
            id: item.id,
            name: item.name,
            status: item.status,
            url: item.image,
            price: item.desired_price,
          }));
        setItems(itemsList);
        console.log(items);
      });
  }, []);

  const handleClick = (item: ItemType) => {
    try {
      dispatch(setItem(item));

      router.push("/buy-item");
    } catch (error) {
      console.error("Error while fetching user data", error);
    }
  };

  // const item1: ItemType = {
  //   id: 0,
  //   name: "乃木コレ 賀喜遥香SSR",
  //   status: "",
  //   url: "/images/乃木コレ3_賀喜遥香SSR.jpg",
  //   price: 14000,
  // };
  // const item2: ItemType = {
  //   id: 0,
  //   name: "乃木コレ 五百城茉央SR",
  //   status: "",
  //   url: "/images/乃木コレ8_五百城SR.jpg",
  //   price: 2200,
  // };
  // const item3: ItemType = {
  //   id: 0,
  //   name: "乃木コレ 池田瑛紗",
  //   status: "",
  //   url: "/images/乃木コレ9_池田1.jpg",
  //   price: 580,
  // };
  // const item4: ItemType = {
  //   id: 0,
  //   name: "乃木コレ 池田瑛紗",
  //   status: "hold",
  //   url: "/images/乃木コレ10_池田2.jpg",
  //   price: 580,
  // };
  // const item5: ItemType = {
  //   id: 0,
  //   name: "乃木コレ 五百城茉央",
  //   status: "hold",
  //   url: "/images/乃木コレ5_五百城.jpg",
  //   price: 600,
  // };
  // const item6: ItemType = {
  //   id: 0,
  //   name: "乃木コレ 伊藤理々杏SSR",
  //   status: "hold",
  //   url: "/images/乃木コレ6_伊藤SSR.jpg",
  //   price: 3900,
  // };
  // const item7: ItemType = {
  //   id: 0,
  //   name: "ポケモン ピカチュウ",
  //   status: "hold",
  //   url: "/images/ポケモン5_ピカチュウ昼寝.jpg",
  //   price: 33000,
  // };
  // const item8: ItemType = {
  //   id: 0,
  //   name: "ポケモン ナンジャモ",
  //   status: "hold",
  //   url: "/images/ポケモン8_ナンジャモR.jpg",
  //   price: 89000,
  // };
  // const item9: ItemType = {
  //   id: 0,
  //   name: "ポケモン ナンジャモ",
  //   status: "hold",
  //   url: "/images/ポケモン7_ナンジャモ.jpg",
  //   price: 67000,
  // };
  // const item10: ItemType = {
  //   id: 0,
  //   name: "ポケモン ナンジャモ",
  //   status: "hold",
  //   url: "/images/ポケモン8_ナンジャモR.jpg",
  //   price: 89000,
  // };
  // const item11: ItemType = {
  //   id: 0,
  //   name: "ポケモン ミライドンex",
  //   status: "hold",
  //   url: "/images/ポケモン9_ミライドンex.jpg",
  //   price: 3900,
  // };
  // const item12: ItemType = {
  //   id: 0,
  //   name: "ポケモン リザードンex2",
  //   status: "hold",
  //   url: "/images/ポケモン10_リザードンex2.jpg",
  //   price: 2900,
  // };
  return (
    <Layout title="home">
      <div className="h-20 flex items-center justify-center text-center">
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:border-mercari-red"
          />
          <button
            className="ml-2 bg-mercari-red text-white px-4 py-2 rounded-md"
            onClick={() => {
              // Handle search button click
            }}
          >
            Search
          </button>
        </div>
      </div>
      {items !== undefined ? (
        <div className="grid grid-cols-3 gap-4 p-2">
          {items.map((item) => (
            <button key={item.id} onClick={() => handleClick(item)}>
              <Item item={item} showPrice={false} />
            </button>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="grid grid-cols-3 gap-4 p-2">
        <Item item={ItemNC1} showPrice={true} />
        <Item item={ItemNC2} showPrice={true} />
        <Item item={ItemNC3} showPrice={true} />
        <Item item={ItemNC4} showPrice={true} />
        <Item item={ItemNC5} showPrice={true} />
        <Item item={ItemNC6} showPrice={true} />
        <Item item={ItemNC7} showPrice={true} />
        <Item item={ItemNC8} showPrice={true} />
        <Item item={ItemNC9} showPrice={true} />
        <Item item={ItemNC10} showPrice={true} />
        <Item item={ItemNC11} showPrice={true} />
        <Item item={ItemNC12} showPrice={true} />
      </div>
    </Layout>
  );
}
