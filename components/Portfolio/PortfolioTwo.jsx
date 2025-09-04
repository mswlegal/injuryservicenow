import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PortfolioTwo = ({ data }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [isLightTheme, setIsLightTheme] = useState(false);

  const filteredProjects =
    selectedFilter === ''
      ? data.projects
      : data.projects.filter(item => item.category === selectedFilter);

  useEffect(() => {
    setIsLightTheme(document.body.classList.contains('theme-light'));
  }, []);

  return (
    <div className="section-lg pt-0">
      <div className="container">
        <div className="filter mb-4 mb-lg-5 text-center">
          <ul>
            <li
              onClick={() => setSelectedFilter('')}
              className={selectedFilter === '' ? 'mixitup-control-active' : ''}
            >
              Show All
            </li>
            {data.navigationList.map((listItem, index) => (
              <li
                key={index}
                onClick={() => setSelectedFilter(listItem.dataFilter.slice(1))}
                className={
                  selectedFilter === listItem.dataFilter.slice(1)
                    ? 'mixitup-control-active'
                    : ''
                }
              >
                {listItem.title}
              </li>
            ))}
          </ul>
        </div>{' '}
        {/* end Portfolio Filter */}
        <div className="row g-4 gy-md-5 g-lg-5 portfolio-grid">
          {/* Portfolio Item */}
          {filteredProjects.map((item, index) => (
            <div
              key={index}
              className="col-12 col-md-6 portfolio-item category-1"
            >
              <div className="portfolio-box">
                {/* Image */}
                <div className="portfolio-img">
                  <Link
                    href={`portfolio/${isLightTheme ? item.slug : 'light/' + item.slug}`}
                  >
                    <Image
                      src={item.mainImage}
                      alt={item.title}
                      placeholder="blur"
                    />
                  </Link>
                </div>
                <div className="pt-4">
                  {/* Categories */}
                  <ul className="list-inline-dot sm-heading mb-2">
                    {item.categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          className="link-hover"
                          href={`portfolio/${isLightTheme ? item.slug : 'light/' + item.slug}`}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* Caption */}
                  <h2>
                    <Link
                      className="link-hover-2"
                      href={`portfolio/${isLightTheme ? item.slug : 'light/' + item.slug}`}
                    >
                      {item.title}
                    </Link>
                  </h2>
                </div>
              </div>{' '}
              {/* end portfolio-box */}
            </div>
          ))}
        </div>{' '}
        {/* end row */}
      </div>{' '}
      {/* end container */}
    </div>
  );
};

export default PortfolioTwo;
