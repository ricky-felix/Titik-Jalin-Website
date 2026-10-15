import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Single place that registers GSAP plugins — import gsap from here, not "gsap".
gsap.registerPlugin(ScrollTrigger, useGSAP);

// easeOutQuint — same curve as the design's cubic-bezier(0.22, 1, 0.36, 1).
export const EASE_OUT = "power4.out";

export const prefersReducedMotion = () =>
	typeof window !== "undefined" &&
	!!window.matchMedia &&
	window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Ambient gradient blobs: endless random drift. `repeatRefresh` re-rolls the
// random x/y/scale on every repeat, so each blob wanders organically.
export function floatBlobs(targets) {
	gsap.utils.toArray(targets).forEach((el) => {
		gsap.to(el, {
			x: "random(-40, 40)",
			y: "random(-35, 35)",
			scale: "random(0.92, 1.12)",
			duration: gsap.utils.random(4.5, 7.5),
			ease: "sine.inOut",
			repeat: -1,
			repeatRefresh: true,
		});
	});
}

// Small "live" status dots: scale + fade pulse.
export function pulseDots(targets) {
	gsap.to(targets, {
		scale: 1.5,
		opacity: 0.4,
		duration: 1.2,
		ease: "sine.inOut",
		yoyo: true,
		repeat: -1,
	});
}

export { gsap, ScrollTrigger, useGSAP };
