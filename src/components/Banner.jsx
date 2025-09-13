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
	const isMobile = useMediaQuery("(max-width: 768px)");

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// Very conservative transforms that stay within viewport
	// Use pixels instead of vw/percentage for better control

	const mobileTransformOne = useTransform(
		scrollYProgress,
		[0.2, 0.8],
		[-50, 50]
	);
	const mobileTransformTwo = useTransform(
		scrollYProgress,
		[0.2, 0.8],
		[50, -50]
	);

	const desktopTransformOne = useTransform(
		scrollYProgress,
		[0.3, 0.7],
		[-100, 100]
	);
	const desktopTransformTwo = useTransform(
		scrollYProgress,
		[0.3, 0.7],
		[100, -100]
	);

	const xPartOne = isMobile ? mobileTransformOne : desktopTransformOne;
	const xPartTwo = isMobile ? mobileTransformTwo : desktopTransformTwo;

	return (
		<section
			id="relume"
			ref={sectionRef}
			className="w-full px-[5%] py-24 sm:py-32 md:py-48 lg:py-64"
			style={{
				maxWidth: "100vw",
				overflow: "hidden",
			}}
		>
			<div className="w-full">
				{headings.map((heading, index) => (
					<div
						key={index}
						className={clsx("w-full relative", {
							"text-right": index % 2 !== 0,
							"text-left": index % 2 === 0,
						})}
					>
						<motion.h1
							style={{
								x: index % 2 === 0 ? xPartOne : xPartTwo,
							}}
							className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight whitespace-nowrap inline-block"
						>
							{heading}
						</motion.h1>
					</div>
				))}
			</div>
		</section>
	);
};

export default Banner;

export const BannerDefaults = {
	headings: [
		"Our Design Process Our Design Process Our Design Process",
		"Are as Follow Are as Follow Are as Follow",
	],
};
