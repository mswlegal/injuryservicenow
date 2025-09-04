import React from 'react';
import Image from 'next/image';
import { heroData } from './HeroData';

const AboutHero = () => {
  return (
    <div className="section-lg">
      <div className="container">
        <div className="row g-xxl-5 align-items-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="display-3 fw-normal">
              {heroData.aboutPage.mainData.title}
            </h1>
            <div className="row g-2 g-md-3 mt-3">
              <div className="col-12 col-md-6">
                <ul className="list-unstyled">
                  {heroData.aboutPage.features1.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check pe-2"></i>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul className="list-unstyled">
                  {heroData.aboutPage.features2.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check pe-2"></i>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>{' '}
            {/* end row(inner) */}
            <div className="d-md-flex align-items-center mt-5">
              <ul className="avatar-group">
                {heroData.aboutPage.avatars.map((item, index) => (
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
                  We have over {heroData.aboutPage.mainData.countOfClients}{' '}
                  clients <br className="d-lg-block" />
                  around the world
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-xxl-4 text-xxl-end d-none d-xxl-block">
            <Image
              className="img-mask-1"
              src={heroData.aboutPage.mainData.image}
              alt="image"
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

export default AboutHero;
