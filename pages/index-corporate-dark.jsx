import Head from 'next/head';
import { mainData } from '@/lib/data';
import {
  Accordion,
  BackgroundVerticalLines,
  Blog,
  BusinessAbout,
  CorporateClients,
  CorporateHero,
  Footer,
  Header,
  ScrollToTop,
  Services,
  Testimonial,
} from '@/components';
import { clientsData } from '@/components/Clients/ClientsData';
import { aboutData } from '@/components/About/AboutData';
import { blogData } from '@/components/Blog/BlogData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { accordionData } from '@/components/Accordion/AccordionData';

export default function IndexCorporateDark() {
  const themeData = mainData.corporateDark;

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
        <CorporateHero />
        {/* About section */}
        <BusinessAbout data={aboutData.corporate} />
        {/* Clients section */}
        <CorporateClients data={clientsData.corporate.clients} />
        {/* Services section */}
        <Services data={servicesData.corporate} className="pt-0" />
        {/* Blog section */}
        <Blog data={blogData.corporate} />
        {/* Testimonial section */}
        <div className="section-lg pb-0">
          <Testimonial data={testimonialData.corporate} />
        </div>
        {/* Accordion section */}
        <Accordion data={accordionData.corporate} />
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
