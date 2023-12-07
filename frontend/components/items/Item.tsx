import { ItemType } from "@/types/ItemType";
import Link from "next/link";

const Item = ({ item }: { item: ItemType }) => {
  return (
    <div className="h-80 w-30 border-p-4">
      <div className="">
        <Link
          href={`${item.url}`}
          className=""
        >
          {item.name}
        </Link>
      </div>
    </div>
  );
};

export default Item;
