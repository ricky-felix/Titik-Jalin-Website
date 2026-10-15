import { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "./gsap";

// Animated number counter (GSAP tween on a plain object). Counts from
// 0 → `target` once the element scrolls into view. Honors reduced-motion by
// snapping straight to the final value. `duration` is in seconds.
//
//   const [ref, value] = useCountUp(40);
//   <span ref={ref}>{value}+</span>
export function useCountUp(target, { duration = 1.7 } = {}) {
	const ref = useRef(null);
	const [value, setValue] = useState(0);

	useGSAP(
		() => {
			const el = ref.current;
			if (!el) return;

			if (prefersReducedMotion()) {
				setValue(target);
				return;
			}

			const counter = { v: 0 };
			gsap.to(counter, {
				v: target,
				duration,
				ease: "power2.out",
				onUpdate: () => setValue(Math.round(counter.v)),
				scrollTrigger: { trigger: el, start: "top 85%", once: true },
			});
		},
		{ dependencies: [target, duration] }
	);

	return [ref, value];
}

export default useCountUp;
