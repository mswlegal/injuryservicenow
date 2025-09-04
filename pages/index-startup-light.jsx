import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  BackgroundVerticalLines,
  Clients,
  Footer,
  Header,
  Media,
  Portfolio,
  ScrollToTop,
  Services,
  StartupHero,
  Team,
  Testimonial,
} from '@/components';
import { mainData } from '@/lib/data';
import { clientsData } from '@/components/Clients/ClientsData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';

export default function IndexStartupLight() {
  const themeData = mainData.startupLight;

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
        <StartupHero />
        {/* Media section */}
        <Media />
        {/* Testimonial section */}
        <Testimonial data={testimonialData.startup} />
        {/* Portfolio section */}
        <Portfolio data={portfolioData.startup} />
        {/* Services section */}
        <Services data={servicesData.startup} />
        {/* Clients section */}
        <Clients data={clientsData.startup.clients} className="pt-0" />
        {/* Team section */}
        <Team className="pt-0" />
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
