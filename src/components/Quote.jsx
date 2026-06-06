"use client";

import { useReveal } from "../lib/useReveal";

export function Quote() {
	const [questionRef, questionVisible] = useReveal();
	const [quoteRef, quoteVisible] = useReveal();

	return (
		<section id="relume" className="flex justify-center items-center">
			<div className="relative z-10 max-w-4xl text-center h-screen flex flex-col justify-center items-center">
				<div
					ref={questionRef}
					className={`reveal mb-12 md:mb-16 ${
						questionVisible ? "is-visible" : ""
					}`}
				>
					<div className="flex items-center justify-center mb-8">
						<div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-400"></div>
						<div className="anim-pulse-dot mx-4 w-3 h-3 bg-primary-500 rounded-full" />
						<div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-400"></div>
					</div>

					<p className="text-xl md:text-2xl font-semibold text-neutral-200 tracking-wide">
						What is the meaning of{" "}
						<span className="font-extrabold">Titik Jalin</span>?
					</p>
				</div>

				<div className="relative">
					<div
						ref={quoteRef}
						className={`reveal relative z-10 ${quoteVisible ? "is-visible" : ""}`}
					>
						<div className="text-2xl md:text-3xl lg:text-4xl leading-[1.4] font-bold text-white mb-8">
							<span className="italic">"</span>Every great creation begins with a
							single&nbsp;
							<span className="relative inline-block">
								<span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text font-extrabold">
									point of inspiration
								</span>
								<div
									className="anim-grow-x absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full"
									style={{ animationDelay: "0.3s" }}
								/>
							</span>
							. From that initial dot, we weave together experiences that flow
							&nbsp;into meaningful connections.
							<span className="italic">"</span>
						</div>

						<div className="flex items-center justify-center">
							<div className="flex flex-col items-center justify-center mt-8">
								<div className="text-center">
									<span className="font-bold">Titik</span>&nbsp;(Dot)
								</div>

								<div className="anim-pulse-dot bg-primary-500 rounded-full" />

								<div className="text-center">
									<span className="font-bold">Jalin</span>&nbsp;(Weave /
									Connection lines)
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Quote;
