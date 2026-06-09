"use client";

import { Button } from "@relume_io/relume-ui";
import { useReveal } from "../lib/useReveal";

// Smooth scroll to a section by id (matches the Navbar's contact behaviour).
const scrollToSection = (sectionId) => {
	const element = document.getElementById(sectionId);
	if (element) {
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}
};

const tiers = [
	{
		name: "Sprint Package",
		price: "From Rp 3.000.000",
		tagline: "One deliverable. One week.",
		bestFor: "Landing page, brand identity, or rapid prototype (single page)",
		cta: "Get started",
		popular: false,
	},
	{
		name: "Build Package",
		price: "From Rp 8.000.000",
		tagline: "Full product, shipped fast.",
		bestFor: "Website, web app, or rapid prototype (multiple pages)",
		cta: "Get started",
		popular: true,
	},
	{
		name: "Embedded Package",
		price: "Custom pricing",
		tagline: "Ongoing product partner.",
		bestFor: "Monthly retainer, priority access, unlimited scope",
		cta: "Let's talk",
		popular: false,
	},
];

export function Pricing() {
	const [ref, visible] = useReveal();

	return (
		<section id="pricing" className="relative px-[5%] py-16 md:py-24 lg:py-28">
			<div
				ref={ref}
				className={`reveal container mx-auto max-w-7xl ${
					visible ? "is-visible" : ""
				}`}
			>
				{/* Header */}
				<div className="mx-auto mb-12 max-w-2xl text-center md:mb-16 lg:mb-20">
					<div className="flex items-center justify-center mb-6">
						<div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400" />
						{/* The only continuously running animation in this section */}
						<div className="anim-pulse-dot mx-4 w-3 h-3 bg-primary-400 rounded-full" />
						<div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400" />
					</div>
					<p className="mb-3 font-semibold text-primary-300 tracking-wide uppercase md:mb-4">
						What It Costs
					</p>
					<h2 className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
						Transparent pricing. No surprises.
					</h2>
					<p className="md:text-lg text-neutral-200">
						Not sure which fits? DM us your brief — we'll recommend honestly.
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
					{tiers.map((tier, index) => (
						<div
							key={index}
							className={`group relative flex h-full flex-col backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 ${
								tier.popular
									? "border-2 border-primary-400/50 ring-1 ring-primary-400/20"
									: "border border-white/20 hover:border-white/30"
							}`}
						>
							{tier.popular && (
								<div className="absolute -top-3 left-1/2 -translate-x-1/2">
									<span className="inline-flex items-center rounded-full border border-primary-400/30 bg-primary-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-200 backdrop-blur-md">
										Most Popular
									</span>
								</div>
							)}

							<p className="mb-4 text-sm font-semibold uppercase tracking-wide text-primary-300">
								{tier.name}
							</p>

							<div className="mb-6">
								<p className="text-3xl font-bold text-white md:text-4xl">
									{tier.price}
								</p>
								<p className="mt-2 text-neutral-200">{tier.tagline}</p>
							</div>

							<div className="mb-6 h-px w-full bg-white/15" />

							<div className="mb-8">
								<p className="mb-2 text-sm font-semibold uppercase tracking-wide text-neutral-400">
									Best for
								</p>
								<p className="text-neutral-200 leading-relaxed">
									{tier.bestFor}
								</p>
							</div>

							<div className="mt-auto transition-transform duration-200 hover:scale-105 active:scale-95">
								<Button
									className="w-full px-4 py-2.5 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 font-medium cursor-pointer text-sm"
									onClick={() => scrollToSection("contact-us")}
									aria-label={`${tier.cta} — go to contact section`}
								>
									{tier.cta}
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Footnote */}
				<p className="mx-auto mt-10 max-w-2xl text-center text-sm text-neutral-400 md:mt-12">
					All projects include clean handover — source files, documentation, and
					a walkthrough session.
				</p>
			</div>
		</section>
	);
}

export default Pricing;
