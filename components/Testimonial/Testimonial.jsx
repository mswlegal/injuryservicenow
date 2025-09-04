import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonial = ({ data, className }) => {
  return (
    <div className={`section-lg pt-0 ${className}`}>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: 'bullets',
          }}
          modules={[Pagination, Autoplay]}
          className="testimonial-slider"
        >
          {data.testimonial.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-box">
                <div className="testimonial-content">
                  <p className="fs-4 fw-normal fst-italic line-height-140">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <h3>{item.name}</h3>
                    <span className="sm-heading">{item.jobTitle}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
