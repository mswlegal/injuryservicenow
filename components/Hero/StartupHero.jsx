import React from 'react';
import { heroData } from './HeroData';

const StartupHero = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row g-3 g-xl-5 align-items-center">
          <div className="col-12 col-xl-6">
            <h1 className="display-5 mb-0">{heroData.startup.title}</h1>
          </div>
          <div className="col-12 col-xl-6">
            <p>{heroData.startup.description}</p>
            <a
              className="button button-lg mt-4"
              href={heroData.startup.learnMoreUrl}
            >
              Learn More
            </a>
          </div>
        </div>{' '}
        {/* end row */}
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default StartupHero;
