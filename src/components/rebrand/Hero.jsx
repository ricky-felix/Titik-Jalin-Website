const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

// Ambient gradient blobs. Each gets a different colour, position, duration and
// delay so the CSS `tj-blob` float reads as organic (replaces GSAP's random
// per-element tween).
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
		dur: "11s",
		delay: "0s",
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
		dur: "13.5s",
		delay: "-3s",
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
		dur: "16s",
		delay: "-6s",
	},
];

export function Hero() {
	return (
		<section
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
						animationDuration: b.dur,
						animationDelay: b.delay,
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
						animationDelay: "0.15s",
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
					<span
						className="tj-hero"
						style={{ display: "block", animationDelay: "0.25s" }}
					>
						Big ideas start from a single dot
					</span>
					<span
						className="tj-hero"
						style={{
							display: "block",
							fontStyle: "italic",
							color: "var(--coral)",
							animationDelay: "0.35s",
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
						animationDelay: "0.45s",
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
						animationDelay: "0.55s",
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
					animationDelay: "0.7s",
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
