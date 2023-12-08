import { ItemType } from "@/types/ItemType";
import Image from "next/image";
import Link from "next/link";

const Item = ({ item, showPrice }: { item: ItemType; showPrice: boolean }) => {
  console.log(item)
  return (
    //アイテムを正方形にする
    <div className="h-50 w-50 border-4">
      <div className="text-center py-5 relative">
        <div className="flex justify-center items-center">
          <Image
            src={`${item.url}`}
            className="object-contain h-48 w-48"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </div>
        {item.status === "sold" ? (
          //soldタグをレスポンシブにする
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="122"
            height="122"
            viewBox="0 0 122 122"
            fill="none"
            className="absolute top-0 left-0"
          >
            <title></title>
            <path
              fill="#FF0211"
              fill-rule="evenodd"
              d="M0 0h122L0 122V0Z"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M19.697 58.607c-.61-.08-1.274.006-1.991.258a4.744 4.744 0 0 0-1.812 1.115c-.292.292-.547.62-.766.986a3.778 3.778 0 0 0-.458 1.134c-.086.392-.083.787.01 1.185s.312.77.657 1.115c.319.318.657.524 1.015.617.359.093.733.103 1.125.03a5.265 5.265 0 0 0 1.264-.428 30.25 30.25 0 0 0 1.453-.737 39.607 39.607 0 0 1 1.902-.906 7.688 7.688 0 0 1 2.07-.597c.71-.1 1.427-.046 2.15.16.723.205 1.43.653 2.12 1.343.757.757 1.278 1.556 1.563 2.4a5.78 5.78 0 0 1 .289 2.517 6.724 6.724 0 0 1-.797 2.469 9.716 9.716 0 0 1-1.692 2.25 10.464 10.464 0 0 1-3.195 2.18c-1.214.537-2.432.753-3.653.647l.12-3.465c.822.133 1.662.05 2.518-.248.856-.299 1.563-.727 2.12-1.284.292-.292.554-.627.786-1.006.232-.378.385-.776.458-1.194a2.917 2.917 0 0 0-.05-1.244c-.106-.412-.351-.81-.736-1.195-.372-.371-.767-.594-1.185-.667a3.274 3.274 0 0 0-1.334.06 7.077 7.077 0 0 0-1.503.567l-1.672.836c-.557.292-1.141.558-1.752.797a5.976 5.976 0 0 1-1.881.408 5.035 5.035 0 0 1-1.951-.299c-.657-.232-1.317-.68-1.98-1.344-.718-.716-1.185-1.483-1.404-2.299a5.6 5.6 0 0 1-.11-2.459 7.39 7.39 0 0 1 .896-2.408c.451-.783.995-1.493 1.633-2.13a9.48 9.48 0 0 1 2.558-1.802 7.533 7.533 0 0 1 3.056-.787l.159 3.425Zm8.227-.105c-1.129-1.128-1.958-2.336-2.489-3.623-.53-1.287-.78-2.585-.747-3.892.034-1.307.339-2.595.916-3.862.578-1.267 1.41-2.445 2.499-3.534 1.101-1.101 2.289-1.944 3.563-2.528 1.274-.584 2.568-.896 3.882-.936 1.314-.04 2.615.206 3.902.737 1.287.53 2.495 1.36 3.623 2.489 1.102 1.101 1.918 2.295 2.449 3.583a9.836 9.836 0 0 1 .766 3.932c-.02 1.334-.311 2.647-.876 3.941-.564 1.294-1.396 2.492-2.498 3.594-1.088 1.088-2.276 1.91-3.564 2.468-1.287.558-2.594.843-3.921.856a9.937 9.937 0 0 1-3.922-.776c-1.288-.531-2.482-1.347-3.584-2.449Zm2.727-2.727c.756.756 1.566 1.334 2.429 1.732a6.851 6.851 0 0 0 2.637.647 6.465 6.465 0 0 0 2.618-.448c.85-.332 1.633-.856 2.35-1.573.716-.717 1.244-1.503 1.582-2.359a6.428 6.428 0 0 0 .458-2.628 6.851 6.851 0 0 0-.647-2.638c-.398-.862-.976-1.672-1.732-2.428-.73-.73-1.523-1.29-2.38-1.682a7 7 0 0 0-2.617-.647 6.446 6.446 0 0 0-2.628.438c-.862.331-1.659.862-2.389 1.592-.73.73-1.257 1.523-1.582 2.38a6.486 6.486 0 0 0-.428 2.617c.04.89.255 1.762.647 2.618.391.856.952 1.649 1.682 2.379Zm8.446-22.46 2.508-2.51L53.47 42.672l5.992-5.992 2.23 2.23-8.5 8.5-14.095-14.095Zm10.775-10.776 4.996-4.997a15.666 15.666 0 0 1 3.126-2.409 10.134 10.134 0 0 1 3.693-1.324c1.294-.192 2.621-.073 3.981.359 1.36.431 2.705 1.31 4.032 2.637 1.234 1.235 2.064 2.529 2.488 3.883.425 1.353.551 2.687.379 4.001a10.709 10.709 0 0 1-1.245 3.773 13.869 13.869 0 0 1-2.359 3.175l-4.997 4.997-14.094-14.095Zm16.503 7.306c.65-.65 1.225-1.377 1.722-2.18a7.19 7.19 0 0 0 .986-2.538c.159-.89.093-1.812-.2-2.767-.291-.956-.915-1.911-1.87-2.867-1.01-1.008-1.998-1.665-2.967-1.97-.969-.306-1.895-.376-2.777-.21a6.761 6.761 0 0 0-2.498 1.026c-.784.517-1.5 1.101-2.15 1.751l-2.09 2.09 9.754 9.756 2.09-2.09Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        ) : (
          <div></div>
        )}
        
        {/* 名前は表示なし
        <Link href={`${item.url}`} className="text-black h-40 w-30">
          {item.name}
        </Link> 
        */}
        {/* 料金表示 */}
        {showPrice && (
        <div className="absolute left-0 text-left text-white font-bold bg-black bg-opacity-40 mb-2 px-5 rounded-r-2xl">
          <span className="font-semibold" >¥</span> {item.price}
        </div>
      )}
      </div>
    </div>
  );
};

export default Item;
