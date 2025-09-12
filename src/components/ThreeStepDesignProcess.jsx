import React, { useEffect, useState } from "react";

const useScroll = () => {
	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		const contentSections = document.querySelectorAll(".content");

		if (contentSections.length === 0) return;

		// Using Intersection Observer for more reliable scroll detection
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Get the index of the intersecting section
						const sectionIndex = Array.from(contentSections).indexOf(
							entry.target
						);
						if (sectionIndex !== -1) {
							setActiveSection(sectionIndex);
						}
					}
				});
			},
			{
				threshold: 0.5, // Trigger when 50% of the section is visible
				rootMargin: "-20% 0px -20% 0px", // Adjust the trigger ea
			}
		);

		// Observe all content sections
		contentSections.forEach((section) => {
			observer.observe(section);
		});

		// Cleanup
		return () => {
			contentSections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, []);

	const getImageClassNames = (index) => {
		const classes = [
			"absolute",
			"inset-0",
			"w-full",
			"h-full",
			"object-cover",
			"transition-opacity",
			"duration-500",
			"ease-in-out",
		];
		if (activeSection === index) {
			classes.push("opacity-100");
		} else {
			classes.push("opacity-0");
		}
		return classes.join(" ");
	};

	return {
		activeSection,
		getImageClassNames,
	};
};

export default function ThreeStepDesignProcess() {
	const { activeSection, getImageClassNames } = useScroll();
	const [imageLoadStates, setImageLoadStates] = useState({});

	const steps = [
		{
			title: "Market Research",
			description:
				"We start by understanding your brand, goals, and target audience through comprehensive research and strategic planning creating a project brief and timeline.",
			image: "./Market_Research.png",
		},
		{
			title: "Design Iterations",
			description:
				"Our creative team develops innovative solutions that align with your brand identity and user experience requirements. We iterate on the design based on stakeholders feedback and testing.",
			image: "./Digital_Moodboard.png",
		},
		{
			title: "Implementation & Testing",
			description:
				"We execute the final design with precision, ensuring seamless implementation and ongoing support for your project. We test the design to ensure it meets needs and expectations.",
			image: "./Implementation_&_Testing.png",
		},
		{
			title: "Project Signoff",
			description:
				"We measure results and optimize performance to ensure your design achieves its intended impact, business objectives, and success outcome.",
			image: "./Meeting_Handshake.png",
		},
	];

	const handleImageLoad = (index) => {
		setImageLoadStates((prev) => ({ ...prev, [index]: "loaded" }));
	};

	const handleImageError = (index) => {
		console.error(
			`Failed to load image for step ${index + 1}: ${steps[index].image}`
		);
		setImageLoadStates((prev) => ({ ...prev, [index]: "error" }));
	};

	return (
		<section id="relume" className="px-[5%]">
			<div className="container">
				<div className="relative grid gap-x-12 py-16 sm:gap-y-12 md:grid-cols-2 md:py-0 lg:gap-x-20">
					<div className="sticky top-0 hidden h-screen md:flex md:flex-col md:items-center md:justify-center">
						<div className="relative w-full max-w-md aspect-square shadow-lg">
							{steps.map((step, index) => (
								<div key={index} className="absolute inset-0 w-full h-full">
									{/* Image */}
									<img
										src={step.image}
										className={getImageClassNames(index)}
										alt={`${step.title} step illustration`}
										loading={index === 0 ? "eager" : "lazy"}
										onLoad={() => handleImageLoad(index)}
										onError={() => handleImageError(index)}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Content Sections */}
					<div className="grid grid-cols-1 gap-12 md:block md:gap-0">
						{steps.map((step, index) => (
							<div key={index} className="content">
								<div className="flex flex-col items-start justify-center md:h-screen">
									<p className="mb-3 font-semibold md:mb-4">Step {index + 1}</p>
									<h2 className="mb-5 md:mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
										{step.title}
									</h2>
									<p className="md:text-md max-w-lg">{step.description}</p>

									{/* Mobile Image */}
									<div className="mt-10 w-full md:hidden lg:hidden">
										<img
											src={step.image}
											className="w-full aspect-[4/3] object-cover"
											alt={`${step.title} step illustration`}
											onError={(e) => {
												e.target.style.display = "none";
												const placeholder = e.target.nextElementSibling;
												if (placeholder) placeholder.style.display = "flex";
											}}
										/>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
