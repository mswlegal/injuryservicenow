import Head from 'next/head';
import { mainData } from '@/lib/data';
import {
  BackgroundVerticalLines,
  Clients,
  Footer,
  Header,
  MarketingAbout,
  MarketingHero,
  Portfolio,
  Pricing,
  ScrollToTop,
  ServicesTwo,
  Testimonial,
} from '@/components';
import { clientsData } from '@/components/Clients/ClientsData';
import { aboutData } from '@/components/About/AboutData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { portfolioData } from '@/components/Portfolio/PortfolioData';
import { pricingData } from '@/components/Pricing/PricingData';

export default function IndexMarketingDark() {
  const themeData = mainData.marketingDark;

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
        <MarketingHero />
        {/* Services section */}
        <ServicesTwo data={servicesData.marketing} />
        {/* About section */}
        <MarketingAbout data={aboutData.marketing} />
        {/* Clients section */}
        <Clients data={clientsData.marketing.clients} className="pt-0" />
        {/* Portfolio section */}
        <Portfolio data={portfolioData.marketing} />
        {/* Pricing section */}
        <Pricing data={pricingData.marketing} />
        {/* Testimonial section */}
        <Testimonial data={testimonialData.marketing} />
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
