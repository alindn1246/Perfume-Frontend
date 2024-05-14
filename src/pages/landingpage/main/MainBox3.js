import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './MainBox3.css';

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function MainBox3() {
  
  // Array of image objects containing URL and import statement
  const images = [
    {
      img: "https://creedboutique.com/cdn/shop/files/1500x1500-QOS-3.jpg?v=1705593992&width=533",
      span: "Gio perfume"
    },
    {
      img: "https://creedboutique.com/cdn/shop/files/1500x1500-MI1849-Bottle.jpg?v=1701276500&width=533",
      span: "Gio perfume"
    },
    {
      img: "https://creedboutique.com/cdn/shop/files/green-irish-tweed-50ml-bottle_5d2bd5b0-cdc3-47ce-bd17-0ed7f8d8b3ea.jpg?v=1694523298&width=533",
      span: "Gio perfume"
    },
    {
      img: "https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dw3b1a4151/products/A2608/A2608%20NEW%20PACKSHOTS/GA_2024_ww-00746-arm_ADG-Parfum_50ml.jpg?sw=405&sfrm=jpg&q=85",
      span: "Gio perfume"
    },
    {
      img: "https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dw06980fe1/products/A2268/A2267%20new%20packshots/GA_ADGH%20PROFONDO_PACK%20+%20ETUIS_5000_RVB_0005s_0000_FLACON%20200%20ml.jpg?sw=543&sfrm=jpg&q=85",
      span: "Gio perfume"
    },
    {
      img: "https://www.giorgioarmanibeauty-usa.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-gab-master-catalog/default/dw20e619d4/products/ww-00641-arm/GA_2021_ww-00640-arm_MY-WAY-Florale-50ml.jpg?sw=690&sh=690&sm=cut&sfrm=jpg&q=85",
      span: "Gio perfume"
    },
    {
      img: "https://sdcdn.io/tf/tfb_sku_T61501_2000x2000_0.png?width=700px&height=700px&options=BackgroundColor=F2F2F2",
      span: "Gio perfume"
    }
  ];

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        id='swiper-imagecasoul'
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} style={{textAlign:"center",fontSize:"30px",fontFamily:"popins"}}>
            
            <img src={item.img} />
            <span>{item.span}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
