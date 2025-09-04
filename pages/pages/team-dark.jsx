import React from 'react';
import {
  AwardsTwo,
  BackgroundVerticalLines,
  CorporateClients,
  Footer,
  Header,
  ScrollToTop,
  Team,
} from '@/components';
import { awardsData } from '@/components/Awards/AwardsData';
import { clientsData } from '@/components/Clients/ClientsData';
import { teamData } from '@/components/Team/TeamData';
import { mainData } from '@/lib/data';
import Head from 'next/head';

export default function TeamDark() {
  const themeData = mainData.pageTeamDark;

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
        {/* Team section */}
        <Team data={teamData.teamPage} className="pt-0" />
        {/* Awards section */}
        <AwardsTwo data={awardsData.teamPage} className="pt-0" />
        {/* Clients section */}
        <CorporateClients data={clientsData.teamPage.clients} />
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
