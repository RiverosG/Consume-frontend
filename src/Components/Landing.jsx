import React from "react";
import electrodomesticos from "../assets/images/electrodomesticos.jpg";
import frutaFresca from "../assets/images/landing1frutafresca.jpeg";
import limpieza from "../assets/images/limpieza.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./Landing.css";

const Landing = () => {
  const slides = [
    {
      text: "Comida preparada lista para disfrutar.",
      image: electrodomesticos,
    },
    {
      text: "Mantén tu espacio impecable con los mejores productos de limpieza.",
      image: frutaFresca,
    },
    {
      text: "Innovación tecnológica al alcance de tus manos.",
      image: limpieza,
    },
  ];

  return (
    <div className="landing-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="text-overlay">
                <h2>{slide.text}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Landing;
