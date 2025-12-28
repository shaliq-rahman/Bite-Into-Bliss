import React, { useEffect, useState } from "react";
import Link from "next/link";
 import footer from "@/styles/footer.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
// import parse from "html-react-parser";
 // fancy-box---------import--

const Footer = (props) => {
 
  //---------Setting language ------ end

  return (
    <>
  <footer  className={footer.footer}>
    <div className="container">
       <div className={footer.footer_inner}>
       <div className={footer.footer_logo_first}> 
                     <Image src="/images/logo1.svg" alt="logo" width={450} height={110} />
       </div>
       <div className={footer.footer_logo_second}>  
       <Image src="/images/logo2.svg" alt="logo" width={329} height={106} />
       <Link href="mailto:inquiry@torontocupcake.com">inquiry@torontocupcake.com</Link>
       </div>

       <div className={footer.footer_logo_third}>  
       <Image src="/images/logo3.png" alt="logo" width={262} height={155} />
       </div>
       </div>
    </div>
    
  </footer>
    </>
  );
};

export default Footer;
