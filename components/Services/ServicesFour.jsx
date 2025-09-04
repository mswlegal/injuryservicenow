import React from 'react';

const ServicesFour = ({ data, className }) => {
  return (
    <>
      <div className={`section-lg ${className}`}>
        <div className="container">
          <div className="row g-4 g-xxl-5 icon-3xl">
            {/* Services box */}
            {data.process.map((item, index) => (
              <div key={index} className="col-12 col-lg-6">
                <div className="order-box">
                  <div className="order">
                    <h2 className="display-4 fw-semi-bold stroke-text">
                      {item.number}
                    </h2>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>{' '}
          {/* end row */}
        </div>{' '}
        {/* end container */}
      </div>
      <div className="section-lg pt-0">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
              <h2 className="display-4 fw-normal">{data.mainData.title}</h2>
              <a
                className="button button-lg mt-4"
                href={data.mainData.letsTalkUrl}
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>{' '}
          {/* end row */}
        </div>{' '}
        {/* end container */}
      </div>
    </>
  );
};

export default ServicesFour;
