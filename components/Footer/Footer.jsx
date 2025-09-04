import React from 'react';
import Link from 'next/link';
import { footerData } from './FooterData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="section-box">
        <div className="section-sm bg-lighter border-radius-1">
          <div className="container">
            <div className="row g-4 g-lg-5">
              <div className="col-12 col-lg-4">
                <h2 className="uppercase letter-spacing-1">
                  {footerData.mainData.websiteName}
                </h2>
                <p>{footerData.mainData.websiteDescription}</p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h6 className="sm-heading">Email:</h6>
                <h3>{footerData.mainData.email}</h3>
                <p>{footerData.mainData.time}</p>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <h6 className="sm-heading">Phone:</h6>
                <h3>{footerData.mainData.phone}</h3>
                <p>Call or WhatsApp</p>
              </div>
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </div>
      </div>
      <div className="py-4 pb-lg-5">
        <div className="container">
          <div className="row g-2">
            <div className="col-12 col-md-6 text-center text-md-start">
              <p>
                &copy; {currentYear} {footerData.name},{' '}
                {footerData.copyWriteText}
              </p>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <ul className="list-inline-dot">
                {footerData.links.map((item, index) => (
                  <li key={index}>
                    <Link className="link-hover" href={item.url}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>{' '}
          {/* end row */}
        </div>{' '}
        {/* end container */}
      </div>
    </footer>
  );
};

export default Footer;
