"use client";

import React from "react";
import { BiLogoInstagram, BiLogoLinkedinSquare } from "react-icons/bi";

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

export function Footer() {
	return (
		<footer id="relume" className="px-[5%] py-12 md:py-18 lg:py-20">
			<div className="container mx-auto w-full max-w-7xl">
				<div className="grid grid-cols-1 items-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:gap-y-4">
					<Link to="/" className="lg:justify-self-start">
						<img
							src="./Titik-Jalin-Logo-no-bg.png"
							width="120px"
							alt="Logo image"
							className="inline-block"
						/>
					</Link>
					<ul className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("about-us")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
							>
								About Us
							</button>
						</li>
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("process")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
							>
								Our Process
							</button>
						</li>
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("our-work")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
							>
								Our Work
							</button>
						</li>
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("contact-us")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
							>
								Contact Us
							</button>
						</li>
					</ul>
					<div className="flex items-center justify-center gap-x-3 lg:justify-self-end">
						<a href="www.instagram.com/titikjalin">
							<BiLogoInstagram className="size-6" />
						</a>
						<a href="https://www.linkedin.com/company/108687372/">
							<BiLogoLinkedinSquare className="size-6" />
						</a>
					</div>
				</div>
				<div className="h-px w-full bg-black" />
				<div className="flex items-center justify-center pt-6 pb-4 text-sm md:pt-8 md:pb-0">
					<p className="text-center">
						Titik Jalin, a UI/UX Design Studio. <br />
						Operating remotely in Indonesia.
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
