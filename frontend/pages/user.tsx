import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setItem } from "../lib/features/item/itemSlice";

export default function Index() {
  // const uid = useSelector((state: any) => state.uid.value);
  const user_data = useSelector((state: any) => state.user.value);
  const [items, setItems] = useState<ItemType[]>();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetch(process.env.API_URL + "/items/user/" + `${user_data.id}`)
    .then(response => response.json())
    .then(
      data => {
        console.log(data)
        const itemsList: ItemType[] = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          status:item.status,
          url: item.image,
          price: item.desired_price,
        }));
        setItems(itemsList);
        console.log(items);
      }
    )
  }, [])

  const handleClick = (item: ItemType) => {
    try {

      dispatch(setItem(item));

      router.push("/item");
    } catch (error) {
      console.error("Error while fetching user data", error);
    }
  };

  const item: ItemType = {
    id: 0,
    name: "乃木コレ 齋藤飛鳥SSR",
    status: "",
    url: "/images/乃木コレ_齋藤飛鳥SSR.jpg",
    price: 21000,
  };
  const item2: ItemType = {
    id: 0,
    name: "乃木コレ 賀喜遥香SSR",
    status: "",
    url: "/images/乃木コレ1.jpg",
    price: 14000,
  };
  const item3: ItemType = {
    id: 0,
    name: "乃木コレ 齋藤飛鳥SR",
    status: "",
    url: "/images/乃木コレ2.jpg",
    price: 7900,
  };
  const item4: ItemType = {
    id: 0,
    name: "乃木コレ 中村麗乃",
    status: "",
    url: "/images/乃木コレ3.jpg",
    price: 300,
  };
  const item5: ItemType = {
    id: 0,
    name: "乃木コレ 五百城茉央",
    status: "sold",
    url: "/images/乃木コレ4.jpeg",
    price: 600,
  };
  const item6: ItemType = {
    id: 0,
    name: "乃木コレ 伊藤理々杏SSR",
    status: "sold",
    url: "/images/乃木コレ5.jpg",
    price: 3900,
  };
  const item7: ItemType = {
    id: 0,
    name: "乃木コレ 賀喜遥香SSR",
    status: "",
    url: "/images/乃木コレ11.jpg",
    price: 14000,
  };
  const item8: ItemType = {
    id: 0,
    name: "乃木コレ 五百城茉央SR",
    status: "sold",
    url: "/images/乃木コレ7.jpg",
    price: 2200,
  };
  const item9: ItemType = {
    id: 0,
    name: "乃木コレ 池田瑛紗",
    status: "",
    url: "/images/乃木コレ8.jpg",
    price: 580,
  };
  const item10: ItemType = {
    id: 0,
    name: "乃木コレ 池田瑛紗",
    status: "sold",
    url: "/images/乃木コレ9.jpg",
    price: 580,
  };
  const item11: ItemType = {
    id: 0,
    name: "乃木コレ 池田瑛紗",
    status: "",
    url: "/images/乃木コレ10.jpg",
    price: 580,
  };
  const item12: ItemType = {
    id: 0,
    name: "乃木コレ 山下美月SSR",
    status: "",
    url: "/images/乃木コレ12.jpg",
    price: 16000,
  };
  return (
    <Layout title="home">
      <div className="h-20 flex items-center justify-center">
        <div className="mr-4">
          <img
            src={`${user_data.icon}`}
            alt="ユーザーアイコン"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <Link href="/user-assets" className="flex items-center">
          <p className="text-4xl font-semibold">{`${user_data.name}`}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
              <path
                fill="currentColor"
                d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z"
              />
            </g>
          </svg>
        </Link>
      </div>
      {/* <p>User ID: {uid}</p> */}
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

      {/* <div className="grid grid-cols-3 gap-4 p-2">
        <Item item={item} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item3} showPrice={false} />
        <Item item={item4} showPrice={false} />
        <Item item={item5} showPrice={false} />
        <Item item={item6} showPrice={false} />
        <Item item={item7} showPrice={false} />
        <Item item={item8} showPrice={false} />
        <Item item={item9} showPrice={false} />
        <Item item={item10} showPrice={false} />
        <Item item={item11} showPrice={false} />
        <Item item={item12} showPrice={false} />
      </div> */}
    </Layout>
  );
}
