import React from "react";
import Footer from "@/component/Footer";
import { useRouter } from "next/router";
import { Bagel_Fat_One, Open_Sans, Passion_One } from "next/font/google";
import comon from "@/styles/comon.module.scss";
import MainHeader from "./Header";
// -------- Font Implementation Start --------

const bagelFatOne = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bagel-fat-one",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const passionOne = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-passion-one",
});

// -------- Font Implementation End --------

const Layout = (props) => {
  const router = useRouter();
  const { pathname, asPath } = router;
  const targetLocale = router.locale === "en" ? "ar" : "en";


  return (
    <React.Fragment>
      <main
        id="main-element"
        className={`${comon.main} ${bagelFatOne.variable} ${openSans.variable} ${passionOne.variable}`}
      >
        <MainHeader />
        {props.children}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;
