import { useReveal } from "../../lib/useReveal";

const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

const ghost = {
	position: "absolute",
	fontFamily: SERIF,
	fontWeight: 500,
	lineHeight: 1,
	userSelect: "none",
	pointerEvents: "none",
};

export function Audience() {
	const [headRef, headVisible] = useReveal();
	const [gridRef, gridVisible] = useReveal();

	return (
		<section
			id="who"
			style={{
				padding: "clamp(80px,11vh,130px) clamp(20px,5vw,64px)",
				background: "var(--bg-2)",
				borderTop: "1px solid var(--border)",
				borderBottom: "1px solid var(--border)",
			}}
		>
			<div style={{ maxWidth: 1180, margin: "0 auto" }}>
				<div
					ref={headRef}
					className={`tj-reveal ${headVisible ? "is-visible" : ""}`}
					style={{ marginBottom: 44 }}
				>
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
						Who we work for
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
						Built for teams at a turning point.
					</h2>
				</div>

				<div
					ref={gridRef}
					className={`tj-bento ${gridVisible ? "is-visible" : ""}`}
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(3,1fr)",
						gridTemplateRows: "auto auto",
						gap: 14,
					}}
				>
					{/* 01 — Enterprise (spans 2 cols) */}
					<div
						className="tj-stagger-child"
						style={{
							gridColumn: "1/3",
							position: "relative",
							background:
								"linear-gradient(135deg,var(--blue-700),var(--blue-600))",
							borderRadius: 20,
							padding: "38px 36px",
							overflow: "hidden",
							minHeight: 210,
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							animationDelay: "0s",
						}}
					>
						<div
							style={{
								...ghost,
								top: -20,
								right: 10,
								fontSize: "clamp(7rem,13vw,10rem)",
								color: "rgba(255,255,255,0.06)",
							}}
						>
							01
						</div>
						<span
							style={{
								fontFamily: MONO,
								fontSize: 11,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "rgba(255,255,255,0.5)",
							}}
						>
							Enterprise
						</span>
						<div>
							<h3
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "clamp(1.5rem,2.6vw,2rem)",
									color: "#fff",
									margin: "0 0 10px",
									letterSpacing: "-0.01em",
									lineHeight: 1.15,
								}}
							>
								Business Digital Transformation
							</h3>
							<p
								style={{
									color: "rgba(255,255,255,0.7)",
									fontSize: 14.5,
									lineHeight: 1.55,
									margin: 0,
									maxWidth: "52ch",
								}}
							>
								Legacy operations reimagined as modern, AI-aware digital
								products people actually want to use.
							</p>
						</div>
					</div>

					{/* 02 — Startups */}
					<div
						className="tj-stagger-child"
						style={{
							gridColumn: "3",
							position: "relative",
							background: "var(--surface)",
							border: "1px solid var(--border)",
							borderRadius: 20,
							padding: "34px 28px",
							overflow: "hidden",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							animationDelay: "0.11s",
						}}
					>
						<div
							style={{
								...ghost,
								top: -14,
								right: 16,
								fontSize: "6rem",
								color: "rgba(102,179,255,0.10)",
							}}
						>
							02
						</div>
						<span
							style={{
								fontFamily: MONO,
								fontSize: 11,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "var(--accent)",
							}}
						>
							Startups
						</span>
						<div>
							<h3
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "1.5rem",
									margin: "0 0 10px",
									letterSpacing: "-0.01em",
									lineHeight: 1.15,
								}}
							>
								From zero to fundable.
							</h3>
							<p
								style={{
									color: "var(--text-2)",
									fontSize: 14,
									lineHeight: 1.55,
									margin: 0,
								}}
							>
								A shippable product, fast enough to catch your window.
							</p>
						</div>
					</div>

					{/* 03 — Micro & Small */}
					<div
						className="tj-stagger-child"
						style={{
							gridColumn: "1",
							position: "relative",
							background: "var(--surface)",
							border: "1px solid var(--border)",
							borderRadius: 20,
							padding: "34px 28px",
							overflow: "hidden",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							animationDelay: "0.22s",
						}}
					>
						<div
							style={{
								...ghost,
								top: -14,
								right: 16,
								fontSize: "6rem",
								color: "rgba(167,243,208,0.09)",
							}}
						>
							03
						</div>
						<span
							style={{
								fontFamily: MONO,
								fontSize: 11,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "var(--green-600)",
							}}
						>
							Micro &amp; Small
						</span>
						<div>
							<h3
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "1.5rem",
									margin: "0 0 10px",
									letterSpacing: "-0.01em",
									lineHeight: 1.15,
								}}
							>
								Micro &amp; Small Enterprises
							</h3>
							<p
								style={{
									color: "var(--text-2)",
									fontSize: 14,
									lineHeight: 1.55,
									margin: 0,
								}}
							>
								Right-sized tools that punch well above their budget.
							</p>
						</div>
					</div>

					{/* 04 — Re-Branding (spans 2 cols) */}
					<div
						className="tj-stagger-child"
						style={{
							gridColumn: "2/4",
							position: "relative",
							background:
								"linear-gradient(135deg,color-mix(in srgb,var(--coral) 16%,var(--surface)),var(--surface))",
							border: "1px solid var(--border)",
							borderRadius: 20,
							padding: "34px 36px",
							overflow: "hidden",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							animationDelay: "0.33s",
						}}
					>
						<div
							style={{
								...ghost,
								top: -14,
								right: 20,
								fontSize: "7rem",
								color: "rgba(255,107,107,0.08)",
							}}
						>
							04
						</div>
						<span
							style={{
								fontFamily: MONO,
								fontSize: 11,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "var(--coral)",
							}}
						>
							Re-Branding
						</span>
						<div>
							<h3
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "1.7rem",
									margin: "0 0 10px",
									letterSpacing: "-0.01em",
									lineHeight: 1.15,
								}}
							>
								Company or Agency Re-Branding
							</h3>
							<p
								style={{
									color: "var(--text-2)",
									fontSize: 14.5,
									lineHeight: 1.55,
									margin: 0,
									maxWidth: "50ch",
								}}
							>
								A sharper identity and the digital surfaces to carry it — site,
								product, and system.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Audience;
