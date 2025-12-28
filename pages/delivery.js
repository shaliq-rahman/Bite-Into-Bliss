import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import styles from "@/styles/delivery/delivery.module.css";

export default function Delivery() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      duration: 1000,
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
        <title>Delivery - Toronto Cupcake | Fast Delivery Across Toronto & GTA</title>
        <meta name="title" content="Delivery - Toronto Cupcake | Fast Delivery Across Toronto & GTA" />
        <meta name="description" content="Toronto Cupcake offers swift and reliable cupcake delivery throughout Toronto and the Greater Toronto Area (GTA). Fast delivery, custom designs, and wide coverage including Hamilton, Mississauga, Vaughan, and Scarborough. Order fresh cupcakes delivered to your door." />
        <meta name="keywords" content="cupcake delivery toronto, GTA cupcake delivery, toronto cupcake delivery, fast cupcake delivery, custom cupcake delivery, cupcake delivery mississauga, cupcake delivery hamilton, cupcake delivery scarborough, cupcake delivery vaughan, corporate cupcake delivery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.torontocupcake.com/delivery" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.torontocupcake.com/delivery" />
        <meta property="og:title" content="Delivery - Toronto Cupcake | Fast Delivery Across Toronto & GTA" />
        <meta property="og:description" content="Toronto Cupcake offers swift and reliable cupcake delivery throughout Toronto and the Greater Toronto Area (GTA). Fast delivery, custom designs, and wide coverage." />
        <meta property="og:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Toronto Cupcake" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.torontocupcake.com/delivery" />
        <meta name="twitter:title" content="Delivery - Toronto Cupcake | Fast Delivery Across Toronto & GTA" />
        <meta name="twitter:description" content="Toronto Cupcake offers swift and reliable cupcake delivery throughout Toronto and the Greater Toronto Area (GTA)." />
        <meta name="twitter:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        
        {/* Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Cupcake Delivery",
              "provider": {
                "@type": "Bakery",
                "name": "Toronto Cupcake",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Toronto",
                  "addressRegion": "ON",
                  "addressCountry": "CA"
                }
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Toronto"
                },
                {
                  "@type": "City",
                  "name": "Hamilton"
                },
                {
                  "@type": "City",
                  "name": "Mississauga"
                },
                {
                  "@type": "City",
                  "name": "Vaughan"
                },
                {
                  "@type": "City",
                  "name": "Scarborough"
                }
              ],
              "description": "Swift and reliable cupcake delivery service throughout Toronto and the Greater Toronto Area (GTA). Fast delivery, custom designs, and wide coverage.",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cupcake Delivery Service",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Fast Cupcake Delivery"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Custom Cupcake Designs"
                    }
                  }
                ]
              }
            })
          }}
        />
      </Head>

      <div className={styles.delivery_page}>
        <div className="container">
          <section className={styles.delivery_hero}>
            <h1 className={styles.hero_title} {...aos(100)}>
              Delivery across Toronto & GTA
            </h1>
            <p className={styles.hero_subtitle} {...aos(200)}>
              Toronto Cupcake offers a swift and reliable cupcake delivery service throughout Toronto and the Greater Toronto Area (GTA). Whether you're planning a corporate event, celebrating a special occasion, or simply sending a sweet surprise, we've got you covered!
            </p>
          </section>

          <section className={styles.why_choose_section} {...aos(300)}>
            <h2 className={styles.why_choose_title}>
              Why Choose Toronto Cupcake Delivery?
            </h2>
            <ul className={styles.benefits_list}>
              <li className={styles.benefit_item}>
                <strong>Fast Delivery:</strong> Need cupcakes ASAP? No problem! We offer fast delivery for most areas within Toronto and the GTA. Just place your order before our cut-off time to ensure your treats arrive fresh and on time the following day.
              </li>
              <li className={styles.benefit_item}>
                <strong>Custom Designs:</strong> Our cupcakes are not only delicious but also visually stunning. Customize your order with corporate logos, themed designs, or even personalized messages.
              </li>
              <li className={styles.benefit_item}>
                <strong>Wide Coverage:</strong> From downtown Toronto to Hamilton, Mississauga, Vaughan, Scarborough, and beyond, our delivery service spans approximately 80km around the city.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

