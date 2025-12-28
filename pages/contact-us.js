import React, { useState, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "@/styles/contact-us/contact-us.module.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Contact Us - Toronto Cupcake | Phone, Email & Hours | Order Cupcakes</title>
        <meta name="title" content="Contact Us - Toronto Cupcake | Phone, Email & Hours" />
        <meta name="description" content="Contact Toronto Cupcake for orders, inquiries, and custom cupcake requests. Call us at +1-877-334-9468 (North America) or +001-647-478-9464 (International). Open Monday-Saturday 7am-10pm, Sunday 7am-10pm." />
        <meta name="keywords" content="contact toronto cupcake, toronto cupcake phone number, cupcake order toronto, custom cupcake order, toronto cupcake hours, GTA cupcake delivery, toronto bakery contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.torontocupcake.com/contact-us" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.torontocupcake.com/contact-us" />
        <meta property="og:title" content="Contact Us - Toronto Cupcake | Phone, Email & Hours" />
        <meta property="og:description" content="Contact Toronto Cupcake for orders, inquiries, and custom cupcake requests. Call us at +1-877-334-9468. Open Monday-Saturday 7am-10pm." />
        <meta property="og:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Toronto Cupcake" />
        <meta property="og:locale" content="en_CA" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://www.torontocupcake.com/contact-us" />
        <meta name="twitter:title" content="Contact Us - Toronto Cupcake | Phone, Email & Hours" />
        <meta name="twitter:description" content="Contact Toronto Cupcake for orders, inquiries, and custom cupcake requests. Call us at +1-877-334-9468." />
        <meta name="twitter:image" content="https://www.torontocupcake.com/images/banner-img.jpg" />
        
        {/* Contact Information */}
        <meta name="contact" content="+1-877-334-9468" />
        <meta name="format-detection" content="telephone=yes" />
        
        {/* Structured Data - Contact Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact Us - Toronto Cupcake",
              "description": "Contact Toronto Cupcake for orders, inquiries, and custom cupcake requests.",
              "url": "https://www.torontocupcake.com/contact-us",
              "mainEntity": {
                "@type": "Bakery",
                "name": "Toronto Cupcake",
                "telephone": [
                  "+1-877-334-9468",
                  "+001-647-478-9464",
                  "647-478-9464"
                ],
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

      <div className={styles.contact_page}>
        <div className="container">
          <div className={styles.contact_content}>
            <div className={styles.contact_left} {...aos(100)}>
              <h1 className={styles.contact_title}>Contact us</h1>
              
              <div className={styles.contact_info}>
                <div className={styles.phone_numbers}>
                  <p className={styles.phone_item}>
                    <span className={styles.phone_label}>North America:</span>{" "}
                    <a href="tel:+1-877-334-9468" className={styles.phone_link}>
                      +1-877-334-9468
                    </a>
                  </p>
                  <p className={styles.phone_item}>
                    <span className={styles.phone_label}>Outside North America:</span>{" "}
                    <a href="tel:+001-647-478-9464" className={styles.phone_link}>
                      +001-647-478-9464
                    </a>
                  </p>
                  <p className={styles.phone_item}>
                    <span className={styles.phone_label}>Local Toronto and GTA:</span>{" "}
                    <a href="tel:647-478-9464" className={styles.phone_link}>
                      647-478-9464
                    </a>
                  </p>
                </div>

                <div className={styles.operating_hours}>
                  <p className={styles.hours_item}>
                    Monday - Saturday: 7am - 10pm
                  </p>
                  <p className={styles.hours_item}>
                    Sunday: 7am - 10pm (no pick-ups, deliveries for 2 dozen or more)
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.contact_right} {...aos(200)}>
              <form className={styles.contact_form} onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="ENTER EMAIL"
                  className={styles.form_input}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                
                <textarea
                  name="subject"
                  placeholder="SUBJECT"
                  className={styles.form_textarea}
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                ></textarea>
                
                <button type="submit" className={styles.signup_btn}>
                  SIGN UP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

