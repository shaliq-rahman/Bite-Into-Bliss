import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" id="font_size" >
      <Head>
        {/* Character Set */}
        <meta charSet="utf-8" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Passion+One:wght@400;700;900&display=swap" rel="stylesheet" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#ffffff" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Author & Copyright */}
        <meta name="author" content="Toronto Cupcake" />
        <meta name="copyright" content="Toronto Cupcake" />
        
        {/* Geographic Targeting */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        
        {/* Mobile Web App Capable */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
