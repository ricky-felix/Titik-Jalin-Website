import { useRef, useState } from "react";
import { gsap, useGSAP, EASE_OUT, prefersReducedMotion } from "./gsap";

// Children that animate in sequence when their container scrolls into view.
const CHILD_SELECTOR = ".tj-stagger-child, .reveal-child, .reveal-fade-child";
const FADE_ONLY = ".reveal-fade, .reveal-fade-child";

// Scroll-reveal powered by GSAP ScrollTrigger.
//
// Attach the returned `ref` to an element. If it contains stagger children
// (`tj-stagger-child` / `reveal-child` / `reveal-fade-child`) those fade up in
// sequence; otherwise the element itself fades up. Plays once.
//
// Elements start hidden via CSS (`opacity: 0` in index.css) so nothing flashes
// before GSAP takes over. `visible` flips to true once the reveal starts.
export function useReveal({ start = "top 85%", stagger = 0.11 } = {}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useGSAP(
		() => {
			const el = ref.current;
			if (!el) return;

			const children = gsap.utils.toArray(CHILD_SELECTOR, el);
			const targets = children.length ? children : [el];

			if (prefersReducedMotion()) {
				gsap.set(targets, { opacity: 1 });
				setVisible(true);
				return;
			}

			gsap.fromTo(
				targets,
				{
					opacity: 0,
					y: (i, t) => (t.matches(FADE_ONLY) ? 0 : 34),
					// CSS transform transitions (card hovers) would fight the tween.
					transition: "none",
				},
				{
					opacity: 1,
					y: 0,
					// Hand transform back to the stylesheet so :hover lifts still work.
					clearProps: "transform,transition",
					duration: children.length ? 0.7 : 0.85,
					ease: EASE_OUT,
					stagger,
					scrollTrigger: {
						trigger: el,
						start,
						once: true,
						onEnter: () => setVisible(true),
					},
				}
			);
		},
		{ dependencies: [start, stagger] }
	);

	return [ref, visible];
}

export default useReveal;
