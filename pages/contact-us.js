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
        <title>Contact Us - Toronto Cupcake</title>
        <meta name="description" content="Contact Toronto Cupcake - Get in touch with us for orders, inquiries, and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

