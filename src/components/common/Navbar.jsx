"use client";

import { Button } from "@relume_io/relume-ui";
import { useState, useEffect } from "react";

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
	const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

	// Close mobile menu on Escape key
	useEffect(() => {
		const handleEscape = (e) => {
			if (e.key === "Escape" && isMobileMenuOpen) {
				setIsMobileMenuOpen(false);
			}
		};
		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [isMobileMenuOpen]);

	return {
		isMobileMenuOpen,
		toggleMobileMenu,
	};
};

export function Navbar() {
	const { isMobileMenuOpen, toggleMobileMenu } = useRelume();

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
						src="./Titik-Jalin-Logo-no-bg.webp"
						width="80px"
						alt="Titik Jalin logo"
						className="max-w-full h-auto"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="hidden lg:flex items-center space-x-4">
					<button
						onClick={() => scrollToSection("services")}
						className="px-3 py-1 text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to Services section"
					>
						Services
					</button>
					<button
						onClick={() => scrollToSection("about-us")}
						className="px-3 py-1 text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to About Us section"
					>
						About Us
					</button>
					<button
						onClick={() => scrollToSection("process")}
						className="px-3 py-1 text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to Our Process section"
					>
						Our Process
					</button>
					<button
						onClick={() => scrollToSection("our-work")}
						className="px-3 py-1 text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to Our Work section"
					>
						Our Work
					</button>
				</nav>

				{/* Desktop Contact Button */}
				<div className="hidden lg:block">
					<Button
						className="px-4 py-1.5 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 font-medium cursor-pointer text-sm"
						title="Contact Us"
						size="sm"
						onClick={() => scrollToSection("contact-us")}
						aria-label="Navigate to Contact Us section"
					>
						Contact Us
					</Button>
				</div>

				{/* Mobile Hamburger Menu */}
				<button
					className="flex lg:hidden size-10 flex-col items-center justify-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
					onClick={toggleMobileMenu}
					aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}
				>
					<span
						className={`my-[2px] h-0.5 w-5 bg-white transition-all duration-300 ${
							isMobileMenuOpen ? "translate-y-[6px] rotate-[-45deg]" : ""
						}`}
					/>
					<span
						className={`my-[2px] h-0.5 w-5 bg-white transition-all duration-300 ${
							isMobileMenuOpen ? "w-0 opacity-0" : ""
						}`}
					/>
					<span
						className={`my-[2px] h-0.5 w-5 bg-white transition-all duration-300 ${
							isMobileMenuOpen ? "-translate-y-[6px] rotate-[45deg]" : ""
						}`}
					/>
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`lg:hidden overflow-hidden transition-all duration-400 ${
					isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<nav className="px-4 pb-3 space-y-1">
					<button
						onClick={() => {
							scrollToSection("services");
							toggleMobileMenu();
						}}
						className="block w-full py-2.5 text-left text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to Services section"
					>
						Services
					</button>
					<button
						onClick={() => {
							scrollToSection("about-us");
							toggleMobileMenu();
						}}
						className="block w-full py-2.5 text-left text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to About Us section"
					>
						About Us
					</button>
					<button
						onClick={() => {
							scrollToSection("process");
							toggleMobileMenu();
						}}
						className="block w-full py-2.5 text-left text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to Our Process section"
					>
						Our Process
					</button>
					<button
						onClick={() => {
							scrollToSection("our-work");
							toggleMobileMenu();
						}}
						className="block w-full py-2.5 text-left text-sm hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded transition-colors duration-200 cursor-pointer"
						aria-label="Navigate to Our Work section"
					>
						Our Work
					</button>
					<div className="pt-1">
						<Button
							className="w-full px-4 py-2 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 font-medium cursor-pointer text-sm"
							title="Contact Us"
							onClick={() => {
								scrollToSection("contact-us");
								toggleMobileMenu();
							}}
							aria-label="Navigate to Contact Us section"
						>
							Contact Us
						</Button>
					</div>
				</nav>
			</div>
		</section>
	);
}

export default Navbar;
