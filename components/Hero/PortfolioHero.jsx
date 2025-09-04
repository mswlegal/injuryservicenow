import React from 'react';
import { heroData } from './HeroData';

const PortfolioHero = () => {
  return (
    <div className="section-lg">
      <div className="container">
        <h2 className="display-1 fw-medium text-xl-end">
          {heroData.portfolio.title}
        </h2>
        <h1 className="display-1 fw-bold stroke-text">
          {heroData.portfolio.title2}
        </h1>
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default PortfolioHero;
