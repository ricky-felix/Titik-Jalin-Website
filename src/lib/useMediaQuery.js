import { useState, useEffect } from "react";

// Media query hook that reads the correct value synchronously on the first
// render. The previous version initialised to `false` and flipped to `true`
// after mount, which made mobile re-render with desktop transforms for one
// frame — a visible blink/jump. Lazy-initialising from `matchMedia` removes
// that flip entirely.
export const useMediaQuery = (query) => {
	const [matches, setMatches] = useState(() =>
		typeof window !== "undefined" ? window.matchMedia(query).matches : false
	);

	useEffect(() => {
		const media = window.matchMedia(query);
		const listener = () => setMatches(media.matches);
		// Sync once in case the query changed between render and effect.
		listener();
		media.addEventListener("change", listener);
		return () => media.removeEventListener("change", listener);
	}, [query]);

	return matches;
};

export default useMediaQuery;
