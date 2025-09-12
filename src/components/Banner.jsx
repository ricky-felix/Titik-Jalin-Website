"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

// Simple media query hook
const useMediaQuery = (query) => {
	const [matches, setMatches] = React.useState(false);

	React.useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => setMatches(media.matches);
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [matches, query]);

	return matches;
};

export const Banner = (props) => {
	const { headings } = {
		...BannerDefaults,
		...props,
	};

	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"], // smoother for mobile
	});

	// Detect if screen is small
	const isMobile = useMediaQuery("(max-width: 768px)");

	// Responsive transforms
	const xPartOne = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? ["-10%", "40%"] : ["-20%", "80%"]
	);

	const xPartTwo = useTransform(
		scrollYProgress,
		[0, 1],
		isMobile ? ["10%", "-40%"] : ["20%", "-80%"]
	);

	return (
		<section
			id="relume"
			ref={sectionRef}
			className="overflow-hidden px-[5%] py-24 sm:py-32 md:py-48 lg:py-64 min-h-[150vh] sm:min-h-screen container"
		>
			<div className="flex flex-col whitespace-nowrap">
				{headings.map((heading, index) => (
					<motion.h1
						key={index}
						style={index % 2 === 0 ? { x: xPartOne } : { x: xPartTwo }}
						className={clsx(
							"text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight xl:text-[6rem]",
							{
								"self-end": index % 2 !== 0,
							}
						)}
					>
						{heading}
					</motion.h1>
				))}
			</div>
		</section>
	);
};

export default Banner;

export const BannerDefaults = {
	headings: [
		"Our Design Process Our Design Process Our Design Process",
		"Are as Follow Are as Follow",
	],
};
