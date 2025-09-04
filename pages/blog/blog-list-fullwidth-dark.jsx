import React from 'react';
import {
  BackgroundVerticalLines,
  Footer,
  Header,
  ScrollToTop,
} from '@/components';
import { mainData } from '@/lib/data';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { blogData } from '@/components/Blog/BlogData';

export default function BlogListFullWidthDark() {
  const themeData = mainData.pageBlogListFullWidthDark;

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

        {/* Blog Posts */}
        <div className="section-lg">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                <div className="row g-5">
                  {/* Blog Post */}
                  {blogData.blogListFullwidthDarkPage.posts.map(
                    (item, index) => (
                      <div key={index} className="col-12">
                        <div className="blog-post-box">
                          <div className="blog-img">
                            <Link
                              className="blog-img-link"
                              href={`${item.slug}`}
                            >
                              <Image
                                src={item.mainImage}
                                alt={item.title}
                                placeholder="blur"
                              />
                            </Link>
                            <div className="blog-category">
                              <Link
                                className="button button-sm button-style-2 button-font-2"
                                href={item.categories[0].url}
                              >
                                {item.categories[0].name}
                              </Link>
                            </div>
                          </div>
                          <div className="pt-4">
                            <ul className="list-inline-dot sm-heading mb-2">
                              <li>
                                <Link
                                  className="link-hover"
                                  href={`${item.slug}`}
                                >
                                  by {item.postedBy}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="link-hover"
                                  href={`${item.slug}`}
                                >
                                  {item.date}
                                </Link>
                              </li>
                            </ul>
                            <h2>
                              <Link
                                className="link-hover-2"
                                href={`${item.slug}`}
                              >
                                {item.title}
                              </Link>
                            </h2>
                            <p>{item.description}</p>
                            <Link className="button mt-4" href={`${item.slug}`}>
                              Continue Reading
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>{' '}
                {/* end row(inner) */}
              </div>
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </div>
        {/* end Blog Posts */}

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
