import React, { useState } from 'react';
import Image from 'next/image';
import { heroData } from './HeroData';
import { LightboxVideo } from '..';

const BusinessHero = () => {
  const [lightboxVideo, setLightboxVideo] = useState(null);

  const openLightbox = video => {
    setLightboxVideo(video);
  };

  const closeLightbox = () => {
    setLightboxVideo(null);
  };

  return (
    <div className="section-box">
      <div
        className="bg-image border-radius-1"
        data-bg-src={heroData.business.backgroundImage.src}
      >
        <div className="section-lg bg-dark-08">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
                <h1 className="display-5 fw-normal">
                  {heroData.business.title}
                </h1>
                <p className="mt-3 mt-lg-4">{heroData.business.description}</p>
                <div className="d-md-flex align-items-center mt-5">
                  <ul className="avatar-group">
                    {heroData.business.avatars.map((item, index) => (
                      <li key={index}>
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          placeholder="blur"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="d-md-inline-block pt-3 pt-md-0 ps-md-4">
                    <p>
                      We have over {heroData.business.countOfClients} clients{' '}
                      <br className="d-lg-block" />
                      around the world
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 col-lg-3 col-xl-4 col-xxl-5 text-center">
                <a
                  className="hero-play-btn lightbox-video-link"
                  onClick={() =>
                    openLightbox(heroData.business.youtubeVideoUrl)
                  }
                >
                  <span>
                    <i className="bi bi-play-fill"></i>
                  </span>
                </a>
                {lightboxVideo && (
                  <LightboxVideo
                    video={lightboxVideo}
                    closeLightbox={closeLightbox}
                  />
                )}
              </div>
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </div>
      </div>
    </div>
  );
};

export default BusinessHero;
