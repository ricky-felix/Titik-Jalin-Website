import { useReveal } from "../../lib/useReveal";

const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

export function Ethos() {
	const [headRef, headVisible] = useReveal();
	const [gridRef, gridVisible] = useReveal();

	return (
		<section
			id="about"
			style={{ padding: "clamp(80px,11vh,130px) clamp(20px,5vw,64px)" }}
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
						Ethos
					</div>
					<h2
						style={{
							fontFamily: SERIF,
							fontWeight: 500,
							fontSize: "clamp(2rem,4.6vw,3.4rem)",
							lineHeight: 1.04,
							letterSpacing: "-0.02em",
							margin: 0,
						}}
					>
						Human. Simple.{" "}
						<span style={{ fontStyle: "italic", color: "var(--coral)" }}>
							Connected.
						</span>
					</h2>
				</div>

				<div
					ref={gridRef}
					className={`tj-ethos-grid ${gridVisible ? "is-visible" : ""}`}
					style={{
						display: "grid",
						gridTemplateColumns: "1.1fr 2fr",
						gridTemplateRows: "1fr 1fr",
						gap: 14,
						minHeight: 440,
					}}
				>
					{/* Human — spans full height */}
					<div
						className="tj-stagger-child"
						style={{
							gridRow: "1/3",
							position: "relative",
							background:
								"linear-gradient(160deg,var(--blue-700),var(--green-600))",
							borderRadius: 20,
							padding: "38px 32px",
							overflow: "hidden",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							animationDelay: "0s",
						}}
					>
						<span
							style={{
								fontFamily: MONO,
								fontSize: 11,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "rgba(255,255,255,0.5)",
							}}
						>
							01 · Human
						</span>
						<div>
							<div
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontStyle: "italic",
									fontSize: "clamp(2.8rem,5vw,4.2rem)",
									lineHeight: 0.88,
									color: "#fff",
									marginBottom: 20,
								}}
							>
								Human
							</div>
							<p
								style={{
									color: "rgba(255,255,255,0.75)",
									fontSize: 14.5,
									lineHeight: 1.6,
									margin: 0,
								}}
							>
								Design that respects the person on the other side of the screen
								— their time, their context, their trust.
							</p>
						</div>
					</div>

					{/* Simple */}
					<div
						className="tj-stagger-child"
						style={{
							position: "relative",
							background: "var(--surface)",
							border: "1px solid var(--border)",
							borderRadius: 20,
							padding: "36px 32px",
							overflow: "hidden",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							animationDelay: "0.11s",
						}}
					>
						<span
							style={{
								fontFamily: MONO,
								fontSize: 11,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "var(--text-3)",
							}}
						>
							02 · Simple
						</span>
						<div>
							<div
								style={{
									position: "absolute",
									bottom: 18,
									right: 24,
									fontFamily: SERIF,
									fontWeight: 500,
									fontStyle: "italic",
									fontSize: "clamp(2.2rem,4vw,3.2rem)",
									lineHeight: 0.9,
									color: "rgba(102,179,255,0.11)",
									userSelect: "none",
									pointerEvents: "none",
								}}
							>
								Simple
							</div>
							<div
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "clamp(1.8rem,3vw,2.4rem)",
									lineHeight: 1,
									color: "var(--text)",
									marginBottom: 14,
								}}
							>
								Simple
							</div>
							<p
								style={{
									color: "var(--text-2)",
									fontSize: 14.5,
									lineHeight: 1.6,
									margin: 0,
									position: "relative",
									zIndex: 1,
								}}
							>
								We cut the noise. Fewer steps, clearer paths, and far less to
								learn.
							</p>
						</div>
					</div>

					{/* Connected */}
					<div
						className="tj-stagger-child"
						style={{
							position: "relative",
							background:
								"linear-gradient(135deg,color-mix(in srgb,var(--coral) 11%,var(--surface)),var(--surface))",
							border: "1px solid var(--border)",
							borderRadius: 20,
							padding: "36px 32px",
							overflow: "hidden",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							animationDelay: "0.22s",
						}}
					>
						<span
							style={{
								fontFamily: MONO,
								fontSize: 11,
								letterSpacing: "0.14em",
								textTransform: "uppercase",
								color: "var(--text-3)",
							}}
						>
							03 · Connected
						</span>
						<div>
							<div
								style={{
									position: "absolute",
									bottom: 16,
									right: 22,
									fontFamily: SERIF,
									fontWeight: 500,
									fontStyle: "italic",
									fontSize: "clamp(1.6rem,3vw,2.6rem)",
									lineHeight: 0.9,
									color: "rgba(255,107,107,0.10)",
									userSelect: "none",
									pointerEvents: "none",
								}}
							>
								Connected
							</div>
							<div
								style={{
									fontFamily: SERIF,
									fontWeight: 500,
									fontSize: "clamp(1.8rem,3vw,2.4rem)",
									lineHeight: 1,
									color: "var(--text)",
									marginBottom: 14,
								}}
							>
								Connected
							</div>
							<p
								style={{
									color: "var(--text-2)",
									fontSize: 14.5,
									lineHeight: 1.6,
									margin: 0,
									position: "relative",
									zIndex: 1,
								}}
							>
								Strategy, design, and engineering woven together — never thrown
								over a wall.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Ethos;
