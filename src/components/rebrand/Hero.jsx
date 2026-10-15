import { useRef } from "react";
import { gsap, useGSAP, EASE_OUT, prefersReducedMotion } from "../../lib/gsap";

const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

// Ambient gradient blobs. Each gets a different colour and position; the
// random GSAP drift (floatBlobs, wired up in Home) keeps them organic.
const blobs = [
	{
		bg: "var(--blue)",
		blur: 75,
		style: {
			top: "-8%",
			left: "-6%",
			width: "46vw",
			height: "46vw",
			maxWidth: 560,
			maxHeight: 560,
		},
	},
	{
		bg: "var(--coral)",
		blur: 80,
		style: {
			top: "10%",
			right: "-8%",
			width: "42vw",
			height: "42vw",
			maxWidth: 520,
			maxHeight: 520,
		},
	},
	{
		bg: "var(--green-600)",
		blur: 85,
		style: {
			bottom: "-14%",
			left: "32%",
			width: "38vw",
			height: "38vw",
			maxWidth: 460,
			maxHeight: 460,
		},
	},
];

export function Hero() {
	const ref = useRef(null);

	// Staggered load-in for the headline stack.
	useGSAP(
		() => {
			if (prefersReducedMotion()) {
				gsap.set(".tj-hero", { opacity: 1 });
				return;
			}
			gsap.fromTo(
				".tj-hero",
				{ opacity: 0, y: 34 },
				{
					opacity: 1,
					y: 0,
					duration: 0.95,
					ease: EASE_OUT,
					stagger: 0.1,
					delay: 0.15,
				}
			);
		},
		{ scope: ref }
	);

	return (
		<section
			ref={ref}
			id="top"
			style={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				padding: "140px clamp(20px,5vw,64px) 90px",
				overflow: "hidden",
			}}
		>
			{blobs.map((b, i) => (
				<div
					key={i}
					className="tj-blob"
					style={{
						position: "absolute",
						borderRadius: "50%",
						background: b.bg,
						filter: `blur(${b.blur}px)`,
						opacity: "var(--blob-o)",
						zIndex: 0,
						...b.style,
					}}
				/>
			))}

			<div
				style={{
					position: "relative",
					zIndex: 1,
					maxWidth: 1180,
					margin: "0 auto",
					width: "100%",
				}}
			>
				<div
					className="tj-hero"
					style={{
						display: "inline-flex",
						alignItems: "center",
						gap: 9,
						padding: "7px 14px",
						border: "1px solid var(--border)",
						borderRadius: 100,
						background: "var(--surface-2)",
						backdropFilter: "blur(8px)",
						marginBottom: 30,
					}}
				>
					<span
						className="tj-pulse"
						style={{
							width: 7,
							height: 7,
							borderRadius: "50%",
							background: "var(--green-600)",
						}}
					/>
					<span
						style={{
							fontFamily: MONO,
							fontSize: 11.5,
							letterSpacing: "0.04em",
							color: "var(--text-2)",
							textTransform: "uppercase",
							whiteSpace: "nowrap",
						}}
					>
						OPEN FOR PROJECTS
					</span>
				</div>

				<h1
					style={{
						fontFamily: SERIF,
						fontWeight: 500,
						fontSize: "clamp(2.7rem,7.6vw,6.3rem)",
						lineHeight: 0.98,
						letterSpacing: "-0.02em",
						margin: 0,
						maxWidth: "14ch",
					}}
				>
					<span className="tj-hero" style={{ display: "block" }}>
						Big ideas start from a single dot
					</span>
					<span
						className="tj-hero"
						style={{
							display: "block",
							fontStyle: "italic",
							color: "var(--coral)",
						}}
					>
						grow into greatness.
					</span>
				</h1>

				<p
					className="tj-hero"
					style={{
						fontSize: "clamp(1.05rem,1.7vw,1.32rem)",
						lineHeight: 1.55,
						color: "var(--text-2)",
						maxWidth: "54ch",
						margin: "28px 0 0",
						fontWeight: 400,
					}}
				>
					Titik Jalin is an AI-augmented product studio. We weave design,
					engineering, and AI into one nimble team — from a first sprint to an
					embedded partner.
				</p>

				<div
					className="tj-hero"
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 14,
						marginTop: 38,
					}}
				>
					<a
						href="#contact"
						className="tj-link tj-btn-accent"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 9,
							background: "var(--accent)",
							color: "#fff",
							textDecoration: "none",
							fontSize: 16,
							fontWeight: 600,
							padding: "15px 26px",
							borderRadius: 13,
							whiteSpace: "nowrap",
						}}
					>
						Start a sprint&nbsp;<span style={{ fontSize: 17 }}>→</span>
					</a>
					<a
						href="#work"
						className="tj-link tj-btn-ghost"
						style={{
							display: "inline-flex",
							alignItems: "center",
							gap: 9,
							background: "transparent",
							color: "var(--text)",
							textDecoration: "none",
							fontSize: 16,
							fontWeight: 600,
							padding: "15px 26px",
							borderRadius: 13,
							border: "1px solid var(--border-2)",
							whiteSpace: "nowrap",
						}}
					>
						See our work
					</a>
				</div>
			</div>

			<div
				className="tj-hero"
				style={{
					position: "absolute",
					bottom: 34,
					left: "clamp(20px,5vw,64px)",
					display: "flex",
					alignItems: "center",
					gap: 12,
					color: "var(--text-3)",
				}}
			>
				<span
					style={{
						fontFamily: MONO,
						fontSize: 11,
						letterSpacing: "0.18em",
						textTransform: "uppercase",
					}}
				>
					Scroll
				</span>
				<span
					style={{
						width: 46,
						height: 1,
						background: "var(--text-3)",
						display: "inline-block",
					}}
				/>
			</div>
		</section>
	);
}

export default Hero;
