"use client";

import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";

export function Header() {
	const ref = useRef(null);

	useGSAP(
		() => {
			if (prefersReducedMotion()) {
				gsap.set(".anim-load-up", { opacity: 1 });
				gsap.set(".anim-grow-x", { scaleX: 1 });
				return;
			}

			// On-load entrance: background settles, accent bar draws, copy rises.
			gsap
				.timeline({ defaults: { ease: "power2.out" } })
				.fromTo(
					".anim-zoom-out",
					{ scale: 1.05 },
					{ scale: 1, duration: 1.2 },
					0
				)
				.to(".anim-grow-x", { scaleX: 1, duration: 0.8 }, 0.3)
				.fromTo(
					".anim-load-up",
					{ opacity: 0, y: 30 },
					{ opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
					0.4
				);

			// Scroll indicator: gentle bob + inner bar pulse.
			gsap.to(".anim-bounce-soft", {
				y: 8,
				duration: 1,
				ease: "sine.inOut",
				yoyo: true,
				repeat: -1,
			});
			gsap.fromTo(
				".anim-pulse-soft",
				{ opacity: 0.4 },
				{ opacity: 1, duration: 1, ease: "sine.inOut", yoyo: true, repeat: -1 }
			);
		},
		{ scope: ref }
	);

	return (
		<section ref={ref} className="relative px-[5%]">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<img
					src="./Abstract_Header.webp"
					className="anim-zoom-out size-full object-cover"
					alt="Abstract design background"
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-neutral-900/60 via-primary-900/40 to-accent-900/50"></div>
				<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 via-transparent to-transparent"></div>
			</div>

			{/* Main Content */}
			<div className="flex max-h-[60rem] min-h-svh justify-around">
				<div className="container py-16 md:py-24 lg:py-28">
					<div className="relative z-10 grid h-full auto-cols-fr grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
						<div className="flex flex-col justify-start">
							<div>
								{/* Accent line above heading */}
								<div className="anim-grow-x mb-6 h-1 w-20 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full" />

								<h1 className="anim-load-up text-5xl font-bold md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white">
									Big ideas start from a single dot grow into greatness
								</h1>
							</div>
						</div>

						{/* Description Section */}
						<div className="flex flex-col justify-end">
							<div className="anim-load-up mx-[7.5%] md:mx-0">
								<p className="text-text-alternative md:text-md text-white">
									Every great journey begins with a single step. Join us as we
									transform your vision into reality, creating digital
									experiences that inspire and connect. Titik Jalin is an
									AI-augmented product studio. We weave design, engineering, and
									AI into one nimble team — from a first sprint to an embedded
									partner.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll indicator */}
			<div>
				<div className="anim-bounce-soft absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
					<div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
						<div className="anim-pulse-soft w-1 h-3 bg-white/60 rounded-full mt-2" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Header;
