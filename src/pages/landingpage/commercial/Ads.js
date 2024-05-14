import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import img1 from "./GAB-11146-2000x694_ADGAINTENSELAUNCH_SECBANNER_desktop.jpg";
import img2 from "./GAB-11174-2000x694_MDAYENG_SECBAN_DESKTOP_1.jpg";
import img3 from "./GAB-11146-2000x694_ADGAINTENSELAUNCH_SECBANNER_desktop.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Ads.css";

export default function Ads() {
  const [slides] = useState([
    {
      title: "ACQUA DI GIOIA ",
      subtitle: "EAU DE PARFUM INTENSE",
      text: "INTENSELY FRESH, FLORAL CITRUS FRUITY PERFUME",
      imageUrl: img1,
    },
    {
        title: "ACQUA DI GIOIA ",
        subtitle: "EAU DE PARFUM INTENSE",
        text: "INTENSELY FRESH, FLORAL CITRUS FRUITY PERFUME",
      imageUrl: img2,
    },
    {
        title: "ACQUA DI GIOIA ",
        subtitle: "EAU DE PARFUM INTENSE",
        text: "INTENSELY FRESH, FLORAL CITRUS FRUITY PERFUME",
      imageUrl: img3,
    },
    // Add more slide objects as needed
  ]);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        height: "400px",
        
       
        
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      speed={600}
      parallax={true}
     
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      navigation={false}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      id="AdSwiper"
      onSlideChange={handleSlideChange}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} style={{backgroundSize:"cover"}}>
          <div className="mt-3">
            <div className="title" data-swiper-parallax="-300">
              {slide.title}
            </div>
            <div className="subtitle" data-swiper-parallax="-200">
              {slide.subtitle}
            </div>
            <div className="text" data-swiper-parallax="-100">
              <p>{slide.text}</p>
            </div>
            <div data-swiper-parallax="-100">
              <button className="cssbuttons-io">
                <span>Discover</span>
              </button>
            </div>
          </div>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              aspectRatio: "auto",
              width: "100%",
              height: "100%",

              zIndex: "-1",
            }}
            data-swiper-parallax="-23%"
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
