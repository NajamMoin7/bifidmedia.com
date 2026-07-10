"use client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Children } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function AutoSlider({
  children,
  className = "",
  delay = 2800,
  speed = 700,
  breakpoints,
  pagination = false,
  navigation = false,
}) {
  const slides = Children.toArray(children);
  return (
    <Swiper
      className={`auto-slider ${className}`}
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop
      grabCursor
      speed={speed}
      watchOverflow
      pagination={pagination ? { clickable: true } : false}
      navigation={navigation}
      breakpoints={breakpoints || {
        320: { slidesPerView: 1.1, spaceBetween: 14 },
        640: { slidesPerView: 2, spaceBetween: 18 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
        1280: { slidesPerView: 4, spaceBetween: 28 },
      }}
    >
      {slides.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
