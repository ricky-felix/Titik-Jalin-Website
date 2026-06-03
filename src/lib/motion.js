// Shared Framer Motion presets.
//
// These exist to keep entrance animations consistent and, more importantly,
// blink-free. The two rules that avoid the double-blink seen on mobile/desktop:
//   1. Always fade `opacity` together with the transform, so an element is never
//      shown in a half-animated state for a frame.
//   2. Use `viewportOnce` (once + amount) instead of negative-pixel margins,
//      which retrigger unpredictably as the mobile address bar collapses.

// Fire once, when ~20% of the element is in view. `once: true` guarantees the
// animation never replays on the toolbar resize / scroll jitter that caused the
// original "double blink" on mobile.
export const viewportOnce = { once: true, amount: 0.2 };

// Slide up + fade in. The default entrance for headings, cards and copy.
export const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	visible: { opacity: 1, y: 0 },
};

// Plain fade, no movement. For images and large blocks where a slide reads as jumpy.
export const fadeIn = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

// Wrap a group of `fadeUp`/`fadeIn` children with this on the parent to stagger them.
// Children inherit the trigger from the parent, so they don't set their own
// initial/whileInView — only `variants`.
export const staggerContainer = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12 } },
};

// Default tween used alongside the variants above.
export const entranceTransition = { duration: 0.5, ease: "easeOut" };
