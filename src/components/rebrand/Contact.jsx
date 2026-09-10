import { useReveal } from "../../lib/useReveal";

const SERIF = "'Newsreader', serif";

export function Contact() {
	const [ref, visible] = useReveal();

	return (
		<section
			id="contact"
			style={{
				padding: "clamp(90px,14vh,160px) clamp(20px,5vw,64px)",
				position: "relative",
				overflow: "hidden",
				background: "var(--bg-2)",
				borderTop: "1px solid var(--border)",
			}}
		>
			<div
				className="tj-blob"
				style={{
					position: "absolute",
					bottom: "-30%",
					left: "50%",
					marginLeft: "-35vw",
					width: "70vw",
					height: "70vw",
					maxWidth: 760,
					maxHeight: 760,
					borderRadius: "50%",
					background: "var(--coral)",
					filter: "blur(95px)",
					opacity: "calc(var(--blob-o) * 0.85)",
					zIndex: 0,
					animationDuration: "17s",
				}}
			/>
			<div
				ref={ref}
				className={`tj-reveal ${visible ? "is-visible" : ""}`}
				style={{
					maxWidth: 880,
					margin: "0 auto",
					textAlign: "center",
					position: "relative",
					zIndex: 1,
				}}
			>
				<h2
					style={{
						fontFamily: SERIF,
						fontWeight: 500,
						fontSize: "clamp(2.4rem,6.5vw,5rem)",
						lineHeight: 1.02,
						letterSpacing: "-0.025em",
						margin: 0,
					}}
				>
					Let's build something,{" "}
					<span style={{ fontStyle: "italic", color: "var(--coral)" }}>
						Human. Simple. Connected.
					</span>
				</h2>
				<p
					style={{
						color: "var(--text-2)",
						fontSize: "clamp(1rem,1.6vw,1.2rem)",
						lineHeight: 1.55,
						maxWidth: "50ch",
						margin: "24px auto 0",
					}}
				>
					Tell us where you're stuck. We'll come back within a day with a plan
					and a price — with a deck.
				</p>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 14,
						justifyContent: "center",
						marginTop: 40,
					}}
				>
					<a
						href="mailto:titikjalin@outlook.co.id"
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
							padding: "16px 30px",
							borderRadius: 13,
						}}
					>
						titikjalin@outlook.co.id<span>→</span>
					</a>
					<a
						href="#services"
						className="tj-link tj-btn-ghost"
						style={{
							display: "inline-flex",
							alignItems: "center",
							background: "transparent",
							color: "var(--text)",
							textDecoration: "none",
							fontSize: 16,
							fontWeight: 600,
							padding: "16px 30px",
							borderRadius: 13,
							border: "1px solid var(--border-2)",
						}}
					>
						Compare services
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;
