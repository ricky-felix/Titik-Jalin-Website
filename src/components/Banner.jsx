"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { useMediaQuery } from "../lib/useMediaQuery";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// Map `v` from an input range to an output range, clamped to the input bounds.
const mapRange = (v, inMin, inMax, outMin, outMax) => {
	const t = clamp((v - inMin) / (inMax - inMin), 0, 1);
	return outMin + t * (outMax - outMin);
};

export const Banner = (props) => {
	const { headings } = {
		...BannerDefaults,
		...props,
	};

	const sectionRef = useRef(null);
	const headingRefs = useRef([]);
	const isMobile = useMediaQuery("(max-width: 768px)");

	// Scroll-linked horizontal parallax. This is scroll-*scrubbed* (tied to scroll
	// position, not time), so it can't be a CSS keyframe animation — a rAF-throttled
	// scroll handler writing `transform` is the framer-motion-free equivalent of the
	// old useScroll/useTransform setup.
	useEffect(() => {
		const section = sectionRef.current;
		if (!section) return;

		let frame = null;

		const update = () => {
			frame = null;
			const rect = section.getBoundingClientRect();
			const vh = window.innerHeight;
			// 0 as the section enters from the bottom → 1 as it leaves past the top.
			const progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1);

			const inStart = isMobile ? 0.2 : 0.3;
			const inEnd = isMobile ? 0.8 : 0.7;
			const range = isMobile ? 50 : 100;

			headingRefs.current.forEach((el, index) => {
				if (!el) return;
				const even = index % 2 === 0;
				const from = even ? -range : range;
				const to = even ? range : -range;
				const x = mapRange(progress, inStart, inEnd, from, to);
				el.style.transform = `translateX(${x}px)`;
			});
		};

		const onScroll = () => {
			if (frame === null) frame = requestAnimationFrame(update);
		};

		update();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
			if (frame !== null) cancelAnimationFrame(frame);
		};
	}, [isMobile]);

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
						<h1
							ref={(el) => (headingRefs.current[index] = el)}
							className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight whitespace-nowrap inline-block"
						>
							{heading}
						</h1>
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
