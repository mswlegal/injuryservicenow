import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from './HeroData';

const AgencyHero = () => {
  return (
    <div className="section-lg">
      <div className="container">
        <div className="row g-5">
          <div className="col-12 col-xl-9">
            <h1 className="hero-text">
              <span>{heroData.agency.name}</span>
              <span className="small-text">{heroData.agency.jobTitle}</span>
            </h1>
            <div className="row g-4 mt-md-1 mt-lg-2 align-items-center">
              <div className="col-12 col-md">
                <div
                  dangerouslySetInnerHTML={{
                    __html: heroData.agency.description,
                  }}
                />
              </div>
              <div className="col-12 col-md">
                <Link
                  className="button button-lg"
                  href={heroData.agency.letsTalkUrl}
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-3 text-xxl-end d-none d-xxl-block">
            <Image
              className="img-mask-1"
              src={heroData.agency.image}
              alt={heroData.agency.name}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyHero;
