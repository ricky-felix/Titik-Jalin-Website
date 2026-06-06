import { useEffect, useRef, useState } from "react";

// Scroll-reveal trigger (CSS replacement for framer-motion's `whileInView`).
//
// Attach the returned `ref` to an element and toggle the `is-visible` class on it
// based on `visible`. The actual animation lives in CSS (`.reveal` / `.reveal-child`
// in index.css); this hook only flips the class once, when the element scrolls into
// view. Fires a single time and disconnects — equivalent to `viewport={{ once: true }}`.
//
// For staggered groups, put the hook on the container and give each child the
// `reveal-child` class; CSS animates them via `.is-visible .reveal-child`.
export function useReveal({ threshold = 0.2, rootMargin = "0px" } = {}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		// No IntersectionObserver (old browsers / SSR) → just show it.
		if (typeof IntersectionObserver === "undefined") {
			setVisible(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold, rootMargin }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, [threshold, rootMargin]);

	return [ref, visible];
}

export default useReveal;
