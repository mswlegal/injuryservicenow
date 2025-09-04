import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BusinessAbout = ({ data, className }) => {
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
    <div className={`section-lg ${className}`}>
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-6 text-end">
                <Image
                  src={data.mainData.image1}
                  alt="img-mask"
                  placeholder="blur"
                  className="img-mask-2"
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
            </div>
            {/* end row(inner) */}
          </div>
          <div className="col-12 col-lg-6">
            <h6 className="title-heading mb-3">{data.mainData.title1}</h6>
            <h2 className="display-6 fw-normal mb-3">{data.mainData.title2}</h2>
            <p>{data.mainData.biography}</p>
            <Link
              className="button button-lg button-font-2 mt-4"
              href={data.mainData.learnMoreUrl}
            >
              Learn More
            </Link>
          </div>
        </div>{' '}
        {/* end row */}
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default BusinessAbout;
