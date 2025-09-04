import Image from 'next/image';
import React from 'react';

const Lightbox = ({ image, closeLightbox }) => {
  return (
    <>
      <div className="mfp-bg mfp-ready"></div>
      <div
        className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
        onClick={closeLightbox}
      >
        <div className="mfp-container mfp-iframe-holder">
          <div className="mfp-content">
            <div className="mfp-iframe-scaler">
              <button className="mfp-close">×</button>
              <Image
                src={image}
                alt="image"
                placeholder="blur"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lightbox;
