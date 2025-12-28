import React, { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "@/styles/resources/resources.module.css";

export default function Resources() {
  const [openIndex, setOpenIndex] = useState(null);

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

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const resources = [
    {
      title: "The Guide to Sustainable, Zero-Waste, Ethical Weddings",
      content: "Discover how to plan a beautiful wedding that's kind to the planet. Learn about sustainable practices, zero-waste options, and ethical choices for your special day.",
    },
    {
      title: "Powerpoint Mannchen",
      content: "Explore our comprehensive presentation resources and guides for creating stunning visual content for your events and celebrations.",
    },
    {
      title: "Cupcakes Take The Cake",
      content: "Everything you need to know about cupcakes - from baking tips to decoration ideas. Make your cupcakes the star of any celebration.",
    },
    {
      title: "4 16 5 Flower",
      content: "Learn about floral arrangements, seasonal flowers, and how to incorporate beautiful blooms into your event planning and celebrations.",
    },
  ];

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Resources - Toronto Cupcake | Wedding, Engagement & Birthday Planning Guides</title>
        <meta name="title" content="Resources - Toronto Cupcake | Wedding, Engagement & Birthday Planning Guides" />
        <meta name="description" content="Discover helpful resources for planning weddings, engagements, birthdays and special events. Guides on sustainable weddings, cupcake decoration, floral arrangements, and event planning tips from Toronto Cupcake." />
        <meta name="keywords" content="wedding planning resources, engagement planning, birthday planning, sustainable weddings, zero-waste weddings, cupcake decoration tips, event planning guides, toronto wedding resources, GTA event planning" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.torontocupcake.com/resources" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.torontocupcake.com/resources" />
        <meta property="og:title" content="Resources - Toronto Cupcake | Wedding, Engagement & Birthday Planning Guides" />
        <meta property="og:description" content="Discover helpful resources for planning weddings, engagements, birthdays and special events. Guides on sustainable weddings, cupcake decoration, and event planning tips." />
        <meta property="og:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Toronto Cupcake" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.torontocupcake.com/resources" />
        <meta name="twitter:title" content="Resources - Toronto Cupcake | Wedding, Engagement & Birthday Planning Guides" />
        <meta name="twitter:description" content="Discover helpful resources for planning weddings, engagements, birthdays and special events." />
        <meta name="twitter:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        
        {/* Structured Data - Collection Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Resources - Toronto Cupcake",
              "description": "Resources for weddings, engagements, birthdays and more",
              "url": "https://www.torontocupcake.com/resources",
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                  {
                    "@type": "Article",
                    "position": 1,
                    "name": "The Guide to Sustainable, Zero-Waste, Ethical Weddings",
                    "description": "Discover how to plan a beautiful wedding that's kind to the planet. Learn about sustainable practices, zero-waste options, and ethical choices for your special day."
                  },
                  {
                    "@type": "Article",
                    "position": 2,
                    "name": "Powerpoint Mannchen",
                    "description": "Explore our comprehensive presentation resources and guides for creating stunning visual content for your events and celebrations."
                  },
                  {
                    "@type": "Article",
                    "position": 3,
                    "name": "Cupcakes Take The Cake",
                    "description": "Everything you need to know about cupcakes - from baking tips to decoration ideas. Make your cupcakes the star of any celebration."
                  },
                  {
                    "@type": "Article",
                    "position": 4,
                    "name": "4 16 5 Flower",
                    "description": "Learn about floral arrangements, seasonal flowers, and how to incorporate beautiful blooms into your event planning and celebrations."
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className={styles.resources_page}>
        <div className="container">
          <h1 className={styles.resources_title} {...aos(100)}>
            Resources for Weddings, Engagements, Birthdays
          </h1>

          <div className={styles.resources_list}  {...aos(100)}>
            {resources.map((resource, index) => (
              <div
                key={index}
                className={`${styles.resource_item} ${
                  openIndex === index ? styles.resource_item_open : ""
                }`}
              >
                <button
                  className={styles.resource_header}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.resource_title}>{resource.title}</span>
                  <span
                    className={`${styles.resource_icon} ${
                      openIndex === index ? styles.resource_icon_open : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`${styles.resource_content_wrapper} ${
                    openIndex === index ? styles.resource_content_open : ""
                  }`}
                >
                  <div className={styles.resource_content}>
                    <p className={styles.resource_text}>{resource.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

