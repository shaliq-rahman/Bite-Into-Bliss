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
        <title>Resources - Toronto Cupcake</title>
        <meta name="description" content="Resources for weddings, engagements, birthdays and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

