import React from 'react';

const LightboxVideo = ({ video, closeLightbox }) => {
  function convertToEmbeddedUrl(watchUrl) {
    const videoId = watchUrl.split('v=')[1];
    if (videoId) {
      const embeddedUrl = `https://www.youtube.com/embed/${videoId}`;
      return embeddedUrl;
    } else {
      return null;
    }
  }

  const embeddedUrl = convertToEmbeddedUrl(video);

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
              <iframe
                className="mfp-iframe"
                src={embeddedUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LightboxVideo;
