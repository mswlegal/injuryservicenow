import React from 'react';
import {
  BackgroundVerticalLines,
  Footer,
  Header,
  ScrollToTop,
} from '@/components';
import { mainData } from '@/lib/data';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function PageNotFoundDark() {
  const themeData = mainData.pageNotFoundDark;

  const router = useRouter();

  const goBack = () => {
    router.back();
  };

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

        <div className="section-lg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h1 className="display-1 fw-bold stroke-text hero-text">404</h1>
                <h2 className="fw-light">
                  Sorry, It appears that the page you were looking for
                  doesn&apos;t exist or might have been moved.
                </h2>
                <Link
                  href="#"
                  onClick={goBack}
                  className="button button-lg mt-4"
                >
                  Go Back
                </Link>
              </div>
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </div>

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
