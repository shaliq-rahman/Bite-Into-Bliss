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
        <title>Our Story - Toronto Cupcake</title>
        <meta name="description" content="Learn about Toronto Cupcake - Founded in 2010, we are a leading destination for gourmet branded cupcakes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

