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
  // const uid = useSelector((state: any) => state.uid.value);
  const user_data = useSelector((state: any) => state.user.value);
  const [items, setItems] = useState<ItemType[]>();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    fetch(process.env.API_URL + "/items/user/" + `${user_data.id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const itemsList: ItemType[] = data.map((item: any) => ({
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

      router.push("/item");
    } catch (error) {
      console.error("Error while fetching user data", error);
    }
  };

  return (
    <Layout title="home">
        <div className="pt-10 flex items-center justify-center">
          <img
            src={`${user_data.icon}`}
            alt="ユーザーアイコン"
            className="m w-20 h-20 rounded-full"
          />
          <div className="pl-2 py-2 items-center justify-center">
            <h3 className="text-left font-type1 font-semibold text-black text-2xl semi-normal text-opacity-80 pt-2 px-3">
            {user_data.name}
            </h3>
            <h3 className="text-left font-type1 font-light text-black text-sm text-opacity-80 px-3">
            @23134512
            </h3>
          </div>
        </div>

        <div className="flex mx-6 border-b-4  border-mercari-gray my-4 pb-1">
          <div className="mx-auto font-type1  text-black text-center">
          <h2 className="text-center font-type font-semibold text-black text-sm semi-normal text-opacity-80 pt-1 px-3">12</h2>
          <h2 className="text-center font-type font-base text-black text-sm normal-bold text-opacity-80 px-3">所持品</h2>
          </div>
          <div className="mx-auto font-type1 text-black text-center">
          <h2 className="text-center font-type font-semibold text-black text-sm semi-normal text-opacity-80 pt-1 px-3">3</h2>
          <h2 className="text-center font-type font-base text-black text-sm normal-bold text-opacity-80 px-3">出品</h2>
          </div>
          <div className="mx-auto font-type1 text-black text-center">
          <h2 className="text-center font-type font-semibold text-black text-sm semi-normal text-opacity-80 pt-1 px-3">6</h2>
          <h2 className="text-center font-type font-base text-black text-sm normal-bold text-opacity-80 px-3">フォロワー</h2>
          </div>
          <div className="mx-auto font-type1 text-black text-center">
          <h2 className="text-center font-type font-semibold text-black text-sm semi-normal text-opacity-80 pt-1 px-3">16</h2>
          <h2 className="text-center font-type font-base text-black text-sm normal-bold text-opacity-80 px-3">取引</h2>
          </div>
          <div className="mx-auto font-type1 text-black text-center">
          <h2 className="text-center font-type font-semibold text-black text-sm semi-normal text-opacity-80 pt-1 px-3">7</h2>
          <h2 className="text-center font-type font-base text-black text-sm normal-bold text-opacity-80 px-3">いいね</h2>
          </div>
        </div>

        {/* <Link href="/user-assets" className="flex items-center">
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
        </Link> */}
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
