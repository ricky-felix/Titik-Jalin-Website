import { useCountUp } from "../../lib/useCountUp";

const SERIF = "'Newsreader', serif";

const stats = [
	{ num: 4, suffix: "+", label: "Products shipped" },
	{ num: 2, suffix: " wk", label: "Idea to prototype" },
	{ num: 3, suffix: "", label: "Ways to work together" },
	{ num: 100, suffix: "%", label: "Remote, from Indonesia" },
];

function Stat({ num, suffix, label }) {
	const [ref, value] = useCountUp(num);
	return (
		<div
			style={{
				padding: "46px 22px 44px",
				borderLeft: "1px solid var(--border)",
			}}
		>
			<div
				style={{
					fontFamily: SERIF,
					fontWeight: 500,
					fontSize: "clamp(2.4rem,4.4vw,3.6rem)",
					lineHeight: 1,
					letterSpacing: "-0.02em",
				}}
			>
				<span ref={ref}>
					{value}
					{suffix}
				</span>
			</div>
			<div
				style={{
					marginTop: 12,
					fontSize: 14.5,
					color: "var(--text-2)",
					maxWidth: "18ch",
				}}
			>
				{label}
			</div>
		</div>
	);
}

export function Stats() {
	return (
		<section
			style={{
				marginTop: "clamp(40px,6vh,72px)",
				borderTop: "1px solid var(--border)",
				borderBottom: "1px solid var(--border)",
				background: "var(--bg-2)",
			}}
		>
			<div
				className="tj-stats-grid"
				style={{
					maxWidth: 1180,
					margin: "0 auto",
					display: "grid",
					gridTemplateColumns: "repeat(4,1fr)",
					padding: "0 clamp(20px,5vw,64px)",
				}}
			>
				{stats.map((s) => (
					<Stat key={s.label} {...s} />
				))}
			</div>
		</section>
	);
}

export default Stats;
