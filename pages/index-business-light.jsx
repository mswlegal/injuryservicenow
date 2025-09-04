import { useEffect } from 'react';
import Head from 'next/head';
import { mainData } from '@/lib/data';
import {
  Awards,
  BackgroundVerticalLines,
  Blog,
  BusinessAbout,
  BusinessHero,
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
import { aboutData } from '@/components/About/AboutData';
import { awardsData } from '@/components/Awards/AwardsData';
import { blogData } from '@/components/Blog/BlogData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { pricingData } from '@/components/Pricing/PricingData';
import { servicesData } from '@/components/Services/ServicesData';
import { teamData } from '@/components/Team/TeamData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';

export default function IndexBusinessLight() {
  const themeData = mainData.businessLight;

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
        <BusinessHero />
        {/* Clients section */}
        <Clients data={clientsData.business.clients} />
        {/* About section */}
        <BusinessAbout data={aboutData.business} className="pt-0" />
        {/* Awards section */}
        <Awards data={awardsData.business} />
        {/* Portfolio section */}
        <Portfolio data={portfolioData.business} />
        {/* Pricing section */}
        <Pricing data={pricingData.business} />
        {/* Testimonial section */}
        <Testimonial data={testimonialData.business} />
        {/* Blog section */}
        <Blog data={blogData.business} />
        {/* Services section */}
        <Services data={servicesData.business} />
        {/* Team section */}
        <Team data={teamData.business} className="pt-0" />
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
