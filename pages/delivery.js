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
        <title>Delivery - Bite into Bliss</title>
        <meta name="description" content="Delivery information for Bite into Bliss" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

