import { useReveal } from "../../lib/useReveal";

const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

const tiers = [
	{
		tag: "SPRINT",
		duration: "1–2 weeks",
		name: "Sprint",
		color: "var(--blue)",
		desc: "AI-assisted design sprints. Validate, prototype, and pressure-test an idea before you commit budget.",
		features: [
			"Rapid clickable prototype",
			"AI-accelerated research",
			"Decision-ready handoff",
		],
		price: "From Rp 8.000.000 – 10.000.000",
		cta: "Book a sprint",
	},
	{
		tag: "BUILD",
		duration: "4–8 weeks",
		name: "Build",
		color: "var(--coral)",
		desc: "Full product development. Design and engineering shipped end-to-end, with AI in the loop the whole way.",
		features: [
			"Design + production build",
			"Real, shippable code",
			"Launch & iterate support",
		],
		price: "From Rp 18.000.000 – 35.000.000",
		cta: "Scope a build",
	},
	{
		tag: "EMBEDDED",
		duration: "Ongoing",
		name: "Embedded",
		color: "var(--green-600)",
		desc: "A product engineer / designer woven into your team. Senior craft on tap, scaling up and down with you.",
		features: [
			"Dedicated partner",
			"Flexible monthly scope",
			"Scales with your roadmap",
		],
		price: "Custom — from Rp 15.000.000/month",
		cta: "Embed with us",
	},
];

export function Engagements() {
	const [headRef, headVisible] = useReveal();
	const [gridRef, gridVisible] = useReveal();

	return (
		<section
			id="engage"
			style={{
				padding: "clamp(80px,11vh,130px) clamp(20px,5vw,64px)",
				background: "var(--bg-2)",
				borderTop: "1px solid var(--border)",
			}}
		>
			<div style={{ maxWidth: 1180, margin: "0 auto" }}>
				<div
					ref={headRef}
					className={`tj-reveal ${headVisible ? "is-visible" : ""}`}
					style={{
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "space-between",
						gap: 24,
						flexWrap: "wrap",
						marginBottom: 54,
					}}
				>
					<div>
						<div
							style={{
								fontFamily: MONO,
								fontSize: 12,
								letterSpacing: "0.16em",
								textTransform: "uppercase",
								color: "var(--accent)",
								marginBottom: 16,
							}}
						>
							How we work
						</div>
						<h2
							style={{
								fontFamily: SERIF,
								fontWeight: 500,
								fontSize: "clamp(2rem,4.6vw,3.4rem)",
								lineHeight: 1.04,
								letterSpacing: "-0.02em",
								margin: 0,
								maxWidth: "18ch",
							}}
						>
							Three ways to work together.
						</h2>
					</div>
					<p
						style={{
							color: "var(--text-2)",
							fontSize: 15.5,
							lineHeight: 1.6,
							maxWidth: "34ch",
							margin: 0,
						}}
					>
						Pick the gear that fits the moment. Start small, scale up, or fold
						us into your team.
					</p>
				</div>

				<div
					ref={gridRef}
					className={`tj-tier-grid ${gridVisible ? "is-visible" : ""}`}
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3,1fr)",
						gap: 22,
					}}
				>
					{tiers.map((svc, i) => (
						<div
							key={svc.tag}
							className="tj-tier tj-stagger-child"
							style={{
								position: "relative",
								border: "1px solid var(--border)",
								background: "var(--surface)",
								borderRadius: 20,
								padding: "34px 30px 30px",
								overflow: "hidden",
								animationDelay: `${i * 0.11}s`,
							}}
						>
							<div
								className="tj-card-bar"
								style={{
									position: "absolute",
									top: 0,
									left: 0,
									height: 3,
									width: "100%",
									background: svc.color,
								}}
							/>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									justifyContent: "space-between",
									marginBottom: 26,
								}}
							>
								<span
									style={{
										fontFamily: MONO,
										fontSize: 12,
										letterSpacing: "0.1em",
										color: svc.color,
									}}
								>
									{svc.tag}
								</span>
								<span
									style={{
										fontFamily: MONO,
										fontSize: 12,
										color: "var(--text-3)",
										border: "1px solid var(--border)",
										padding: "5px 10px",
										borderRadius: 100,
									}}
								>
									{svc.duration}
								</span>
							</div>
							<h3
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "2rem",
									letterSpacing: "-0.01em",
									margin: "0 0 12px",
								}}
							>
								{svc.name}
							</h3>
							<p
								style={{
									color: "var(--text-2)",
									fontSize: 15,
									lineHeight: 1.6,
									margin: "0 0 24px",
									minHeight: 72,
								}}
							>
								{svc.desc}
							</p>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: 11,
									marginBottom: 26,
								}}
							>
								{svc.features.map((feat) => (
									<div
										key={feat}
										style={{
											display: "flex",
											alignItems: "center",
											gap: 10,
											fontSize: 14,
											color: "var(--text)",
										}}
									>
										<span
											style={{
												width: 5,
												height: 5,
												borderRadius: "50%",
												background: svc.color,
												flex: "none",
											}}
										/>
										{feat}
									</div>
								))}
							</div>
							<div
								style={{
									padding: "14px 0",
									borderTop: "1px solid var(--border)",
									marginBottom: 20,
								}}
							>
								<div
									style={{
										fontFamily: MONO,
										fontSize: 11,
										letterSpacing: "0.1em",
										textTransform: "uppercase",
										color: "var(--text-3)",
										marginBottom: 6,
									}}
								>
									Pricing
								</div>
								<div
									style={{
										fontSize: 15,
										fontWeight: 700,
										color: svc.color,
										letterSpacing: "-0.01em",
									}}
								>
									{svc.price}
								</div>
							</div>
							<a
								href="#contact"
								style={{
									display: "flex",
									alignItems: "center",
									gap: 8,
									color: "var(--text)",
									fontWeight: 600,
									fontSize: 14.5,
									textDecoration: "none",
								}}
							>
								{svc.cta}{" "}
								<span className="tj-card-arrow">→</span>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Engagements;
