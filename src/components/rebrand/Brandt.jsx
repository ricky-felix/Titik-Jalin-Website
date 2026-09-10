import { useReveal } from "../../lib/useReveal";

const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

const steps = [
	{
		letter: "B",
		title: "Brief",
		desc: "Align on the real problem, the goals, and the constraints before a pixel moves.",
	},
	{
		letter: "R",
		title: "Research",
		desc: "AI-accelerated discovery of users, market, and the jobs to be done.",
	},
	{
		letter: "A",
		title: "Architect",
		desc: "Shape the flows, structure, and information architecture into a clear spine.",
	},
	{
		letter: "N",
		title: "Narrate",
		desc: "Prototype the story — a clickable narrative the team can feel and react to.",
	},
	{
		letter: "D",
		title: "Develop",
		desc: "Design and engineering in tight loops, producing real, shippable product.",
	},
	{
		letter: "T",
		title: "Test",
		desc: "Validate, measure, and iterate — then hand off clean or stay embedded.",
	},
];

export function Brandt() {
	const [headRef, headVisible] = useReveal();
	const [gridRef, gridVisible] = useReveal();

	return (
		<section
			id="process"
			style={{
				padding: "clamp(80px,11vh,130px) clamp(20px,5vw,64px)",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				className="tj-blob"
				style={{
					position: "absolute",
					top: "-10%",
					right: "8%",
					width: 300,
					height: 300,
					borderRadius: "50%",
					background: "var(--blue)",
					filter: "blur(90px)",
					opacity: "calc(var(--blob-o) * 0.7)",
					zIndex: 0,
					animationDuration: "14s",
				}}
			/>
			<div
				style={{
					maxWidth: 1180,
					margin: "0 auto",
					position: "relative",
					zIndex: 1,
				}}
			>
				<div
					ref={headRef}
					className={`tj-reveal ${headVisible ? "is-visible" : ""}`}
					style={{
						display: "flex",
						alignItems: "flex-end",
						justifyContent: "space-between",
						gap: 24,
						flexWrap: "wrap",
						marginBottom: 50,
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
							Design process
						</div>
						<h2
							style={{
								fontFamily: SERIF,
								fontWeight: 500,
								fontSize: "clamp(2rem,4.6vw,3.4rem)",
								lineHeight: 1.04,
								letterSpacing: "-0.02em",
								margin: 0,
								maxWidth: "20ch",
							}}
						>
							The{" "}
							<span style={{ fontStyle: "italic", color: "var(--coral)" }}>
								BRANDT
							</span>{" "}
							framework.
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
						Six moves that turn a single point into a woven, shippable product —
						our repeatable path from brief to launch.
					</p>
				</div>

				<div
					ref={gridRef}
					className={`tj-brandt-grid ${gridVisible ? "is-visible" : ""}`}
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(6,1fr)",
						gap: 0,
					}}
				>
					{steps.map((step, i) => (
						<div
							key={step.letter}
							className="tj-step tj-stagger-child"
							style={{
								position: "relative",
								padding: "34px clamp(14px,1.4vw,20px) 10px",
								borderTop: "1px solid var(--border-2)",
								animationDelay: `${i * 0.09}s`,
							}}
						>
							<span
								style={{
									position: "absolute",
									top: -7,
									left: "clamp(14px,1.4vw,20px)",
									width: 13,
									height: 13,
									borderRadius: "50%",
									background: "var(--accent)",
									boxShadow: "0 0 0 5px var(--bg)",
								}}
							/>
							<div
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "clamp(2.4rem,3.6vw,3.1rem)",
									lineHeight: 1,
									color: "var(--accent)",
									letterSpacing: "-0.01em",
									marginBottom: 14,
								}}
							>
								{step.letter}
							</div>
							<h3
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "1.35rem",
									margin: "0 0 9px",
									letterSpacing: "-0.01em",
								}}
							>
								{step.title}
							</h3>
							<p
								style={{
									color: "var(--text-2)",
									fontSize: 13.5,
									lineHeight: 1.55,
									margin: 0,
								}}
							>
								{step.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Brandt;
