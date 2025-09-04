import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const Blog = ({ data }) => {
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
        className={`section-sm border-radius-1 ${isLightTheme ? 'bg-dark' : 'bg-lighter'}`}
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
                  className="swiper-blog-prev button-circle button-circle-lg cursor-link"
                  onClick={() => sliderRef.current?.slidePrev()}
                  aria-label="Prev Slide"
                >
                  <i className="bi bi-arrow-left"></i>
                </button>
                <button
                  className="swiper-blog-next button-circle button-circle-lg cursor-link"
                  onClick={() => sliderRef.current?.slideNext()}
                  aria-label="Next Slide"
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
            className="blog-slider mt-4 mt-lg-5"
          >
            {data.posts.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="blog-post-box">
                  <div className="blog-img">
                    {/* Image */}
                    <Link
                      className="blog-img-link"
                      href={`blog/${isLightTheme ? item.slug : 'light/' + item.slug}`}
                    >
                      <Image
                        src={item.mainImage}
                        alt={item.title}
                        placeholder="blur"
                      />
                    </Link>
                    {/* Category */}
                    <div className="blog-category">
                      <Link
                        href={`blog/${isLightTheme ? item.slug : 'light/' + item.slug}`}
                        className="button button-sm button-style-2 button-font-2"
                      >
                        <span>{item.category}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4">
                    <ul className="list-inline-dot sm-heading mb-2">
                      <li>
                        <Link
                          className="link-hover"
                          href={`blog/${isLightTheme ? item.slug : 'light/' + item.slug}`}
                        >
                          <span>by {item.postedBy}</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="link-hover"
                          href={`blog/${isLightTheme ? item.slug : 'light/' + item.slug}`}
                        >
                          <span>{item.date}</span>
                        </Link>
                      </li>
                    </ul>
                    <h2>
                      <Link
                        className="link-hover-2"
                        href={`blog/${isLightTheme ? item.slug : 'light/' + item.slug}`}
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

export default Blog;
