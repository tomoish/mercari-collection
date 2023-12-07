import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";

export default function Index() {
    import Image from 'next/image'; // Import the Image component from Next.js

    const item: ItemType = {
        id: 0,
        name: "sample",
        status: "sold",
        url: "",
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
