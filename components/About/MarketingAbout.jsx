import React from 'react';
import Image from 'next/image';

const MarketingAbout = ({ data }) => {
  return (
    <div className="section-lg pt-0">
      <div className="container">
        <div className="row g-xxl-5 align-items-center">
          <div className="col-12 col-lg-10 col-xl-8">
            <h1 className="display-5 fw-normal">{data.mainData.title}</h1>
            <div className="row g-2 g-md-3 mt-3">
              <div className="col-12 col-md-6">
                <ul className="list-unstyled">
                  {data.features1.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check pe-2"></i>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <ul className="list-unstyled">
                  {data.features2.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check pe-2"></i>
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>{' '}
            {/* end row(inner) */}
            <a
              className="button button-lg mt-4 mt-lg-5"
              href={data.mainData.meetOurTeamUrl}
            >
              Meet Our Team
            </a>
          </div>
          <div className="col-12 col-xxl-4 text-xxl-end d-none d-xxl-block">
            <Image
              className="img-mask-1"
              src={data.mainData.image}
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

export default MarketingAbout;
