import { useEffect } from 'react';
import Head from 'next/head';
import { mainData } from '@/lib/data';
import {
  About,
  AgencyHero,
  BackgroundVerticalLines,
  Clients,
  Footer,
  Header,
  Portfolio,
  Pricing,
  ScrollToTop,
  Services,
  Team,
  Testimonial,
} from '@/components';
import { clientsData } from '@/components/Clients/ClientsData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { pricingData } from '@/components/Pricing/PricingData';
import { teamData } from '@/components/Team/TeamData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';

export default function IndexAgencyLight() {
  const themeData = mainData.agencyLight;

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
        <AgencyHero />
        {/* Clients section*/}
        {/* <Clients data={clientsData.agency.clients} className="pt-0" /> */}
        {/* Services section */}
        <Services data={servicesData.agency} className="pt-0" />
        {/* Portfolio section */}
        <Portfolio data={portfolioData.agency} />
        {/* Pricing section */}
        <Pricing data={pricingData.agency} />
        {/* About section */}
        <About />
        {/* Team section */}
        <Team data={teamData.agency} />
        {/* Testimonial section */}
        <Testimonial data={testimonialData.agency} />
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
