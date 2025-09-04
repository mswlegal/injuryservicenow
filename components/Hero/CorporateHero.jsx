import React from 'react';
import Link from 'next/link';
import { heroData } from './HeroData';

const CorporateHero = () => {
  return (
    <div className="section-box">
      <div
        className="bg-image border-radius-1"
        data-bg-src={heroData.corporate.backgroundImage.src}
      >
        <div className="bg-dark-06 section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 col-xl-8">
                <h1 className="display-3 fw-normal">
                  {heroData.corporate.title}
                </h1>
                <div className="row g-2 g-md-3 mt-3">
                  <div className="col-12 col-md-6">
                    <ul className="list-unstyled">
                      {heroData.corporate.features1.map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check pe-2"></i>
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-12 col-md-6">
                    <ul className="list-unstyled">
                      {heroData.corporate.features2.map((item, index) => (
                        <li key={index}>
                          <i className="bi bi-check pe-2"></i>
                          {item.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>{' '}
                {/* end row(inner) */}
                <Link
                  className="button button-lg button-font-2 mt-4 mt-lg-5"
                  href={heroData.corporate.learnMoreUrl}
                >
                  Learn More
                </Link>
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

export default CorporateHero;
