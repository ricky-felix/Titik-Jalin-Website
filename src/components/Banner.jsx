"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

export const Banner = (props) => {
	const { headings } = {
		...BannerDefaults,
		...props,
	};

	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const xPartOne = useTransform(scrollYProgress, [0, 1], ["-20%", "80%"]);
	const xPartTwo = useTransform(scrollYProgress, [0, 1], ["20%", "-80%"]);

	return (
		<section
			id="relume"
			ref={sectionRef}
			className="overflow-hidden px-[5%] py-32 md:py-48 lg:py-64 min-h-screen container"
		>
			<div className="flex flex-col whitespace-nowrap">
				{headings.map((heading, index) => (
					<motion.h1
						key={index}
						style={index % 2 === 0 ? { x: xPartOne } : { x: xPartTwo }}
						className={clsx(
							"text-6xl font-bold md:text-7xl lg:text-8xl xl:text-9xl leading-tight sm:text-4xl xl:text-[6rem]",
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
