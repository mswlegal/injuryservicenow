import React from 'react';
import {
  AboutHero,
  Awards,
  BackgroundVerticalLines,
  Clients,
  Footer,
  Header,
  ScrollToTop,
  Team,
  Testimonial,
} from '@/components';
import { awardsData } from '@/components/Awards/AwardsData';
import { clientsData } from '@/components/Clients/ClientsData';
import { teamData } from '@/components/Team/TeamData';
import { testimonialData } from '@/components/Testimonial/TestimonialData';
import { mainData } from '@/lib/data';
import Head from 'next/head';

export default function AboutUsDark() {
  const themeData = mainData.pageAboutUsDark;

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
        <AboutHero />
        {/* Clients section */}
        <Clients data={clientsData.aboutPage.clients} className="pt-0" />
        {/* Awards section */}
        <Awards data={awardsData.aboutPage} />
        {/* Team section */}
        <Team data={teamData.aboutPage} className="pt-0" />
        {/* Testimonial section */}
        <Testimonial data={testimonialData.aboutPage} />
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
