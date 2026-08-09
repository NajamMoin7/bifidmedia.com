"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

/**
 * Swiper wrapper used for every real slider on the site: autoplay, loop,
 * pause on hover, touch support, responsive slides, no visible scrollbar and
 * no horizontal page overflow.
 */
export function Slider({
  children,
  slidesPerView = 1,
  breakpoints,
  autoplayDelay = 5000,
  loop = true,
  pagination = true,
  spaceBetween = 24,
  className = "",
  ariaLabel,
}) {
  const slides = Array.isArray(children) ? children.filter(Boolean) : [children];
  if (!slides.length) return null;

  return (
    <Swiper
      modules={[Autoplay, Pagination, A11y, Keyboard]}
      className={`!overflow-hidden ${pagination ? "!pb-12" : ""} ${className}`}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      loop={loop && slides.length > 2}
      keyboard={{ enabled: true }}
      a11y={{ containerMessage: ariaLabel }}
      autoplay={
        autoplayDelay
          ? {
              delay: autoplayDelay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }
          : false
      }
      pagination={pagination ? { clickable: true } : false}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="!h-auto">
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
