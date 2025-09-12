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
			className="z-[999] flex w-full items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
		>
			<div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
				<div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
					<Link to="/">
						<img
							src="./Titik-Jalin-Logo-no-bg.png"
							width="120px"
							alt="Logo image"
						/>
					</Link>

					<div className="flex items-center gap-4 lg:hidden">
						<div>
							<Button
								className="w-full px-4 py-1 cursor-pointer"
								title="Contact Us"
								onClick={() => scrollToSection("contact-us")}
							>
								Contact Us
							</Button>
						</div>
						<button
							className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden cursor-pointer"
							onClick={useActive.toggleMobileMenu}
						>
							<motion.span
								className="my-[3px] h-0.5 w-6 bg-black"
								animate={useActive.animateMobileMenuButtonSpan}
								variants={{
									open: { translateY: 8, transition: { delay: 0.1 } },
									rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
									closed: {
										translateY: 0,
										rotate: 0,
										transition: { duration: 0.2 },
									},
								}}
							/>
							<motion.span
								className="my-[3px] h-0.5 w-6 bg-black"
								animate={useActive.animateMobileMenu}
								variants={{
									open: { width: 0, transition: { duration: 0.1 } },
									closed: {
										width: "1.5rem",
										transition: { delay: 0.3, duration: 0.2 },
									},
								}}
							/>
							<motion.span
								className="my-[3px] h-0.5 w-6 bg-black"
								animate={useActive.animateMobileMenuButtonSpan}
								variants={{
									open: { translateY: -8, transition: { delay: 0.1 } },
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
				</div>
				<motion.div
					variants={{
						open: { height: "var(--height-open, 100dvh)" },
						close: { height: "var(--height-closed, 0)" },
					}}
					animate={useActive.animateMobileMenu}
					initial="close"
					exit="close"
					transition={{ duration: 0.4 }}
					className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
				>
					<div>
						<button
							onClick={() => scrollToSection("about-us")}
							className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
						>
							About Us
						</button>
					</div>
					<div>
						<button
							onClick={() => scrollToSection("process")}
							className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
						>
							Our Process
						</button>
					</div>
					<div>
						<button
							onClick={() => scrollToSection("our-work")}
							className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2 hover:text-primary-600 transition-colors duration-200 cursor-pointer"
						>
							Our Work
						</button>
					</div>
				</motion.div>
				<div className="hidden justify-self-end lg:block ">
					<Button
						className="px-6 py-2 cursor-pointer"
						title="Contact Us"
						size="sm"
						onClick={() => scrollToSection("contact-us")}
					>
						Contact Us
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Navbar;
