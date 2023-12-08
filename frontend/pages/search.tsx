import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItem } from "../lib/features/item/itemSlice";

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

  const item: ItemType = {
    id: 0,
    name: "乃木コレ7",
    status: "sold",
    url: "/images/乃木コレ7.jpg",
    price: 200,
  };
  const item2: ItemType = {
    id: 0,
    name: "乃木コレ8",
    status: "hold",
    url: "/images/乃木コレ8.jpg",
    price: 200,
  };
  const item3: ItemType = {
    id: 0,
    name: "乃木コレ9",
    status: "hold",
    url: "/images/乃木コレ9.jpg",
    price: 200,
  };
  const item4: ItemType = {
    id: 0,
    name: "乃木コレ10",
    status: "hold",
    url: "/images/乃木コレ10.jpg",
    price: 200,
  };
  const item5: ItemType = {
    id: 0,
    name: "乃木コレ11",
    status: "hold",
    url: "/images/乃木コレ11.jpg",
    price: 200,
  };
  const item6: ItemType = {
    id: 0,
    name: "乃木コレ12",
    status: "hold",
    url: "/images/乃木コレ12.jpg",
    price: 200,
  };
  const item7: ItemType = {
    id: 0,
    name: "ポケモン5",
    status: "hold",
    url: "/images/ポケモン5.jpg",
    price: 200,
  };
  const item8: ItemType = {
    id: 0,
    name: "ポケモン6",
    status: "hold",
    url: "/images/ポケモン6.jpeg",
    price: 200,
  };
  const item9: ItemType = {
    id: 0,
    name: "ポケモン7",
    status: "hold",
    url: "/images/ポケモン7.jpeg",
    price: 200,
  };
  const item10: ItemType = {
    id: 0,
    name: "ポケモン8",
    status: "hold",
    url: "/images/ポケモン8.webp",
    price: 200,
  };
  const item11: ItemType = {
    id: 0,
    name: "ポケモン9",
    status: "hold",
    url: "/images/ポケモン9.jpeg",
    price: 200,
  };
  const item12: ItemType = {
    id: 0,
    name: "ポケモン10",
    status: "hold",
    url: "/images/ポケモン10.jpg",
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
        <Item item={item} showPrice={true} />
        <Item item={item7} showPrice={true} />
      </div>
    </Layout>
  );
}
