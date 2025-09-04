import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import Link from 'next/link';

const Clients = ({ data, className }) => {
  return (
    <div className={`section-lg ${className}`}>
      <div className="container">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="clients-swiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="client-box">
                <Link href={item.url}>
                  <Image
                    src={item.darkLogo}
                    alt={index}
                    placeholder="blur"
                    className="logo-dark"
                  />
                  <Image
                    src={item.lightLogo}
                    alt={index}
                    placeholder="blur"
                    className="logo-light"
                  />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
