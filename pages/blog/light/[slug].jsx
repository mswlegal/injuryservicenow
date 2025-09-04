import React, { useEffect, useState } from 'react';
import {
  BackgroundVerticalLines,
  Footer,
  Header,
  Lightbox,
  ScrollToTop,
} from '@/components';
import Head from 'next/head';
import { blogData } from '@/components/Blog/BlogData';
import Image from 'next/image';
import Link from 'next/link';

const PostPageLight = ({ post }) => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = image => {
    setLightboxImage(image);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

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
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords} />
      </Head>

      <main>
        {/* Header section */}
        <Header />
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h1 className="display-4 fw-normal">{post.title}</h1>
                <p>{post.description}</p>
              </div>
            </div>{' '}
            {/* end row */}
            <div className="row g-4 mt-4">
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Category</h6>
                  <ul className="list-inline-dot">
                    {post.categories.map((category, index) => (
                      <li key={index}>
                        <Link className="link-hover" href={category.url}>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Posted by</h6>
                  <span>{post.postedBy}</span>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Tags</h6>
                  <ul className="list-inline-lg">
                    {post.tags.map((tag, index) => (
                      <li key={index}>
                        <Link className="link-hover" href={tag.url}>
                          {tag.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-3">
                <div className="fancy-box">
                  <h6 className="sm-heading">Posted on</h6>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>{' '}
            {/* end row */}
          </div>{' '}
          {/* end container */}
        </div>

        <div className="section pt-0">
          <div className="container">
            {/* Media */}
            <div className="row g-4">
              {post.media.map((item, index) => (
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
            {/* end row */}
            {/* Content */}
            <div className="row mt-5">
              <div className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>{' '}
            {/* end row */}
            {/* Images */}
            <div className="row g-4 mt-4">
              {/* Images Lightbox */}
              {post.images.map((item, index) => (
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
            {/* end container */}
          </div>
        </div>
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
  // Generate paths for all your business and corporate blog posts
  const businessPaths = blogData.business.posts.map(post => ({
    params: { slug: post.slug },
  }));

  const corporatePaths = blogData.corporate.posts.map(post => ({
    params: { slug: post.slug },
  }));

  const paths = [...businessPaths, ...corporatePaths];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  // Search for the blog post with the matching slug in the business section
  const businessPost = blogData.business.posts.find(post => post.slug === slug);
  // Search for the blog post with the matching slug in the corporate section
  const corporatePost = blogData.corporate.posts.find(
    post => post.slug === slug
  );

  // Check if the post is found in either section
  if (!businessPost && !corporatePost) {
    return {
      notFound: true,
    };
  }

  // Return the appropriate post based on the section
  const post = businessPost || corporatePost;

  return {
    props: {
      post,
    },
  };
}

export default PostPageLight;
