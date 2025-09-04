import React, { useEffect } from 'react';
import {
  BackgroundVerticalLines,
  Footer,
  Header,
  PortfolioTwo,
  ScrollToTop,
} from '@/components';
import { mainData } from '@/lib/data';
import Head from 'next/head';
import { portfolioData } from '@/components/Portfolio/PortfolioData';

export default function PortfolioListLight() {
  const themeData = mainData.pagePortfolioListLight;

  useEffect(() => {
    // Add class to the body tag
    document.body.classList.add('theme-light');

    // Cleanup function to remove the class on component unmount
    return () => {
      document.body.classList.remove('theme-light');
    };
  }, []);

  return (
    <>
      <Head>
        <title>{`${mainData.websiteTitle} - ${themeData.title}`}</title>
        <meta name="description" content={themeData.description} />
        <meta name="keywords" content={themeData.keywords} />
      </Head>
      <main>
        {/* Header section */}
        <Header />
        {/* Portfolio section */}
        <div className="section-lg pb-0">
          <PortfolioTwo data={portfolioData.portfolioList} />
        </div>
        {/* Footer section */}
        <Footer />
        {/* Scroll To Top */}
        <ScrollToTop />
        {/* Background Vertical Lines */}
        <BackgroundVerticalLines />
      </main>
    </>
  );
}
