import { useReveal } from "../../lib/useReveal";

const MONO = "'JetBrains Mono', monospace";

export function Meaning() {
	const [ref, visible] = useReveal();

	return (
		<section
			id="meaning"
			style={{
				padding:
					"clamp(64px,9vh,104px) clamp(20px,5vw,64px) clamp(80px,11vh,120px)",
				textAlign: "center",
				position: "relative",
				overflow: "hidden",
			}}
		>
			<div
				className="tj-blob"
				style={{
					position: "absolute",
					top: "6%",
					left: "50%",
					marginLeft: -210,
					width: 420,
					height: 420,
					borderRadius: "50%",
					background: "var(--blue)",
					filter: "blur(110px)",
					opacity: "calc(var(--blob-o) * 0.45)",
					zIndex: 0,
					animationDuration: "15s",
				}}
			/>
			<div
				ref={ref}
				className={`tj-reveal ${visible ? "is-visible" : ""}`}
				style={{
					maxWidth: 960,
					margin: "0 auto",
					position: "relative",
					zIndex: 1,
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						margin: "0 auto 40px",
					}}
				>
					<img
						src="/Titik-Jalin-Symbol.webp"
						alt="Titik Jalin symbol"
						style={{
							width: 110,
							height: 80,
							objectFit: "contain",
							borderRadius: 14,
							opacity: 0.92,
						}}
					/>
				</div>
				<div
					style={{
						fontFamily: MONO,
						fontSize: "clamp(14px,1.8vw,18px)",
						letterSpacing: "0.04em",
						color: "var(--text)",
						marginBottom: 38,
					}}
				>
					What is the meaning of Titik Jalin?
				</div>
				<p
					style={{
						fontFamily: "'Hanken Grotesk', sans-serif",
						fontWeight: 700,
						fontSize: "clamp(1.5rem,3.7vw,2.7rem)",
						lineHeight: 1.28,
						letterSpacing: "-0.015em",
						margin: "0 auto",
						maxWidth: "20ch",
					}}
				>
					“Every great creation begins with a single{" "}
					<span
						style={{
							display: "inline",
							backgroundImage:
								"linear-gradient(90deg,var(--blue),var(--coral))",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "0 100%",
							backgroundSize: "100% 3px",
							paddingBottom: 3,
						}}
					>
						point of inspiration.
					</span>{" "}
					From that initial dot, we weave together experiences that flow into
					meaningful connections.”
				</p>
				<div
					style={{
						marginTop: 42,
						fontSize: "clamp(15px,1.8vw,17px)",
						lineHeight: 2,
						color: "var(--text-2)",
					}}
				>
					<div>
						<strong style={{ color: "var(--text)", fontWeight: 700 }}>
							Titik
						</strong>{" "}
						(Dot)
					</div>
					<div>
						<strong style={{ color: "var(--text)", fontWeight: 700 }}>
							Jalin
						</strong>{" "}
						(Weave / Connection lines)
					</div>
				</div>
			</div>
		</section>
	);
}

export default Meaning;
