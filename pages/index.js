import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";


import AOS from "aos";
import Link from "next/link";
import "aos/dist/aos.css";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
	// ==========AOS SECTION==========

  const [quantities, setQuantities] = useState({
    delight: 1,
    indulge: 1,
    sweet: 1,
  });

  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleQuantityChange = (product, change) => {
    setQuantities((prev) => {
      const newQuantity = prev[product] + change;
      return {
        ...prev,
        [product]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const handleAddToCart = (product, price) => {
    // Add to cart logic here
    console.log(`Added ${quantities[product]}x ${product} to cart for $${price}`);
  };

  const products = [
    {
      id: 'delight',
      name: 'DELIGHT',
      price: 4,
      image: '/images/product1.png',
    },
    {
      id: 'indulge',
      name: 'INDULGE',
      price: 2,
      image: '/images/product2.png',
    },
    {
      id: 'sweet',
      name: 'SWEET',
      price: 2.99,
      image: '/images/product3.png',
    },
  ];



  const aos = (delay = 100) => ({
    "data-aos": "fade-up",
    "data-aos-duration": "1000",
    "data-aos-delay": delay.toString(),
  });

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Bite into Bliss | Toronto Cupcake - Gourmet Cupcakes Delivered Fresh Daily</title>
        <meta name="title" content="Bite into Bliss | Toronto Cupcake - Gourmet Cupcakes Delivered Fresh Daily" />
        <meta name="description" content="Experience the perfect harmony of soft, fluffy cake and creamy, handcrafted frosting. Toronto Cupcake offers gourmet cupcakes delivered fresh daily across Toronto & GTA. Shop DELIGHT, INDULGE, and SWEET flavors online." />
        <meta name="keywords" content="toronto cupcake, gourmet cupcakes, cupcake delivery toronto, fresh cupcakes, custom cupcakes, birthday cupcakes, corporate cupcakes, GTA delivery, toronto bakery, handcrafted cupcakes, DELIGHT cupcake, INDULGE cupcake, SWEET cupcake" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.torontocupcake.com/" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.torontocupcake.com/" />
        <meta property="og:title" content="Bite into Bliss | Toronto Cupcake - Gourmet Cupcakes Delivered Fresh Daily" />
        <meta property="og:description" content="Experience the perfect harmony of soft, fluffy cake and creamy, handcrafted frosting. Toronto Cupcake offers gourmet cupcakes delivered fresh daily across Toronto & GTA." />
        <meta property="og:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Toronto Cupcake" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.torontocupcake.com/" />
        <meta name="twitter:title" content="Bite into Bliss | Toronto Cupcake - Gourmet Cupcakes Delivered Fresh Daily" />
        <meta name="twitter:description" content="Experience the perfect harmony of soft, fluffy cake and creamy, handcrafted frosting. Toronto Cupcake offers gourmet cupcakes delivered fresh daily across Toronto & GTA." />
        <meta name="twitter:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        
        {/* Business Information */}
        <meta name="contact" content="+1-877-334-9468" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Toronto Cupcake",
              "alternateName": "Bite into Bliss",
              "description": "Toronto's leading destination for gourmet branded cupcakes. Handcrafted cupcakes made fresh daily with the finest ingredients.",
              "url": "https://www.torontocupcake.com",
              "logo": "https://www.torontocupcake.com/images/logo_new1.svg",
              "image": "https://www.torontocupcake.com/images/banner-img.jpg",
              "telephone": "+1-877-334-9468",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Toronto",
                "addressRegion": "ON",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "43.6532",
                "longitude": "-79.3832"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "07:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "07:00",
                  "closes": "22:00"
                }
              ],
              "servesCuisine": "Bakery",
              "areaServed": {
                "@type": "City",
                "name": "Toronto"
              }
            })
          }}
        />
        
        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Toronto Cupcake",
              "alternateName": "Bite into Bliss",
              "url": "https://www.torontocupcake.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.torontocupcake.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data - Product Collection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "Product",
                  "position": 1,
                  "name": "DELIGHT Cupcake",
                  "description": "Premium gourmet cupcake with handcrafted frosting",
                  "image": "https://www.torontocupcake.com/images/product1.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "4.00",
                    "priceCurrency": "CAD",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "position": 2,
                  "name": "INDULGE Cupcake",
                  "description": "Premium gourmet cupcake with handcrafted frosting",
                  "image": "https://www.torontocupcake.com/images/product2.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "2.00",
                    "priceCurrency": "CAD",
                    "availability": "https://schema.org/InStock"
                  }
                },
                {
                  "@type": "Product",
                  "position": 3,
                  "name": "SWEET Cupcake",
                  "description": "Premium gourmet cupcake with handcrafted frosting",
                  "image": "https://www.torontocupcake.com/images/product3.png",
                  "offers": {
                    "@type": "Offer",
                    "price": "2.99",
                    "priceCurrency": "CAD",
                    "availability": "https://schema.org/InStock"
                  }
                }
              ]
            })
          }}
        />
      </Head>

		<div className={styles.section_home_banner}>
			<div className="container">
      <div className={styles.section_home_banner_inner}>
        <div className={styles.section_home_banner_inner_left}>
          <h1 {...aos(100)}>Bite </h1> <h1 {...aos(200)}><span>into </span> Bliss</h1>
          <p {...aos(300)}>Experience the perfect harmony of soft, fluffy cake and creamy, handcrafted frosting.
          Each cupcake is a little masterpiece, made to make your day sweeter.</p>
          <Link href="#shop" className={styles.shop_btn} {...aos(400)}>
           SHOP ALL PRODUCTS
          </Link>
        </div>
        <div className={styles.section_home_banner_inner_right} {...aos(500)}>
          <Image src="/images/banner-img.jpg" alt="banner" width={700} height={550} />
        </div>
        </div>    
			</div>
		</div>

    <div className={styles.section_home_marquee}>
      <div className={styles.marquee_content}>
        <div className={styles.marquee_item}>
          <Image src="/images/star.svg" alt="star" width={45} height={45} />
          <span>Flavors as Unique as You Are</span>
        </div>
        <div className={styles.marquee_item}>
          <Image src="/images/star.svg" alt="star" width={45} height={45} />
          <span>Classic Recipes, Modern Twists</span>
        </div>
        <div className={styles.marquee_item}>
          <Image src="/images/star.svg" alt="star" width={45} height={45} />
          <span>Every Frosting a Masterpiece, Every Bite a Memory</span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className={styles.marquee_item}>
          <Image src="/images/star.svg" alt="star" width={45} height={45} />
          <span>Flavors as Unique as You Are</span>
        </div>
        <div className={styles.marquee_item}>
          <Image src="/images/star.svg" alt="star" width={45} height={45} />
          <span>Classic Recipes, Modern Twists</span>
        </div>
        <div className={styles.marquee_item}>
          <Image src="/images/star.svg" alt="star" width={45} height={45} />
          <span>Every Frosting a Masterpiece, Every Bite a Memory</span>
        </div>
      </div>
    </div>

    <section className={styles.section_shop} id="shop">
      <div className="container">
        <ul className={styles.products_list}>
          {products.map((product, index) => (
            <li 
              key={product.id} 
              className={styles.product_card}
              {...aos(100 + (index * 100))}
            >
              <h2 className={styles.product_title}>{product.name}</h2>
              <div className={styles.product_image}>
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={300} 
                  height={300}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.quantity_selector}>
                <button 
                  className={styles.quantity_btn}
                  onClick={() => handleQuantityChange(product.id, -1)}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className={styles.quantity_value}>{quantities[product.id]}</span>
                <button 
                  className={styles.quantity_btn}
                  onClick={() => handleQuantityChange(product.id, 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button 
                className={styles.add_to_cart_btn}
                onClick={() => handleAddToCart(product.id, product.price)}
              >
                ADD TO CART - ${product.price}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
      
    </>
  );
}
