import { useReveal } from "../../lib/useReveal";

const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

const services = [
	{
		n: "01",
		name: "Branding & Identity",
		desc: "Logo, color system, typography, and brand voice — show up professionally from day one.",
		nowrap: true,
	},
	{
		n: "02",
		name: "Rapid Prototyping",
		desc: "Test your idea with real users before committing to a full build. Validate fast, build with confidence.",
		nowrap: true,
	},
	{
		n: "03",
		name: "Web Design, Dev & Testing",
		desc: "Component-based React builds — WCAG-accessible, Core Web Vitals optimised, cross-browser ready.",
		nowrap: false,
	},
	{
		n: "04",
		name: "Website Care & Support",
		desc: "Ongoing updates, monitoring, and support — your site secure and running long after launch.",
		nowrap: true,
	},
];

export function Services() {
	const [headRef, headVisible] = useReveal();
	const [listRef, listVisible] = useReveal();

	return (
		<section
			id="services"
			style={{
				padding:
					"clamp(64px,9vh,104px) clamp(20px,5vw,64px) clamp(80px,11vh,130px)",
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
						marginBottom: 56,
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
								marginBottom: 18,
							}}
						>
							What we do
						</div>
						<h2
							style={{
								fontFamily: SERIF,
								fontWeight: 500,
								fontSize: "clamp(2.2rem,5vw,3.7rem)",
								lineHeight: 1.02,
								letterSpacing: "-0.02em",
								margin: 0,
							}}
						>
							Our Services
						</h2>
					</div>
					<p
						style={{
							fontFamily: MONO,
							color: "var(--text-2)",
							fontSize: 13.5,
							lineHeight: 1.7,
							margin: 0,
							maxWidth: "38ch",
						}}
					>
						From the first dot of an idea to a fully launched product — here's
						how we connect the lines.
					</p>
				</div>

				<div ref={listRef} className={listVisible ? "is-visible" : ""}>
					<div style={{ borderTop: "1px solid var(--border)" }} />
					{services.map((s) => (
						<div
							key={s.n}
							className="tj-svc-row tj-stagger-child"
							style={{
								display: "flex",
								alignItems: "center",
								gap: "clamp(16px,3vw,40px)",
								padding: "clamp(22px,3.5vh,32px) 0",
								borderBottom: "1px solid var(--border)",
								cursor: "default",
							}}
						>
							<span
								style={{
									fontFamily: MONO,
									fontSize: 12,
									color: "var(--text-3)",
									width: 28,
									flex: "none",
									letterSpacing: "0.06em",
								}}
							>
								{s.n}
							</span>
							<div
								style={{
									flex: 1,
									display: "flex",
									alignItems: "baseline",
									gap: "clamp(16px,4vw,48px)",
									flexWrap: "wrap",
								}}
							>
								<h3
									style={{
										fontFamily: SERIF,
										fontWeight: 500,
										fontSize: "clamp(1.55rem,3.2vw,2.6rem)",
										letterSpacing: "-0.02em",
										margin: 0,
										lineHeight: 1,
										color: "var(--text)",
										whiteSpace: s.nowrap ? "nowrap" : "normal",
									}}
								>
									{s.name}
								</h3>
								<p
									style={{
										fontFamily: MONO,
										fontSize: 13,
										color: "var(--text-2)",
										margin: 0,
										lineHeight: 1.55,
										maxWidth: "40ch",
									}}
								>
									{s.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Services;
