import React from 'react';
import Link from 'next/link';

const Pricing = ({ data, className }) => {
  return (
    <div className={`section-lg ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h6 className="title-heading">{data.mainData.title}</h6>
            <h2 className="display-3 fw-medium">{data.mainData.title2}</h2>
            <p>{data.mainData.description}</p>
          </div>
        </div>{' '}
        {/* end row */}
        <div className="row g-4 g-xxl-5 mt-4">
          {/* Prices box */}
          {data.plans.map((item, index) => (
            <div key={index} className="col-12 col-lg-4">
              <div className="fancy-box">
                <div className="inline-flex align-items-center">
                  <div className="icon-box me-2">
                    <i className={item.bootstrapIcon}></i>
                  </div>
                  <div className="d-inline-block">
                    <h6 className="font-small uppercase letter-spacing-1">
                      {item.name}
                    </h6>
                  </div>
                </div>
                <ul className="list-unstyled mt-4">
                  {item.features.map((feature, index) => (
                    <li key={index}>
                      <i className="bi bi-check pe-2"></i>
                      {feature.name}
                    </li>
                  ))}
                </ul>
                {/* <div className="mt-4">
                                    <div className="d-inline-block">
                                        <h1 className="display-3 line-height-100 m-0">{item.price}</h1>
                                    </div>
                                    <div className="d-inline-block">
                                        <span>/{item.interval}</span>
                                    </div>
                                </div> */}
                <Link
                  className="button button-font-2 mt-4"
                  href={item.makeOrderUrl}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>{' '}
        {/* end row */}
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default Pricing;
