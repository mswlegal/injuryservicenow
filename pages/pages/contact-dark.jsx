import React from 'react';
import {
  BackgroundVerticalLines,
  Contact,
  Footer,
  Header,
  ScrollToTop,
} from '@/components';
import { mainData } from '@/lib/data';
import Head from 'next/head';

export default function ContactDark() {
  const themeData = mainData.pageContactDark;

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
        {/* Contact section */}
        <Contact />
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
