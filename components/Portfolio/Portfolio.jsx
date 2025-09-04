import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

const Portfolio = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const sliderRef = useRef(null);

  const [isLightTheme, setIsLightTheme] = useState(false);

  const updateNavigation = swiper => {
    if (prevRef.current && nextRef.current) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    }
  };

  useEffect(() => {
    if (sliderRef.current) {
      updateNavigation(sliderRef.current);
    }

    setIsLightTheme(document.body.classList.contains('theme-light'));
  }, []);

  return (
    <div className="section-box">
      <div
        className={`section border-radius-1 ${isLightTheme ? 'bg-dark' : 'bg-lighter'}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <span className="title-heading">{data.mainData.title}</span>
              <h1 className="display-3 fw-medium">{data.mainData.title2}</h1>
              <p>{data.mainData.description}</p>
              {/* Slider Nav */}
              <div className="mt-4">
                <button
                  className="swiper-portfolio-prev button-circle button-circle-lg  cursor-link"
                  onClick={() => sliderRef.current?.slidePrev()}
                  aria-label="Prev Slide"
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button
                  className="swiper-portfolio-next button-circle button-circle-lg cursor-link"
                  onClick={() => sliderRef.current?.slideNext()}
                  aria-label="Prev Slide"
                >
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
              {/* end Slider Nav */}
            </div>
          </div>{' '}
          {/* end row */}
          <Swiper
            onSwiper={swiper => {
              sliderRef.current = swiper;
              swiper.on('init', () => {
                updateNavigation(swiper);
              });
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="portfolio-slider mt-4 mt-lg-5"
          >
            {data.projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio-box">
                  {/* Image */}
                  <div className="portfolio-img">
                    <Link href={`services/${item.slug}`}>
                      <Image
                        src={item.mainImage}
                        alt={item.title}
                        placeholder="blur"
                        width={672}
                        height={420}
                      />
                    </Link>
                  </div>
                  <div className="pt-4">
                    {/* Categories */}
                    <ul className="list-inline-dot sm-heading mb-2">
                      {item.categories.map((item, index) => (
                        <li key={index}>
                          <Link
                            className="link-hover"
                            href={`services/${item.slug}`}
                          >
                            <span data-text={item.name}>{item.name}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {/* Caption */}
                    <h2>
                      <Link
                        className="link-hover-2"
                        href={`services/${item.slug}`}
                      >
                        {item.title}
                      </Link>
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>{' '}
        {/* end container */}
      </div>
    </div>
  );
};

export default Portfolio;
