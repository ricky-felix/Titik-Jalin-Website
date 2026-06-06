"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "../lib/useMediaQuery";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// Piecewise-linear interpolation across matched input/output points
// (the vanilla equivalent of framer-motion's useTransform with array ranges).
const interpolate = (v, xs, ys) => {
	if (v <= xs[0]) return ys[0];
	if (v >= xs[xs.length - 1]) return ys[ys.length - 1];
	for (let i = 1; i < xs.length; i++) {
		if (v <= xs[i]) {
			const t = (v - xs[i - 1]) / (xs[i] - xs[i - 1]);
			return ys[i - 1] + t * (ys[i] - ys[i - 1]);
		}
	}
	return ys[ys.length - 1];
};

const TOTAL_ITEMS = 4;
const SECTION_SIZE = 1 / TOTAL_ITEMS; // 0.25 each
const FADE_BUFFER = 0.06;

export function Sliders() {
	const isMobile = useMediaQuery("(max-width: 768px)");
	const containerRef = useRef(null);
	const itemRefs = useRef([]);
	const keepScrollingRef = useRef(null);

	// Scroll-scrubbed crossfade between the four audience headings. Tied to scroll
	// position rather than time, so it stays in JS (rAF-throttled) rather than CSS.
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		let frame = null;

		const update = () => {
			frame = null;
			const rect = container.getBoundingClientRect();
			const vh = window.innerHeight;
			const scrollable = rect.height - vh;
			// 0 when the container top reaches the viewport top → 1 at its bottom.
			const progress =
				scrollable > 0 ? clamp(-rect.top / scrollable, 0, 1) : 0;

			const yRange = isMobile ? 30 : 40;

			itemRefs.current.forEach((el, index) => {
				if (!el) return;
				const start = index * SECTION_SIZE;
				const end = Math.min(start + SECTION_SIZE, 1);
				const inputRange = [start, start + FADE_BUFFER, end - FADE_BUFFER, end];

				const opacityOut = [0, 1, 1, 0];
				if (index === 0) opacityOut[0] = 1; // visible on load
				if (index === TOTAL_ITEMS - 1) opacityOut[3] = 1; // last stays visible
				const yOut = [yRange, 0, 0, -yRange];

				el.style.opacity = interpolate(progress, inputRange, opacityOut);
				el.style.transform = `translate(-50%, ${interpolate(
					progress,
					inputRange,
					yOut
				)}px)`;
			});

			if (keepScrollingRef.current) {
				keepScrollingRef.current.style.opacity = interpolate(
					progress,
					[0, 0.85, 1],
					[1, 1, 0]
				);
			}
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

	// Shared classes for the absolutely-centred headings. `-translate-x-1/2` is
	// folded into the inline transform set by the scroll handler, so it's not here.
	const headingClass =
		"absolute left-1/2 mb-3 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap";

	return (
		<section ref={containerRef} className="relative">
			{/* Scroll container */}
			<div className={isMobile ? "relative h-[800vh]" : "relative h-[600vh]"}>
				{/* Sticky viewport */}
				<div className="sticky top-0 flex min-h-screen items-center justify-center">
					<div className="relative text-center max-w-6xl mx-auto px-4 sm:px-8">
						{/* Header */}
						<div className="mb-6 sm:mb-12">
							<p className="text-base sm:text-lg md:text-xl font-semibold text-neutral-200 tracking-wide uppercase">
								Who do we work for?
							</p>
						</div>

						{/* Animated text */}
						<div className="relative min-h-[6rem] sm:min-h-[8rem]">
							<h2
								ref={(el) => (itemRefs.current[0] = el)}
								className={headingClass}
								style={{ opacity: 1, transform: "translate(-50%, 0px)" }}
							>
								<span className="block text-secondary-500">Business</span>
								<span className="block text-white">Digital Transformation</span>
							</h2>

							<h2
								ref={(el) => (itemRefs.current[1] = el)}
								className={headingClass}
								style={{ opacity: 0, transform: "translate(-50%, 0px)" }}
							>
								<span className="text-primary-500">Startup</span>
							</h2>

							<h2
								ref={(el) => (itemRefs.current[2] = el)}
								className={headingClass}
								style={{ opacity: 0, transform: "translate(-50%, 0px)" }}
							>
								<span className="block bg-gradient-to-r from-accent-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent">
									Micro or Small
								</span>
								<span className="block text-white">Enterprises</span>
							</h2>

							<h2
								ref={(el) => (itemRefs.current[3] = el)}
								className={headingClass}
								style={{ opacity: 0, transform: "translate(-50%, 0px)" }}
							>
								<span className="block bg-gradient-to-r from-primary-600 via-accent-500 to-secondary-600 bg-clip-text text-transparent">
									Company or Agency
								</span>
								<span className="block text-white">Re-Branding</span>
							</h2>
						</div>
					</div>

					{/* Keep scrolling indicator */}
					<div
						ref={keepScrollingRef}
						className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-400"
					>
						<span className="text-xs sm:text-sm font-medium tracking-widest uppercase">
							Keep Scrolling
						</span>
						<div className="anim-scaley w-px h-8 bg-neutral-400 origin-top" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Sliders;
