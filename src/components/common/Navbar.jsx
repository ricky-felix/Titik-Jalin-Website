"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Link } from "react-router-dom";

// Smooth scroll function
const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	}
};

const useRelume = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const isMobile = useMediaQuery("(max-width: 991px)");
	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
	const openOnMobileDropdownMenu = () => {
		setIsDropdownOpen((prev) => !prev);
	};
	const openOnDesktopDropdownMenu = () => {
		!isMobile && setIsDropdownOpen(true);
	};
	const closeOnDesktopDropdownMenu = () => {
		!isMobile && setIsDropdownOpen(false);
	};
	const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
	const animateMobileMenuButtonSpan = isMobileMenuOpen
		? ["open", "rotatePhase"]
		: "closed";
	const animateDropdownMenu = isDropdownOpen ? "open" : "close";
	const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
	return {
		toggleMobileMenu,
		openOnDesktopDropdownMenu,
		closeOnDesktopDropdownMenu,
		openOnMobileDropdownMenu,
		animateMobileMenu,
		animateMobileMenuButtonSpan,
		animateDropdownMenu,
		animateDropdownMenuIcon,
	};
};

export function Navbar() {
	const useActive = useRelume();
	return (
		<section
			id="relume"
			className="z-[999] w-full border-b border-border-primary"
		>
			{/* Mobile and Desktop Header */}
			<div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6 lg:px-[5%]">
				{/* Logo */}
				<Link to="/" className="flex-shrink-0">
					<img
						src="./Titik-Jalin-Logo-no-bg.png"
						width="80px"
						alt="Logo image"
						className="max-w-full h-auto"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center space-x-4">
					<button
						onClick={() => scrollToSection("about-us")}
						className="px-3 py-1 text-sm hover:text-primary-600 transition-colors duration-200 cursor-pointer"
					>
						About Us
					</button>
					<button
						onClick={() => scrollToSection("process")}
						className="px-3 py-1 text-sm hover:text-primary-600 transition-colors duration-200 cursor-pointer"
					>
						Our Process
					</button>
					<button
						onClick={() => scrollToSection("our-work")}
						className="px-3 py-1 text-sm hover:text-primary-600 transition-colors duration-200 cursor-pointer"
					>
						Our Work
					</button>
				</nav>

				{/* Desktop Contact Button */}
				<div className="hidden lg:block">
					<Button
						className="px-4 py-1.5 transform hover:-translate-y-0.5 font-medium cursor-pointer text-sm"
						title="Contact Us"
						size="sm"
						onClick={() => scrollToSection("contact-us")}
					>
						Contact Us
					</Button>
				</div>

				{/* Mobile Hamburger Menu */}
				<button
					className="flex lg:hidden size-10 flex-col items-center justify-center flex-shrink-0"
					onClick={useActive.toggleMobileMenu}
				>
					<motion.span
						className="my-[2px] h-0.5 w-5 bg-black"
						animate={useActive.animateMobileMenuButtonSpan}
						variants={{
							open: { translateY: 6, transition: { delay: 0.1 } },
							rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
							closed: {
								translateY: 0,
								rotate: 0,
								transition: { duration: 0.2 },
							},
						}}
					/>
					<motion.span
						className="my-[2px] h-0.5 w-5 bg-black"
						animate={useActive.animateMobileMenu}
						variants={{
							open: { width: 0, transition: { duration: 0.1 } },
							closed: {
								width: "1.25rem",
								transition: { delay: 0.3, duration: 0.2 },
							},
						}}
					/>
					<motion.span
						className="my-[2px] h-0.5 w-5 bg-black"
						animate={useActive.animateMobileMenuButtonSpan}
						variants={{
							open: { translateY: -6, transition: { delay: 0.1 } },
							rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
							closed: {
								translateY: 0,
								rotate: 0,
								transition: { duration: 0.2 },
							},
						}}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<motion.div
				variants={{
					open: { height: "auto", opacity: 1 },
					close: { height: 0, opacity: 0 },
				}}
				animate={useActive.animateMobileMenu}
				initial="close"
				exit="close"
				transition={{ duration: 0.4 }}
				className="lg:hidden overflow-hidden"
			>
				<nav className="px-4 pb-3 space-y-1">
					<button
						onClick={() => {
							scrollToSection("about-us");
							useActive.toggleMobileMenu();
						}}
						className="block w-full py-2.5 text-left text-sm hover:text-primary-600 transition-colors duration-200 cursor-pointer"
					>
						About Us
					</button>
					<button
						onClick={() => {
							scrollToSection("process");
							useActive.toggleMobileMenu();
						}}
						className="block w-full py-2.5 text-left text-sm hover:text-primary-600 transition-colors duration-200 cursor-pointer"
					>
						Our Process
					</button>
					<button
						onClick={() => {
							scrollToSection("our-work");
							useActive.toggleMobileMenu();
						}}
						className="block w-full py-2.5 text-left text-sm hover:text-primary-600 transition-colors duration-200 cursor-pointer"
					>
						Our Work
					</button>
					<div className="pt-1">
						<Button
							className="w-full px-4 py-2 transform hover:-translate-y-0.5 font-medium cursor-pointer text-sm"
							title="Contact Us"
							onClick={() => {
								scrollToSection("contact-us");
								useActive.toggleMobileMenu();
							}}
						>
							Contact Us
						</Button>
					</div>
				</nav>
			</motion.div>
		</section>
	);
}

export default Navbar;
