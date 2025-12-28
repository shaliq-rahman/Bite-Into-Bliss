import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import styles from "@/styles/our-story/our-story.module.css";

export default function OurStory() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const aos = (delay = 100) => ({
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    "data-aos-delay": delay.toString(),
  });

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Our Story - Toronto Cupcake | Founded in 2010 | Gourmet Cupcakes Toronto</title>
        <meta name="title" content="Our Story - Toronto Cupcake | Founded in 2010 | Gourmet Cupcakes Toronto" />
        <meta name="description" content="Learn about Toronto Cupcake - Founded in 2010, we are Toronto's leading destination for gourmet branded cupcakes. Handcrafted cupcakes made fresh daily using the finest ingredients. Fast, reliable delivery across the GTA." />
        <meta name="keywords" content="toronto cupcake story, toronto cupcake history, gourmet cupcakes toronto, cupcake bakery toronto, founded 2010, michelle toronto cupcake, toronto bakery, GTA cupcakes, custom cupcakes toronto" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.torontocupcake.com/our-story" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.torontocupcake.com/our-story" />
        <meta property="og:title" content="Our Story - Toronto Cupcake | Founded in 2010" />
        <meta property="og:description" content="Learn about Toronto Cupcake - Founded in 2010, we are Toronto's leading destination for gourmet branded cupcakes. Handcrafted cupcakes made fresh daily." />
        <meta property="og:image" content="https://www.torontocupcake.com/images/story.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Toronto Cupcake" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.torontocupcake.com/our-story" />
        <meta name="twitter:title" content="Our Story - Toronto Cupcake | Founded in 2010" />
        <meta name="twitter:description" content="Learn about Toronto Cupcake - Founded in 2010, we are Toronto's leading destination for gourmet branded cupcakes." />
        <meta name="twitter:image" content="https://www.torontocupcake.com/images/story.jpg" />
        
        {/* Structured Data - About Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "Our Story - Toronto Cupcake",
              "description": "Learn about Toronto Cupcake - Founded in 2010, we are Toronto's leading destination for gourmet branded cupcakes.",
              "url": "https://www.torontocupcake.com/our-story",
              "mainEntity": {
                "@type": "Bakery",
                "name": "Toronto Cupcake",
                "foundingDate": "2010",
                "description": "Toronto's leading destination for gourmet branded cupcakes. Handcrafted cupcakes made fresh daily using the finest ingredients.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Toronto",
                  "addressRegion": "ON",
                  "addressCountry": "CA"
                }
              }
            })
          }}
        />
      </Head>

      <div className={styles.our_story_page}>
        <div className="container">
          <div className={styles.our_story_content}>
            <div className={styles.our_story_left}>
              <h1 className={styles.story_title} {...aos(100)}>
                Toronto Cupcake
              </h1>
              
              <div className={styles.story_text_content}>
                <p className={styles.story_paragraph} {...aos(200)}>
                Welcome to Toronto Cupcake! Founded in 2010, we are proud to be Toronto's leading destination for gourmet branded cupcakes. Whether you're celebrating a birthday, hosting a corporate event, or simply indulging in a sweet treat, our handcrafted cupcakes are made fresh daily using the finest ingredients. Explore our wide range of classic and seasonal flavors, and enjoy fast, reliable delivery across the GTA.
                We love the idea that our treats are making people happy every time they bite into one. How much fun is that!
                </p>
                
                <p className={styles.story_paragraph} {...aos(300)}>
                At Toronto Cupcake, we believe in giving back to the community. Since our inception, we have partnered with numerous local organizations, donating our time and/or delicious cupcakes to support causes that make a difference in local and regional communities. We are committed to making a positive impact in our community and welcome opportunities to collaborate on charitable events.
                </p>
                
                <p className={styles.story_paragraph} {...aos(400)}>
                Ready to experience the best cupcakes in Toronto? Browse our selection online or get in touch to discuss custom orders. From corporate events to weddings, we have the perfect cupcakes to make your occasion unforgettable. Order today and have our gourmet cupcakes delivered right to your door!
                </p>
              </div>
            </div>

            <div className={styles.our_story_right} {...aos(500)}>
              <div className={styles.story_image_wrapper}>
                <Image 
                  src="/images/story.jpg" 
                  alt="Toronto Cupcake character" 
                  width={500} 
                  height={300}
                  className={styles.story_image}
                />
              </div>

              <h4 className={styles.story_image_title}>About Michelle</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

