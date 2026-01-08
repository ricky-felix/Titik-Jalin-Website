"use client";

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
							src="./Titik-Jalin-Logo-no-bg.webp"
							width="120px"
							alt="Titik Jalin logo"
							className="inline-block"
						/>
					</Link>
					<ul className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8">
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("about-us")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
								aria-label="Navigate to About Us section"
							>
								About Us
							</button>
						</li>
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("process")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
								aria-label="Navigate to Our Process section"
							>
								Our Process
							</button>
						</li>
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("our-work")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
								aria-label="Navigate to Our Work section"
							>
								Our Work
							</button>
						</li>
						<li className="font-semibold">
							<button
								onClick={() => scrollToSection("contact-us")}
								className="hover:text-primary-600 transition-colors duration-200 cursor-pointer"
								aria-label="Navigate to Contact Us section"
							>
								Contact Us
							</button>
						</li>
					</ul>
					<div className="flex items-center justify-center gap-x-3 lg:justify-self-end">
						<a
							href="https://www.instagram.com/titikjalin"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Visit Titik Jalin on Instagram"
						>
							<BiLogoInstagram className="size-6" />
						</a>
						<a
							href="https://www.linkedin.com/company/108687372/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Visit Titik Jalin on LinkedIn"
						>
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
