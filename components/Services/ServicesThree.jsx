import React from 'react';

const ServicesThree = ({ data, className }) => {
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
        <div className="row g-4 g-xxl-5 icon-xl text-center mt-4">
          {data.services.map((item, index) => (
            <div key={index} className="col-12 col-lg-4">
              <div className="fancy-box">
                <div className="icon-box icon-box-lg mb-3">
                  <i className={item.bootstrapIcon}></i>
                </div>
                <h4 className="mb-3">{item.title}</h4>
                <p>{item.description}</p>
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

export default ServicesThree;
