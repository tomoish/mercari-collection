import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import Image from 'next/image';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// import from ItemProducts
import { ItemNC1, ItemNC2, ItemNC3, ItemNC4, ItemNC5, ItemNC6, ItemNC7, ItemNC8, ItemNC9, ItemNC10, ItemNC11, ItemNC12, Poke1,  Poke2, Poke3, Poke4, Poke5, Poke6, Poke7, Poke8, Poke9, Poke10 } from "@/components/items/ItemProducts";


export default function Index() {
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

    return (
      <Layout title="home">
        <div>
          {/* 総資産推移 */}
          <div> 推定総資産</div>
          <Image
            src="/images/資産総額推移.png" // Replace with the actual image source
            className="object-contain h-48 w-48 j"
            width={100}
            height={100}
            alt="Picture of the author"
          />
          {/* 期間選択ボタン */}
          <div>月間</div>
          <div>年間</div>
          <div>全期間</div>
        </div>
        {/* 人気カテゴリー */}
        <div>1位 乃木坂</div>
        <div>+ 300 %</div>
        <div>2位 ポケカ</div>
        <div>+ 120 %</div>
        {/* アイテム縦一覧 */}
        <div> 人気コレクション</div>
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide key="1">
            <Item item={item2} showPrice={true} />
          </SwiperSlide>
          <SwiperSlide key="1">
            <Item item={item} showPrice={true} />
          </SwiperSlide>
          <SwiperSlide key="1">
            <Item item={item3} showPrice={true} />
          </SwiperSlide>
          <SwiperSlide key="1">
            <Item item={item2} showPrice={true} />
          </SwiperSlide>
          <SwiperSlide key="1">
            <Item item={item2} showPrice={true} />
          </SwiperSlide>
          <SwiperSlide key="1">
            <Item item={item2} showPrice={true} />
          </SwiperSlide>
        </Swiper>
      </Layout>
    );
}
