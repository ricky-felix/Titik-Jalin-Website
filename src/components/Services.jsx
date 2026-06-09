"use client";

import { BiCodeAlt, BiPalette, BiLayer, BiSupport } from "react-icons/bi";
import { useReveal } from "../lib/useReveal";

const services = [
	{
		icon: BiPalette,
		title: "Branding & Identity",
		description:
			"Logo, color system, typography, and brand voice — everything you need to show up consistently and professionally from day one.",
	},
	{
		icon: BiLayer,
		title: "Rapid Prototyping",
		description:
			"Interactive prototypes that let you test your idea with real users before committing to a full build. Validate fast, build with confidence.",
	},
	{
		icon: BiCodeAlt,
		title: "Web Design, Development & Testing",
		description:
			"From user flows and wireframes to component-based React builds — designed, developed, and tested end-to-end. WCAG-accessible, Core Web Vitals optimised, and cross-browser ready before launch.",
	},
	{
		icon: BiSupport,
		title: "Website Care, Maintenance & Support",
		description:
			"Ongoing updates, monitoring, and support — we keep your site secure, current, and running smoothly long after launch.",
	},
];

export function Services() {
	const [ref, visible] = useReveal();

	return (
		<section id="services" className="relative px-[5%] py-16 md:py-24 lg:py-28">
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
						What We Do
					</p>
					<h2 className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
						Our Services
					</h2>
					<p className="md:text-lg text-neutral-200">
						From the first dot of an idea to a fully launched product — here's
						how we help you connect the lines.
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<div
								key={index}
								className="group relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/15 hover:border-white/30"
							>
								<div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-400/30 to-accent-400/20 border border-white/20">
									<Icon className="w-7 h-7 text-primary-200" />
								</div>
								<h3 className="mb-3 text-xl font-bold text-white">
									{service.title}
								</h3>
								<p className="text-neutral-200 leading-relaxed">
									{service.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Services;
