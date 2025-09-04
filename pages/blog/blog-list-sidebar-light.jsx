import React, { useEffect } from 'react';
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

export default function BlogListSidebarLight() {
  const themeData = mainData.pageBlogListSidebarLight;

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

        {/* Blog Posts */}
        <div className="section-lg">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-lg-7 col-xl-8">
                <div className="row g-5 pe-xl-5">
                  {/* Blog Post */}
                  {blogData.blogListSidebarDark.posts.map((item, index) => (
                    <div key={index} className="col-12">
                      <div className="blog-post-box">
                        <div className="blog-img">
                          <Link
                            className="blog-img-link"
                            href={`light/${item.slug}`}
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
                                href={`light/${item.slug}`}
                              >
                                by {item.postedBy}
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="link-hover"
                                href={`light/${item.slug}`}
                              >
                                {item.date}
                              </Link>
                            </li>
                          </ul>
                          <h2>
                            <Link
                              className="link-hover-2"
                              href={`light/${item.slug}`}
                            >
                              {item.title}
                            </Link>
                          </h2>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>{' '}
                {/* end row(inner) */}
              </div>
              <div className="col-12 col-lg-5 col-xl-4">
                {/* Categories */}
                <div className="fancy-box">
                  <h6 className="title-heading">Categories</h6>
                  <ul className="list-unstyled mt-3">
                    {blogData.blogListSidebarDark.categories.map(
                      (item, index) => (
                        <li key={index}>
                          <Link className="link-hover" href={item.url}>
                            {item.name}
                          </Link>
                          <span className="ps-2">- {item.countOfPosts}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* Trending Posts */}
                <div className="fancy-box mt-4">
                  <h6 className="title-heading mb-4">Trending Posts</h6>
                  {blogData.blogListSidebarDark.posts
                    .filter(item => item.isTrending)
                    .map((item, index) => (
                      <div key={index} className="sidebar-post mt-3">
                        <div className="post-img">
                          <Link href={`light/${item.slug}`}>
                            <Image
                              src={item.mainImage}
                              alt={item.title}
                              placeholder="blur"
                            />
                          </Link>
                        </div>
                        <div className="post-title">
                          <h6 className="mb-0">
                            <Link href={`light/${item.slug}`}>
                              {item.title}
                            </Link>
                          </h6>
                          <span className="font-small">
                            Posted on {item.date}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
                {/* Tags */}
                <div className="fancy-box mt-4">
                  <h6 className="title-heading">Tags</h6>
                  <ul className="list-inline-lg mt-3">
                    {blogData.blogListSidebarDark.tags.map((item, index) => (
                      <li key={index}>
                        <Link className="link-hover" href={item.url}>
                          #{item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Archive */}
                <div className="fancy-box mt-4">
                  <h6 className="title-heading">Archive</h6>
                  <ul className="list-unstyled mt-3">
                    {blogData.blogListSidebarDark.archive.map((item, index) => (
                      <li key={index}>
                        <Link className="link-hover" href={item.url}>
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/*  end container */}
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
