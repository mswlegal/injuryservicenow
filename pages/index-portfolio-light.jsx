import { useEffect } from 'react';
import Head from 'next/head';
import { mainData } from '@/lib/data';
import {
  Awards,
  BackgroundVerticalLines,
  Clients,
  Footer,
  Header,
  PortfolioHero,
  PortfolioTwo,
  ScrollToTop,
} from '@/components';
import { clientsData } from '@/components/Clients/ClientsData';
import { awardsData } from '@/components/Awards/AwardsData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';

export default function IndexPortfolioLight() {
  const themeData = mainData.portfolioLight;

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
        {/* Hero section */}
        <PortfolioHero />
        {/* Portfolio section */}
        <PortfolioTwo data={portfolioData.portfolio} />
        {/* Clients section */}
        <Clients data={clientsData.portfolio.clients} className="pt-0" />
        {/* Awards section */}
        <Awards data={awardsData.portfolio} className="pt-0" />
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
