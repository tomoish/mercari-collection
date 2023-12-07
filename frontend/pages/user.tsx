import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import Link from "next/link";

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
      <div className="h-20 flex items-center justify-center">
        <div className="mr-4">
          <img
            src="https://iss.ndl.go.jp/thumbnail/9784098507177"
            alt="ユーザーアイコン"
            className="w-12 h-12 rounded-full"
          />
        </div>
        <Link href="/user-assets" className="flex items-center">
          <p className="text-4xl font-semibold">江戸川コナン</p>
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
      <div className="grid grid-cols-3 gap-4 p-2">
        <Item item={item2} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item2} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
        <Item item={item} showPrice={false} />
      </div>
    </Layout>
  );
}
