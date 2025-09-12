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
			<div className="container">
				<div className="grid grid-cols-1 items-center justify-center justify-items-center gap-x-[4vw] gap-y-12 pb-12 md:pb-18 lg:grid-cols-[0.25fr_1fr_0.25fr] lg:justify-between lg:gap-y-4 lg:pb-20">
					<Link to="/">
						<img
							src="./Titik-Jalin-Logo-no-bg.png"
							width="120px"
							alt="Logo image"
							className="inline-block lg:justify-self-start"
						/>
					</Link>
					<ul className="grid grid-flow-row grid-cols-1 items-start justify-center justify-items-center gap-6 md:grid-flow-col md:grid-cols-[max-content] md:justify-center md:justify-items-start">
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
					<div className="flex items-start justify-start justify-items-center gap-x-3 lg:justify-self-end">
						<a href="www.instagram.com/titikjalin">
							<BiLogoInstagram className="size-6" />
						</a>
						<a href="https://www.linkedin.com/company/108687372/">
							<BiLogoLinkedinSquare className="size-6" />
						</a>
					</div>
				</div>
				<div className="h-px w-full bg-black" />
				<div className="flex flex-col-reverse items-center justify-center justify-items-center pt-6 pb-4 text-sm md:flex-row md:gap-x-6 md:pt-8 md:pb-0">
					<ul className="grid grid-flow-row grid-cols-[max-content] items-center justify-center justify-items-center gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0">
						<p className="mt-8 md:mt-0 text-center">
							Titik Jalin, a UI/UX Design Studio. <br />
							Operating remotely in Indonesia.
						</p>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
