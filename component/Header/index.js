"use client";
import { useEffect, useRef, useState } from "react";

import style from "./Header.module.scss";
import NavLinks from "./NavLinks";
import comon from "@/styles/comon.module.scss";
import Link from "next/link";
import Image from "next/image";
 import { useRouter } from "next/router";

const MainHeader = () => {
	const [scrolled, setScrolled] = useState(false);
	const inputRef = useRef(null);
	const route = useRouter();

	const inputFieldRef = useRef(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const halfPageHeight = window.innerHeight * 0.2;

			if (scrollPosition > halfPageHeight) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const [inputShow, setInputShow] = useState(false);

	const InputShowHandler = () => {
		setInputShow(!inputShow);
	};
	useEffect(() => {
		if (inputShow && inputFieldRef.current) {
			// Delay focus to wait for CSS transition or visibility to apply
			const timeout = setTimeout(() => {
				inputFieldRef.current.focus();
			}, 50); // Adjust delay if needed

			return () => clearTimeout(timeout);
		}
	}, [inputShow]);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (inputRef.current && !inputRef.current.contains(event.target)) {
				setInputShow(false);
			}
		};

		document.addEventListener("pointerdown", handleClickOutside);
		return () => {
			document.removeEventListener("pointerdown", handleClickOutside);
		};
	}, []);

	const { locale } = useRouter();

	const switchLocale = locale === "en" ? "ar" : "en";
	const { asPath } = useRouter();

	const [pageScrolled, setPageScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setPageScrolled(window.scrollY > 0);
		};

		// Run once on mount in case page is already scrolled
		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`${style.MainHeader} ${scrolled ? style.Scrolled : ""} `}
		>
			  

			<div className="container">
				<div className={style.headerInner}>
				
					<div className={`${style.navLinks} navLinks`}>
						<NavLinks />
					</div>
					
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
