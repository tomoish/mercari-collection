import Item from "@/components/items/Item";
import { ItemType } from "@/types/ItemType";
import Image from 'next/image';

export default function Index() {
    const item: ItemType = {
        id: 0,
        name: "sample",
        status: "sold",
        url: "",
        price: 200,
    };

    return (
        <>
            <div>
                <Image
                    src="/path/to/image.jpg" // Replace with the actual image source
                    className="object-contain h-48 w-48"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <Item item={item} showPrice={true} /> {/* Add the showPrice prop */}
                <Item item={item} showPrice={true} /> {/* Add the showPrice prop */}
                <Item item={item} showPrice={true} /> {/* Add the showPrice prop */}
                <Item item={item} showPrice={true} /> {/* Add the showPrice prop */}
                <Item item={item} showPrice={true} /> {/* Add the showPrice prop */}
            </div>
        </>
    );
}
