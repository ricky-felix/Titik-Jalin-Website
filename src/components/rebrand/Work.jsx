import portfolioProjects from "../../data/portfolioData.json";
import { useReveal } from "../../lib/useReveal";

const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

// Tint cycle reused from the design's work cards.
const tints = ["var(--blue)", "var(--green-600)", "var(--coral)", "var(--blue-600)"];

// Map a project status to a dot color from the design tokens.
const statusColors = {
	Live: "var(--green-600)",
	Mockup: "var(--coral)",
};

export function Work() {
	const [headRef, headVisible] = useReveal();
	const [gridRef, gridVisible] = useReveal();

	return (
		<section
			id="work"
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
							Selected work
						</div>
						<h2
							style={{
								fontFamily: SERIF,
								fontWeight: 500,
								fontSize: "clamp(2rem,4.6vw,3.4rem)",
								lineHeight: 1.04,
								letterSpacing: "-0.02em",
								margin: 0,
								maxWidth: "16ch",
							}}
						>
							Shipped, not shelved.
						</h2>
					</div>
				</div>

				<div
					ref={gridRef}
					className={`tj-work-grid ${gridVisible ? "is-visible" : ""}`}
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(2,1fr)",
						gap: 24,
					}}
				>
					{portfolioProjects.map((project, i) => {
						const tint = tints[i % tints.length];
						const statusColor = statusColors[project.status] ?? "var(--text-3)";
						return (
							<a
								key={project.id}
								href={project.url}
								target="_blank"
								rel="noreferrer"
								className="tj-work tj-stagger-child"
								style={{
									textDecoration: "none",
									color: "var(--text)",
									display: "block",
									border: "1px solid var(--border)",
									borderRadius: 20,
									overflow: "hidden",
									background: "var(--surface)",
									animationDelay: `${i * 0.11}s`,
								}}
							>
								<div
									style={{
										position: "relative",
										aspectRatio: "16/10",
										background:
											"repeating-linear-gradient(135deg,var(--stripe-a) 0 13px,var(--stripe-b) 13px 26px)",
										display: "grid",
										placeItems: "center",
										overflow: "hidden",
									}}
								>
									<img
										src={project.image}
										alt={project.alt || project.title}
										style={{
											position: "absolute",
											inset: 0,
											width: "100%",
											height: "100%",
											objectFit: "cover",
										}}
									/>
									<div
										style={{
											position: "absolute",
											inset: 0,
											background: `radial-gradient(120% 90% at 80% 0%,${tint} 0%,transparent 55%)`,
											opacity: 0.35,
											pointerEvents: "none",
										}}
									/>
								</div>
								<div
									style={{
										padding: "24px 26px 26px",
										display: "flex",
										alignItems: "flex-start",
										justifyContent: "space-between",
										gap: 16,
									}}
								>
									<div>
										{project.status ? (
											<span
												style={{
													display: "inline-flex",
													alignItems: "center",
													gap: 6,
													fontFamily: MONO,
													fontSize: 11.5,
													letterSpacing: "0.08em",
													textTransform: "uppercase",
													color: statusColor,
												}}
											>
												<span
													style={{
														width: 7,
														height: 7,
														borderRadius: "50%",
														background: statusColor,
													}}
												/>
												{project.status}
											</span>
										) : null}
										<h3
											style={{
												fontFamily: SERIF,
												fontWeight: 500,
												fontSize: "1.55rem",
												margin: "8px 0 0",
												letterSpacing: "-0.01em",
											}}
										>
											{project.title}
										</h3>
										<div
											style={{
												display: "flex",
												flexWrap: "wrap",
												gap: 7,
												marginTop: 14,
											}}
										>
											{project.tags?.map((t) => (
												<span
													key={t.name}
													style={{
														fontFamily: MONO,
														fontSize: 10.5,
														letterSpacing: "0.04em",
														color: "var(--text-2)",
														border: "1px solid var(--border)",
														borderRadius: 999,
														padding: "4px 10px",
														background: "var(--bg-2)",
													}}
												>
													{t.name}
												</span>
											))}
										</div>
									</div>
									<span
										style={{
											fontSize: 18,
											color: "var(--text-3)",
											marginTop: 6,
										}}
									>
										↗
									</span>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Work;
