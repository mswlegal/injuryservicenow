import React from 'react';

const Services = ({ data, className }) => {
  return (
    <div className={`section-lg ${className}`}>
      <div className="container">
        <div className="row g-4 g-xxl-5 icon-3xl">
          {/* Services box */}
          {data.services.map((item, index) => (
            <div key={index} className="col-12 col-lg-6">
              <div className="order-box">
                <div className="order">
                  <h2 className="display-4 fw-semi-bold stroke-text">
                    {item.number}
                  </h2>
                </div>
                <div>
                  <i className={`${item.bootstrapIcon} mb-2`}></i>
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
  );
};

export default Services;
