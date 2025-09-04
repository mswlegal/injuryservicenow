import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const AboutTwo = ({ data }) => {
  const [counters, setCounters] = useState({
    count1: 0,
    count2: 0,
  });

  const targetCounters = {
    count1: data.mainData.count1,
    count2: data.mainData.count2,
  };

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2400;
      const interval = 50;

      Object.keys(targetCounters).forEach(key => {
        const increment = (targetCounters[key] / duration) * interval;

        let current = 0;
        const intervalId = setInterval(() => {
          current += increment;
          setCounters(prevCounters => ({
            ...prevCounters,
            [key]: Math.min(Math.ceil(current), targetCounters[key]),
          }));

          if (current >= targetCounters[key]) {
            clearInterval(intervalId);
          }
        }, interval);
      });
    };

    animateCounters();
  }, []);

  return (
    <div className="section-box">
      <div className="section bg-lighter border-radius-1">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-12 col-lg-6">
              <div className="row">
                <div className="col-6 text-end">
                  <Image
                    src={data.mainData.image1}
                    alt="img-mask"
                    placeholder="blur"
                    className="img-mask-1"
                  />
                  <div className="d-flex align-items-center justify-content-end mt-3">
                    <div className="d-inline-block pe-2">
                      <h4 className="line-height-100 fw-normal mb-0">+</h4>
                      <p className="sm-heading">{data.mainData.name1}</p>
                    </div>
                    <div className="d-inline-block">
                      <h1 className="fw-semi-bold stroke-text display-4 letter-spacing-1">
                        <span className="counter">{counters.count1}</span>
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-inline-block">
                      <h1 className="fw-semi-bold stroke-text display-4 letter-spacing-1">
                        <span className="counter">{counters.count2}</span>
                      </h1>
                    </div>
                    <div className="d-inline-block ps-2">
                      <h4 className="line-height-100 fw-normal mb-0">+</h4>
                      <p className="sm-heading">{data.mainData.name2}</p>
                    </div>
                  </div>
                  <Image
                    src={data.mainData.image2}
                    alt="img-mask"
                    placeholder="blur"
                    className="img-mask-2"
                  />
                </div>
              </div>{' '}
              {/* end row(inner) */}
            </div>
            <div className="col-12 col-lg-6">
              <h1 className="display-5 fw-normal">{data.mainData.title}</h1>
              <ul className="list-unstyled mt-4">
                {data.features.map((item, index) => (
                  <li key={index}>
                    <i className="bi bi-check pe-2"></i>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>{' '}
          {/* end row */}
        </div>{' '}
        {/* end container */}
      </div>
    </div>
  );
};

export default AboutTwo;
