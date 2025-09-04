import React from 'react';

const AwardsTwo = ({ data, className }) => {
  return (
    <div className={`section-lg ${className}`}>
      <div className="container">
        <div className="row g-4 g-xxl-5 align-items-center">
          <div className="col-12 col-lg-6">
            <div className="row g-4">
              {data.progress.map((item, index) => (
                <div key={index} className="col-12">
                  <div className="progress-box">
                    <h6 className="sm-heading">{item.name}</h6>
                    <div className="animated-progress">
                      <div
                        data-progress={item.progress}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {data.awards.map((item, index) => (
            <div key={index} className="col-12 col-lg-6">
              <div className="fancy-box">
                <h3>{item.title}</h3>
                <h6 className="sm-heading">{item.date}</h6>
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

export default AwardsTwo;
