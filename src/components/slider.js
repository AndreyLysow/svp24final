"use client"; // Для использования клиентских хуков

import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Обновленный импорт модуля Autoplay
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import '../styles/slider.css';

const Slider = () => {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg"
  ];

  const swiperRef = useRef(null);

  // Принудительный запуск автопрокрутки при монтировании компонента
  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.start();
    }
  }, []);

  return (
    <div
      className="slider-container"
      onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()} // Перезапуск при выходе курсора
    >
      {/* Неподвижный контент поверх слайдера */}
      <div className="static-content">
        <h3 id="work-text">Печать этикеток</h3>
        <div className="description-container">
          <p>Компания СилверПринт осуществляет печать этикеток для различных видов продукции, создавая яркие наклейки, которые подчеркивают уникальность бренда и привлекают внимание покупателей</p>
        </div>
        <div className="details-container">
          <Link href="#" className="details-link">
            Подробнее об услугах
          </Link>
        </div>
      </div>

      {/* Слайдер с изменяемыми изображениями */}
      <Swiper
        ref={swiperRef}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }} // Автопрокрутка возобновляется после взаимодействий
        modules={[Autoplay]}
      >
        {images.map((imageSrc, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <Image
                src={imageSrc}
                alt={`Слайд ${index + 1}`}
                width={1280}
                height={550}
                style={{ objectFit: 'cover', opacity: 0.5 }}
              />
              <div className="gradient-overlay"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
