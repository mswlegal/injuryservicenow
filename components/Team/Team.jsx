import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Team = ({ data, className }) => {
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
          {/* Team box */}
          {data.members.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4">
              <div className="team-box">
                <div className="team-img">
                  <Image src={item.image} alt={item.name} placeholder="blur" />
                  <div className="team-social">
                    <ul className="list-inline">
                      {item.socials.map((social, index) => (
                        <li key={index}>
                          <Link
                            className="button-circle button-circle-sm button-circle-style-2"
                            href={social.url}
                          >
                            <i className={social.bootstrapIcon}></i>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <h6 className="sm-heading">{item.jobTitle}</h6>
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>{' '}
        {/* end row */}
        <div className="text-center mt-4">
          <a
            className="button button-lg"
            href={data.mainData.ViewAllMembersUrl}
          >
            View All Members
          </a>
        </div>
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default Team;
