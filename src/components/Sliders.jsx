"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

// Media query hook
const useMediaQuery = (query) => {
	const [matches, setMatches] = React.useState(false);

	React.useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) setMatches(media.matches);
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [matches, query]);

	return matches;
};

const useRelume = () => {
	const { scrollYProgress } = useScroll();
	const isMobile = useMediaQuery("(max-width: 768px)");

	const style = (index) => {
		const totalItems = 4;

		// Wider scroll timing on mobile so text doesn't skip too fast
		const sectionSize = isMobile ? 0.25 : 0.18;
		const start = index * sectionSize;
		const end = index === totalItems - 1 ? 1 : start + sectionSize;

		const inputRange = [start, start + 0.15, end - 0.15, end];

		const outputOpacity =
			index === totalItems - 1 ? [0, 1, 1, 1] : [0, 1, 1, 0];

		// Softer y movement on mobile
		const yValues = isMobile ? [20, 0, 0, -20] : [40, 0, 0, -40];

		return {
			opacity: useTransform(scrollYProgress, inputRange, outputOpacity),
			y: useTransform(scrollYProgress, inputRange, yValues),
		};
	};
	return { style };
};

export function Sliders() {
	const relume = useRelume();

	return (
		<section className="relative bg-gradient-to-b from-transparent via-neutral-50/30 to-primary-50/20">
			{/* Longer scroll container */}
			<div className="relative h-[2500vh] md:h-[3000vh]">
				{/* Sticky viewport */}
				<div className="sticky top-0 flex h-screen items-center justify-center">
					<div className="relative text-center max-w-6xl mx-auto px-4 sm:px-8">
						{/* Header */}
						<div className="mb-8 md:mb-12">
							<p className="text-base sm:text-lg md:text-xl font-semibold text-neutral-700 tracking-wide uppercase">
								Who do we work for?
							</p>
						</div>

						{/* Animated text */}
						<div className="relative min-h-[6rem] sm:min-h-[8rem]">
							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-5 md:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={relume.style(0)}
							>
								<span className="block text-secondary-500">Business</span>
								<span className="block text-neutral-800">
									Digital Transformation
								</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-5 md:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={relume.style(1)}
							>
								<span className="text-primary-500">Startup</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-5 md:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={relume.style(2)}
							>
								<span className="block bg-gradient-to-r from-accent-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
									Company or Agency
								</span>
								<span className="block text-neutral-800">Re-Branding</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-5 md:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={relume.style(3)}
							>
								<span className="block text-neutral-800">
									Micro, Small, or Medium
								</span>
								<span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
									Enterprises
								</span>
							</motion.h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sliders;
