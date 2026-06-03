"use client";

import { motion } from "framer-motion";
import { BiCodeAlt, BiPalette, BiLayout, BiTrendingUp } from "react-icons/bi";

const services = [
	{
		icon: BiCodeAlt,
		title: "Web Design & Development",
		description:
			"Responsive, fast, and accessible websites — designed and built from the ground up, then tested across devices before they go live.",
	},
	{
		icon: BiPalette,
		title: "Branding & Identity",
		description:
			"Logos, visual systems, and brand guidelines that give your business a clear, memorable, and consistent voice.",
	},
	{
		icon: BiLayout,
		title: "UI/UX Design",
		description:
			"Wireframes, prototypes, and user flows shaped through fast iteration — interfaces that feel effortless to use.",
	},
	{
		icon: BiTrendingUp,
		title: "Digital Strategy",
		description:
			"Guidance for businesses, startups, and growing enterprises navigating digital transformation with purpose.",
	},
];

export function Services() {
	return (
		<section id="services" className="relative px-[5%] py-16 md:py-24 lg:py-28">
			<div className="container mx-auto max-w-7xl">
				{/* Header */}
				<div className="mx-auto mb-12 max-w-2xl text-center md:mb-16 lg:mb-20">
					<div className="flex items-center justify-center mb-6">
						<div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400" />
						<motion.div
							className="mx-4 w-3 h-3 bg-primary-400 rounded-full"
							animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
							transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
						/>
						<div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400" />
					</div>
					<p className="mb-3 font-semibold text-primary-300 tracking-wide uppercase md:mb-4">
						What We Do
					</p>
					<h2 className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl text-white">
						Our Services
					</h2>
					<p className="md:text-lg text-neutral-200">
						From the first dot of an idea to a fully launched product — here's how
						we help you connect the lines.
					</p>
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
					{services.map((service, index) => {
						const Icon = service.icon;
						return (
							<motion.div
								key={index}
								className="group relative h-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl transition-all duration-500 hover:bg-white/15 hover:border-white/30"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-80px" }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								whileHover={{ y: -8 }}
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
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Services;
