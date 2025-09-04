import React, { useEffect } from 'react';
import {
  Accordion,
  BackgroundVerticalLines,
  Footer,
  Header,
  Pricing,
  ScrollToTop,
  Testimonial,
} from '@/components';
import { accordionData } from '@/components/Accordion/AccordionData';
import { pricingData } from '@/components/Pricing/PricingData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data';
import Head from 'next/head';

export default function PricingLight() {
  const themeData = mainData.pagePricingLight;

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
        {/* Pricing section */}
        <Pricing data={pricingData.pricingPage} className="pt-0" />
        {/* Testimonial section */}
        <Testimonial data={testimonialData.pricingPage} />
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
