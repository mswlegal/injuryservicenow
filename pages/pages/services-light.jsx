import React, { useEffect } from 'react';
import {
  AboutTwo,
  BackgroundVerticalLines,
  CorporateClients,
  Footer,
  Header,
  ScrollToTop,
  ServicesFour,
  ServicesThree,
  Testimonial,
} from '@/components';
import { aboutData } from '@/components/About/AboutData';
import { clientsData } from '@/components/Clients/ClientsData';
import { servicesData } from '@/components/Services/ServicesData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data';
import Head from 'next/head';

export default function ServicesLight() {
  const themeData = mainData.pageServicesLight;

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
        {/* Services section */}
        <ServicesThree data={servicesData.servicesPage} className="pt-0" />
        {/* Clients section */}
        <CorporateClients data={clientsData.servicesPage.clients} />
        {/* About section */}
        <AboutTwo data={aboutData.servicesPage} />
        {/* Testimonial section */}
        <div className="section-lg pb-0">
          <Testimonial data={testimonialData.servicesPage} className="pb-0" />
        </div>
        {/* Process section */}
        <ServicesFour data={servicesData.processServicesPage} />
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
