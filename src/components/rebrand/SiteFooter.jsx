const MONO = "'JetBrains Mono', monospace";
const SERIF = "'Newsreader', serif";

const linkStyle = {
	color: "var(--text-2)",
	textDecoration: "none",
	fontSize: 14.5,
};

const colLabel = {
	fontFamily: MONO,
	fontSize: 11,
	letterSpacing: "0.12em",
	textTransform: "uppercase",
	color: "var(--text-3)",
	marginBottom: 4,
};

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer style={{ padding: "64px clamp(20px,5vw,64px) 40px" }}>
			<div style={{ maxWidth: 1180, margin: "0 auto" }}>
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						gap: 40,
						paddingBottom: 48,
						borderBottom: "1px solid var(--border)",
					}}
				>
					<div style={{ maxWidth: "30ch" }}>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: 12,
								marginBottom: 16,
							}}
						>
							<img
								src="/Titik-Jalin-Symbol.webp"
								alt="Titik Jalin"
								style={{
									height: 40,
									width: 40,
									objectFit: "contain",
									borderRadius: 8,
								}}
							/>
							<div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
								<span
									style={{
										fontFamily: "'Hanken Grotesk', sans-serif",
										fontWeight: 700,
										fontSize: 13.5,
										letterSpacing: "0.2em",
										color: "#66b3ff",
										lineHeight: 1,
									}}
								>
									TITIK JALIN
								</span>
							</div>
						</div>
						<p
							style={{
								fontFamily: SERIF,
								fontStyle: "italic",
								fontSize: "1.35rem",
								lineHeight: 1.3,
								color: "var(--text-2)",
								margin: 0,
							}}
						>
							We connect. You experience.
						</p>
					</div>

					<div
						style={{
							display: "flex",
							gap: "clamp(40px,8vw,90px)",
							flexWrap: "wrap",
						}}
					>
						<div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
							<span style={colLabel}>Studio</span>
							<a
								href="#services"
								className="tj-link tj-link-muted"
								style={linkStyle}
							>
								Services
							</a>
							<a
								href="#process"
								className="tj-link tj-link-muted"
								style={linkStyle}
							>
								Process
							</a>
							<a
								href="#work"
								className="tj-link tj-link-muted"
								style={linkStyle}
							>
								Work
							</a>
						</div>
						<div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
							<span style={colLabel}>Connect</span>
							<a
								href="mailto:titikjalin@outlook.co.id"
								className="tj-link tj-link-muted"
								style={linkStyle}
							>
								Email
							</a>
							<a
								href="https://www.linkedin.com/company/108687372/"
								target="_blank"
								rel="noopener noreferrer"
								className="tj-link tj-link-muted"
								style={linkStyle}
							>
								LinkedIn
							</a>
							<a
								href="https://www.instagram.com/titikjalin"
								target="_blank"
								rel="noopener noreferrer"
								className="tj-link tj-link-muted"
								style={linkStyle}
							>
								Instagram
							</a>
						</div>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-between",
						gap: 14,
						paddingTop: 26,
						fontSize: 13,
						color: "var(--text-3)",
					}}
				>
					<span>© {year} Titik Jalin · Human, Simple, Connected</span>
					<span style={{ fontFamily: MONO, letterSpacing: "0.04em" }}>
						Remote · from Indonesia 🇮🇩
					</span>
				</div>
			</div>
		</footer>
	);
}

export default SiteFooter;
