import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Style from "./Header.module.scss";

const NavLinks = () => {
  const [navShow, setNavShow] = useState(false);
  const route = useRouter();

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.classList.remove("show-menu");
        document.documentElement.classList.remove("show-menu");
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove(Style.menu_open);
        }
      } else {
        document.body.classList.add("show-menu");
        document.documentElement.classList.add("show-menu");
        const header = document.querySelector("header");
        if (header) {
          header.classList.add(Style.menu_open);
        }
      }
      return !status;
    });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "SHOP", href: "/" },
    { label: "DELIVERY", href: "/delivery" },
    { label: "OUR STORY", href: "/our-story" },
    { label: "CONTACT US", href: "/contact-us" },
    { label: "RESOURCES", href: "/resources" },
  ];

  const handleLinkClick = () => {
    setNavShow(false);
    document.body.classList.remove("show-menu");
    document.documentElement.classList.remove("show-menu");
    const header = document.querySelector("header");
    if (header) {
      header.classList.remove(Style.menu_open);
    }
  };

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className={`${Style.mobMenuBtn} ${
          scrolled === true && Style.min_mobmenubtn
        } mobMenuBtn`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div
        className={`${Style.main_nav} ${navShow ? Style.showNav : ""} ${
          scrolled === true && Style.min_nav_height
        }`}
      >
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`${route.asPath === item.href ? Style.active : ""}`}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
