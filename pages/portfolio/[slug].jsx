import React, { useState } from 'react';
import {
  BackgroundVerticalLines,
  Footer,
  Header,
  Lightbox,
  ScrollToTop,
} from '@/components';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/components/Portfolio/PortfolioData';

const ProjectPageDark = ({ project }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = image => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
        <meta name="keywords" content={project.keywords} />
      </Head>

      <main>
        {/* Header section */}
        <Header />

        {/* Project Description */}
        <div className="section pt-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h1 className="display-4 fw-normal">{project.title}</h1>
                <p>{project.description}</p>
              </div>
            </div>{' '}
            {/* end row  */}
            <div className="row g-4 mt-4">
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Services</h6>
                  <ul className="list-inline-dot">
                    {project.services.map((item, index) => (
                      <li key={index}>{item.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Client</h6>
                  <span>{project.client}</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Duration</h6>
                  <span>{project.duration}</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Project Link</h6>
                  <Link className="link-hover" href={project.projectLink.url}>
                    {project.projectLink.title}
                  </Link>
                </div>
              </div>
            </div>{' '}
            {/* end row  */}
          </div>{' '}
          {/* end container  */}
        </div>
        {/* end Project Description */}

        {/* Media */}
        <div className="section pt-0">
          <div className="container">
            <div className="row g-4">
              {project.media.map((item, index) => (
                <div key={index} className="col-12 col-lg-4">
                  <Image
                    className="border-radius-1"
                    src={item.image}
                    alt={item.alt}
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>{' '}
            {/* end row  */}
            <div className="row mt-5">
              <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <div dangerouslySetInnerHTML={{ __html: project.content }} />
              </div>
            </div>{' '}
            {/* end row  */}
            <div className="row g-4 mt-4">
              {/* Images Lightbox */}
              {project.images.map((item, index) => (
                <div key={index} className="col-12 col-md-6">
                  <div
                    className="lightbox-image"
                    onClick={() => openLightbox(item.image)}
                  >
                    <Image src={item.image} alt={item.alt} placeholder="blur" />
                    <a className="button-circle button-circle-xl button-circle-style-2">
                      <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>{' '}
            {/* end row  */}
          </div>{' '}
          {/* end container  */}
        </div>
        {/* end Media */}

        {lightboxImage && (
          <Lightbox image={lightboxImage} closeLightbox={closeLightbox} />
        )}

        {/* Footer section */}
        <Footer />
        {/* Scroll To Top */}
        <ScrollToTop />
        {/* Background Vertical Lines */}
        <BackgroundVerticalLines />
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const sections = [
    portfolioData.agency.projects,
    portfolioData.business.projects,
    portfolioData.portfolio.projects,
    portfolioData.startup.projects,
    portfolioData.marketing.projects,
  ];

  const paths = sections.flatMap(projects =>
    projects.map(project => ({ params: { slug: project.slug } }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  // Search for the Portfolio project with the matching slug in the agency section
  const agencyProjects = portfolioData.agency.projects.find(
    project => project.slug === slug
  );
  // Search for the Portfolio project with the matching slug in the business section
  const businessProjects = portfolioData.business.projects.find(
    project => project.slug === slug
  );
  // Search for the Portfolio project with the matching slug in the portfolio section
  const portfolioProjects = portfolioData.portfolio.projects.find(
    project => project.slug === slug
  );
  // Search for the Portfolio project with the matching slug in the startup section
  const startupProjects = portfolioData.startup.projects.find(
    project => project.slug === slug
  );
  // Search for the Portfolio project with the matching slug in the marketing section
  const marketingProjects = portfolioData.marketing.projects.find(
    project => project.slug === slug
  );

  // Check if the project is found in either section
  if (
    !agencyProjects &&
    !businessProjects &&
    !portfolioProjects &&
    !startupProjects &&
    !marketingProjects
  ) {
    return {
      notFound: true,
    };
  }

  // Return the appropriate project based on the section
  const project =
    agencyProjects ||
    businessProjects ||
    portfolioProjects ||
    startupProjects ||
    marketingProjects;

  return {
    props: {
      project,
    },
  };
}

export default ProjectPageDark;
