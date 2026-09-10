import { useEffect, useRef, useState } from "react";

// Animated number counter (CSS/JS replacement for the GSAP `g.to(obj, {v})`
// tween used in the original design). Counts from 0 → `target` once the
// element scrolls into view, then disconnects. Honors reduced-motion by
// snapping straight to the final value.
//
//   const [ref, value] = useCountUp(40);
//   <span ref={ref}>{value}+</span>
export function useCountUp(target, { duration = 1700 } = {}) {
	const ref = useRef(null);
	const [value, setValue] = useState(0);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const reduce =
			typeof window !== "undefined" &&
			window.matchMedia &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		if (reduce || typeof IntersectionObserver === "undefined") {
			setValue(target);
			return;
		}

		let raf = 0;
		let start = 0;

		const tick = (now) => {
			if (!start) start = now;
			const progress = Math.min((now - start) / duration, 1);
			// easeOutQuad — matches the design's "power2.out" feel
			const eased = 1 - (1 - progress) * (1 - progress);
			setValue(Math.round(target * eased));
			if (progress < 1) raf = requestAnimationFrame(tick);
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					raf = requestAnimationFrame(tick);
					observer.disconnect();
				}
			},
			{ threshold: 0.6 }
		);

		observer.observe(el);
		return () => {
			observer.disconnect();
			cancelAnimationFrame(raf);
		};
	}, [target, duration]);

	return [ref, value];
}

export default useCountUp;
