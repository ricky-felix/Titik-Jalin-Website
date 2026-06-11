import { useEffect, useState } from "react";

const links = [
	{ href: "#about", label: "About" },
	{ href: "#services", label: "Services" },
	{ href: "#process", label: "Process" },
	{ href: "#work", label: "Work" },
];

// Fixed, scroll-aware navigation. The frosted-glass background is toggled by a
// vanilla scroll listener (replaces the GSAP ScrollTrigger that set
// `data-scrolled` in the original design).
export function Nav() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 70);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			className="tj-nav"
			data-scrolled={scrolled ? "1" : "0"}
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 50,
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "18px clamp(20px,5vw,64px)",
			}}
		>
			<a
				href="#top"
				style={{
					display: "flex",
					alignItems: "center",
					gap: 12,
					textDecoration: "none",
				}}
			>
				<img
					src="/Titik-Jalin-Symbol.webp"
					alt="Titik Jalin"
					style={{
						height: 36,
						width: 36,
						objectFit: "contain",
						borderRadius: 8,
					}}
				/>
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
			</a>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: "clamp(16px,2.4vw,38px)",
				}}
			>
				{links.map((l) => (
					<a
						key={l.href}
						href={l.href}
						className="tj-link tj-link-muted tj-nav-link"
						style={{
							color: "var(--text-2)",
							textDecoration: "none",
							fontSize: 14.5,
							fontWeight: 500,
						}}
					>
						{l.label}
					</a>
				))}
				<a
					href="#contact"
					className="tj-link tj-btn-accent"
					style={{
						display: "inline-flex",
						alignItems: "center",
						gap: 8,
						background: "var(--accent)",
						color: "#fff",
						textDecoration: "none",
						fontSize: 14.5,
						fontWeight: 600,
						padding: "11px 20px",
						borderRadius: 11,
						whiteSpace: "nowrap",
					}}
				>
					Start a sprint
				</a>
			</div>
		</nav>
	);
}

export default Nav;
