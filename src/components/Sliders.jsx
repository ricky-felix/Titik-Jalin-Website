"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

const useRelume = () => {
	const { scrollYProgress } = useScroll();

	const style = (index) => {
		const totalItems = 4;
		const sectionSize = 0.18;
		const start = index * sectionSize;

		// Last item should run until the very bottom
		const end = index === totalItems - 1 ? 1 : start + sectionSize;

		const inputRange = [start, start + 0.15, end - 0.15, end];

		const outputOpacity =
			index === totalItems - 1
				? [0, 1, 1, 1] // stays visible to the end
				: [0, 1, 1, 0]; // fades out for others

		return {
			opacity: useTransform(scrollYProgress, inputRange, outputOpacity),
			y: useTransform(scrollYProgress, inputRange, [40, 0, 0, -40]),
		};
	};
	return { style };
};

export function Sliders() {
	const relume = useRelume();

	return (
		<section className="relative bg-gradient-to-b from-transparent via-neutral-50/30 to-primary-50/20">
			<div className="relative h-[3000vh]">
				{/* Sticky container */}
				<div className="sticky top-0 flex h-screen items-center justify-center">
					<div className="relative text-center max-w-6xl mx-auto px-8">
						{/* Header */}
						<div className="mb-12">
							<p className="text-lg md:text-xl font-semibold text-neutral-700 tracking-wide uppercase">
								Who do we work for?
							</p>
						</div>

						{/* Animated text */}
						<div className="relative min-h-[8rem]">
							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold whitespace-nowrap"
								style={relume.style(0)}
							>
								<span className="block text-secondary-500">Business</span>
								<span className="block text-neutral-800">
									Digital Transformation
								</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold whitespace-nowrap"
								style={relume.style(1)}
							>
								<span className="text-primary-500">Startup</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold whitespace-nowrap"
								style={relume.style(2)}
							>
								<span className="block bg-gradient-to-r from-accent-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
									Company or Agency
								</span>
								<span className="block text-neutral-800">Re-Branding</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 text-5xl md:text-7xl font-bold whitespace-nowrap"
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
