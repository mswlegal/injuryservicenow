import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { aboutData } from './AboutData';

const About = () => {
  const [counters, setCounters] = useState({
    count1: 0,
    count2: 0,
  });

  const targetCounters = {
    count1: aboutData.mainData.count1,
    count2: aboutData.mainData.count2,
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
                    src={aboutData.mainData.image1}
                    alt="img-mask"
                    placeholder="blur"
                    className="img-mask-2"
                  />
                  <div className="d-flex align-items-center justify-content-end mt-3">
                    <div className="d-inline-block pe-2">
                      <h4 className="line-height-100 fw-normal mb-0">+</h4>
                      <p className="sm-heading">{aboutData.mainData.name1}</p>
                    </div>
                    <div className="d-inline-block">
                      <h1 className="fw-semi-bold display-4 letter-spacing-1">
                        <span className="counter stroke-text">
                          {counters.count1}
                        </span>
                        Billion
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
                      <p className="sm-heading">{aboutData.mainData.name2}</p>
                    </div>
                  </div>
                  <Image
                    src={aboutData.mainData.image2}
                    alt="img-mask"
                    placeholder="blur"
                    className="img-mask-2"
                  />
                </div>
              </div>{' '}
              {/* end row(inner) */}
            </div>
            <div className="col-12 col-lg-6">
              <h6 className="title-heading mb-3">
                {aboutData.mainData.title1}
              </h6>
              <h2 className="display-6 fw-normal mb-4">
                {aboutData.mainData.title2}
              </h2>
              <div className="row g-4 mb-4">
                {aboutData.skills.map((skill, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <div className="progress-box">
                      <h6 className="sm-heading">{skill.name}</h6>
                      <div className="animated-progress">
                        <div
                          data-progress={skill.progress}
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-1">{aboutData.mainData.biography}</p>
              <Link
                className="button button-lg mt-4"
                href={aboutData.mainData.learnMoreUrl}
              >
                Learn More
              </Link>
            </div>
          </div>{' '}
          {/* end row */}
        </div>{' '}
        {/* end container */}
      </div>
    </div>
  );
};

export default About;
