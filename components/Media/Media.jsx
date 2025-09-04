import React, { useState } from 'react';
import Image from 'next/image';
import { mediaData } from './MediaData';
import { LightboxVideo } from '..';

const Media = () => {
  const [lightboxVideo, setLightboxVideo] = useState(null);

  const openLightbox = video => {
    setLightboxVideo(video);
  };

  const closeLightbox = () => {
    setLightboxVideo(null);
  };

  return (
    <div className="section pt-0">
      <div className="container">
        <div className="row g-4 g-xxl-5 align-items-center">
          <div className="col-12 col-md-4">
            <Image
              className="img-mask-1"
              src={mediaData.mainData.ImageMask1}
              alt="img-mask-1"
              placeholder="blur"
            />
          </div>
          <div className="col-12 col-md-4">
            <div className="lightbox-video">
              <Image
                src={mediaData.mainData.mainImage}
                alt="main image"
                placeholder="blur"
              />
              <a
                className="button-circle button-circle-xl"
                onClick={() => openLightbox(mediaData.mainData.youtubeVideoUrl)}
              >
                <i className="fa-solid fa-play"></i>
              </a>
            </div>
            {lightboxVideo && (
              <LightboxVideo
                video={lightboxVideo}
                closeLightbox={closeLightbox}
              />
            )}
          </div>
          <div className="col-12 col-md-4">
            <Image
              className="img-mask-2"
              src={mediaData.mainData.ImageMask2}
              alt="img-mask-2"
              placeholder="blur"
            />
          </div>
        </div>{' '}
        {/* end row */}
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default Media;
