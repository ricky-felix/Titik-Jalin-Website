"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

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

export function Sliders() {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const containerRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"],
	});

	const totalItems = 4;
	const sectionSize = 1 / totalItems; // 0.25 each
	const fadeBuffer = 0.06;

	const makeStyle = (index) => {
		const start = index * sectionSize;
		const end = Math.min(start + sectionSize, 1);
		const fadeIn = start + fadeBuffer;
		const fadeOut = end - fadeBuffer;
		const inputRange = [start, fadeIn, fadeOut, end];

		const outputOpacity = [0, 1, 1, 0];
		// Last item stays visible
		if (index === totalItems - 1) outputOpacity[3] = 1;

		const yValues = isMobile ? [30, 0, 0, -30] : [40, 0, 0, -40];

		return {
			opacity: useTransform(scrollYProgress, inputRange, outputOpacity),
			y: useTransform(scrollYProgress, inputRange, yValues),
		};
	};

	// "Keep scrolling" indicator fades out only at the very end
	const keepScrollingOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, 0]);

	const style0 = makeStyle(0);
	const style1 = makeStyle(1);
	const style2 = makeStyle(2);
	const style3 = makeStyle(3);

	return (
		<section
			ref={containerRef}
			className="relative bg-linear-to-b from-transparent via-neutral-50/30 to-primary-50/20"
		>
			{/* Scroll container */}
			<div className={isMobile ? "relative h-[800vh]" : "relative h-[600vh]"}>
				{/* Sticky viewport */}
				<div className="sticky top-0 flex min-h-screen items-center justify-center">
					<div className="relative text-center max-w-6xl mx-auto px-4 sm:px-8">
						{/* Header */}
						<div className="mb-6 sm:mb-12">
							<p className="text-base sm:text-lg md:text-xl font-semibold text-neutral-700 tracking-wide uppercase">
								Who do we work for?
							</p>
						</div>

						{/* Animated text */}
						<div className="relative min-h-[6rem] sm:min-h-[8rem]">
							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={style0}
							>
								<span className="block text-secondary-500">Business</span>
								<span className="block text-neutral-800">
									Digital Transformation
								</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={style1}
							>
								<span className="text-primary-500">Startup</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={style2}
							>
								<span className="block bg-gradient-to-r from-accent-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
									Micro or Small
								</span>
								<span className="block text-neutral-800">Enterprises</span>
							</motion.h2>

							<motion.h2
								className="absolute left-1/2 -translate-x-1/2 mb-3 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap"
								style={style3}
							>
								<span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
									Company or Agency
								</span>
								<span className="block text-neutral-800">Re-Branding</span>
							</motion.h2>
						</div>
					</div>

					{/* Keep scrolling indicator */}
					<motion.div
						className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
						style={{ opacity: keepScrollingOpacity }}
					>
						<span className="text-xs sm:text-sm font-medium tracking-widest uppercase">
							Keep Scrolling
						</span>
						<motion.div
							className="w-px h-8 bg-neutral-400 origin-top"
							animate={{ scaleY: [0, 1, 0] }}
							transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Sliders;
