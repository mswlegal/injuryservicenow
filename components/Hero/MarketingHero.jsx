import React from 'react';
import Image from 'next/image';
import { heroData } from './HeroData';

const MarketingHero = () => {
  return (
    <div className="section-lg">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-10 offset-xl-1 text-center">
            <h1 className="hero-text display-1 fw-medium">
              {heroData.marketing.titleSpan1}{' '}
              <span className="d-inline-block fw-semi-bold stroke-text">
                {heroData.marketing.titleSpan2}
              </span>{' '}
              <span className="d-inline-block fw-semi-bold stroke-text">
                {heroData.marketing.titleSpan3}
              </span>{' '}
              {heroData.marketing.titleSpan4}
            </h1>
            <div className="d-md-flex align-items-center justify-content-center mt-5">
              <ul className="avatar-group">
                {heroData.marketing.avatars.map((item, index) => (
                  <li key={index}>
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      placeholder="blur"
                    />
                  </li>
                ))}
              </ul>
              <div className="d-md-inline-block pt-3 pt-md-0 ps-md-4 text-md-start">
                <p>
                  We have over {heroData.marketing.countOfClients} clients{' '}
                  <br className="d-lg-block" />
                  around the world
                </p>
              </div>
            </div>
          </div>
        </div>{' '}
        {/* end row */}
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default MarketingHero;
