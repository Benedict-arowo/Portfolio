// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import {
// 	ArrowRight,
// 	Globe,
// 	Mail,
// 	Cpu,
// 	Shield,
// 	Zap,
// 	Github,
// 	Linkedin,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";

// export default function Portfolio() {
// 	const [mounted, setMounted] = useState(false);

// 	useEffect(() => {
// 		setMounted(true);
// 	}, []);

// 	if (!mounted) return null;

// 	return (
// 		<div className="min-h-screen bg-black text-white">
// 			{/* Hero Section */}
// 			<section className="container mx-auto px-4 pt-32 pb-20">
// 				<motion.div
// 					initial={{ opacity: 0, y: 20 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 0.5 }}
// 					className="max-w-3xl">
// 					<h2 className="text-xl font-medium text-primary mb-2">
// 						👋 Hi, I'm Benedict Arowo
// 					</h2>
// 					<h1 className="text-5xl font-bold tracking-tight md:text-7xl">
// 						<span className="text-primary">Full-Stack</span>{" "}
// 						Developer | Aspiring Electrical Engineer
// 					</h1>
// 					<p className="mt-6 text-xl text-zinc-400">
// 						I don't just write code—I build systems that work.
// 						Whether it's software, automation, or engineering, I
// 						focus on efficiency, scalability, and real-world impact.
// 					</p>

// 					<div className="mt-8 space-y-3">
// 						<div className="flex items-start">
// 							<span className="text-primary mr-2">🔹</span>
// 							<p className="text-zinc-300">
// 								<span className="font-medium">
// 									Full-Stack Development
// 								</span>{" "}
// 								– React, Next.js, PostgreSQL, APIs, and more.
// 							</p>
// 						</div>
// 						<div className="flex items-start">
// 							<span className="text-primary mr-2">🔹</span>
// 							<p className="text-zinc-300">
// 								<span className="font-medium">
// 									Cyber & Cloud Enthusiast
// 								</span>{" "}
// 								– Exploring security and scalability.
// 							</p>
// 						</div>
// 						<div className="flex items-start">
// 							<span className="text-primary mr-2">🔹</span>
// 							<p className="text-zinc-300">
// 								<span className="font-medium">
// 									Automation & Efficiency
// 								</span>{" "}
// 								– Streamlining processes through smart systems.
// 							</p>
// 						</div>
// 						<div className="flex items-start">
// 							<span className="text-primary mr-2">🔹</span>
// 							<p className="text-zinc-300">
// 								<span className="font-medium">
// 									Aspiring Electrical Engineer
// 								</span>{" "}
// 								– Learning the foundations of circuits, systems,
// 								and embedded tech.
// 							</p>
// 						</div>
// 					</div>

// 					<p className="mt-8 text-zinc-300">
// 						🎓 First-year Electrical & Electronics Engineering
// 						student at [Your University Name]. I'm learning the
// 						fundamentals now but aiming to master hardware-software
// 						integration in the future.
// 					</p>

// 					<div className="mt-10 flex gap-4">
// 						<Button size="lg" className="group">
// 							View Projects
// 							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
// 						</Button>
// 						<Button size="lg" variant="outline">
// 							Contact Me
// 						</Button>
// 					</div>
// 				</motion.div>
// 			</section>

// 			{/* What I Do Section */}
// 			<section className="container mx-auto px-4 py-20">
// 				<motion.div
// 					initial={{ opacity: 0 }}
// 					whileInView={{ opacity: 1 }}
// 					transition={{ duration: 0.5 }}
// 					viewport={{ once: true }}
// 					className="mb-12">
// 					<h2 className="text-3xl font-bold md:text-4xl">
// 						What I Do
// 					</h2>
// 					<div className="mt-2 h-1 w-20 bg-primary"></div>
// 				</motion.div>

// 				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
// 					{services.map((service, index) => (
// 						<motion.div
// 							key={index}
// 							initial={{ opacity: 0, y: 20 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.5, delay: index * 0.1 }}
// 							viewport={{ once: true }}>
// 							<Card className="border-zinc-800 bg-zinc-900/50 transition-all hover:border-primary/50 h-full">
// 								<CardContent className="p-6">
// 									<div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
// 										{service.icon}
// 									</div>
// 									<h3 className="mb-2 text-xl font-bold">
// 										{service.title}
// 									</h3>
// 									<p className="text-zinc-400">
// 										{service.description}
// 									</p>
// 								</CardContent>
// 							</Card>
// 						</motion.div>
// 					))}
// 				</div>
// 			</section>

// 			{/* Featured Projects */}
// 			<section className="container mx-auto px-4 py-20">
// 				<motion.div
// 					initial={{ opacity: 0 }}
// 					whileInView={{ opacity: 1 }}
// 					transition={{ duration: 0.5 }}
// 					viewport={{ once: true }}
// 					className="mb-12">
// 					<h2 className="text-3xl font-bold md:text-4xl">
// 						Featured Projects
// 					</h2>
// 					<div className="mt-2 h-1 w-20 bg-primary"></div>
// 				</motion.div>

// 				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
// 					{projects.map((project, index) => (
// 						<motion.div
// 							key={index}
// 							initial={{ opacity: 0, y: 20 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							transition={{ duration: 0.5, delay: index * 0.1 }}
// 							viewport={{ once: true }}
// 							className="group">
// 							<Card className="overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 hover:border-primary/50 transition-all h-full">
// 								<CardContent className="p-6">
// 									<div className="flex items-center gap-2 mb-3">
// 										<span
// 											className="text-2xl"
// 											aria-hidden="true">
// 											{project.emoji}
// 										</span>
// 										<h3 className="text-xl font-bold">
// 											{project.title}
// 										</h3>
// 									</div>
// 									<p className="mb-6 text-zinc-400">
// 										{project.description}
// 									</p>
// 									<div className="flex flex-wrap gap-2 mb-6">
// 										{project.technologies.map(
// 											(tech, techIndex) => (
// 												<span
// 													key={techIndex}
// 													className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
// 													{tech}
// 												</span>
// 											)
// 										)}
// 									</div>
// 									<Link
// 										href={project.githubUrl}
// 										target="_blank"
// 										className="text-primary hover:underline inline-flex items-center">
// 										View on GitHub{" "}
// 										<ArrowRight className="ml-1 h-4 w-4" />
// 									</Link>
// 								</CardContent>
// 							</Card>
// 						</motion.div>
// 					))}
// 				</div>

// 				<div className="mt-12 text-center">
// 					<Button variant="outline" size="lg" asChild>
// 						<Link
// 							href="https://github.com/benedictarowo"
// 							target="_blank"
// 							className="inline-flex items-center">
// 							<Github className="mr-2 h-4 w-4" />
// 							More Projects on GitHub
// 						</Link>
// 					</Button>
// 				</div>
// 			</section>

// 			{/* About Me Section */}
// 			<section className="container mx-auto px-4 py-20 bg-zinc-950">
// 				<motion.div
// 					initial={{ opacity: 0 }}
// 					whileInView={{ opacity: 1 }}
// 					transition={{ duration: 0.5 }}
// 					viewport={{ once: true }}
// 					className="max-w-3xl mx-auto">
// 					<h2 className="text-3xl font-bold md:text-4xl mb-8">
// 						About Me
// 					</h2>
// 					<p className="text-xl text-zinc-300 leading-relaxed mb-6">
// 						I thrive on efficiency, clean code, and real-world
// 						problem-solving. While I'm still in my first year of
// 						Electrical & Electronics Engineering, I aim to bridge
// 						the gap between hardware and software, creating smarter,
// 						more efficient systems.
// 					</p>
// 					<p className="text-xl text-zinc-300 leading-relaxed">
// 						Whether it's developing full-stack applications, working
// 						on security-focused platforms, or contributing to
// 						university projects, I approach every challenge with
// 						logic and strategy.
// 					</p>
// 				</motion.div>
// 			</section>

// 			{/* Contact Section */}
// 			<section className="container mx-auto px-4 py-20">
// 				<motion.div
// 					initial={{ opacity: 0 }}
// 					whileInView={{ opacity: 1 }}
// 					transition={{ duration: 0.5 }}
// 					viewport={{ once: true }}
// 					className="rounded-2xl bg-zinc-900 p-8 md:p-12">
// 					<div className="mx-auto max-w-2xl text-center">
// 						<h2 className="text-3xl font-bold md:text-4xl">
// 							Let's Work Together
// 						</h2>
// 						<p className="mt-4 text-zinc-400">
// 							Need a developer who thinks like an engineer? Let's
// 							talk.
// 						</p>
// 						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
// 							<Button
// 								size="lg"
// 								className="group w-full sm:w-auto">
// 								<Mail className="mr-2 h-4 w-4" />
// 								Get In Touch
// 								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
// 							</Button>
// 							<Button
// 								size="lg"
// 								variant="outline"
// 								className="w-full sm:w-auto"
// 								asChild>
// 								<Link
// 									href="https://linkedin.com/in/"
// 									target="_blank"
// 									className="inline-flex items-center">
// 									<Linkedin className="mr-2 h-4 w-4" />
// 									LinkedIn
// 								</Link>
// 							</Button>
// 						</div>
// 						<p className="mt-8 text-zinc-400">
// 							📧 [Your Email] | 💼{" "}
// 							<Link
// 								href="https://linkedin.com/in/"
// 								className="text-primary hover:underline">
// 								LinkedIn
// 							</Link>{" "}
// 							| 📍 Open to opportunities
// 						</p>
// 					</div>
// 				</motion.div>
// 			</section>

// 			{/* Footer */}
// 			<footer className="border-t border-zinc-800 py-8">
// 				<div className="container mx-auto px-4 text-center text-zinc-500">
// 					<p>
// 						© {new Date().getFullYear()} Benedict Arowo | Designed &
// 						Built with ❤️
// 					</p>
// 				</div>
// 			</footer>
// 		</div>
// 	);
// }

// const services = [
// 	{
// 		title: "Full-Stack Development",
// 		description:
// 			"Building complete web applications with React, Next.js, PostgreSQL, and modern APIs for seamless user experiences.",
// 		icon: <Globe className="h-6 w-6 text-primary" />,
// 	},
// 	{
// 		title: "Cyber & Cloud",
// 		description:
// 			"Implementing secure, scalable cloud infrastructure with best practices for modern web applications.",
// 		icon: <Shield className="h-6 w-6 text-primary" />,
// 	},
// 	{
// 		title: "Automation & Efficiency",
// 		description:
// 			"Creating systems that streamline processes and boost productivity through smart, scalable solutions.",
// 		icon: <Zap className="h-6 w-6 text-primary" />,
// 	},
// 	{
// 		title: "Electrical Engineering",
// 		description:
// 			"Learning the foundations of circuits, systems, and embedded technology to bridge hardware and software.",
// 		icon: <Cpu className="h-6 w-6 text-primary" />,
// 	},
// ];

// const projects = [
// 	{
// 		title: "Password Manager App",
// 		emoji: "🔥",
// 		description:
// 			"A secure password manager for storing and managing credentials with end-to-end encryption.",
// 		technologies: ["React", "Node.js", "Express", "MongoDB", "Crypto"],
// 		githubUrl: "https://github.com/benedictarowo/password-manager",
// 	},
// 	{
// 		title: "Crystal Wheels",
// 		emoji: "🚗",
// 		description:
// 			"A vehicle rental system built for seamless bookings and management with real-time availability.",
// 		technologies: [
// 			"Next.js",
// 			"TypeScript",
// 			"PostgreSQL",
// 			"Stripe",
// 			"Tailwind",
// 		],
// 		githubUrl: "https://github.com/benedictarowo/crystal-wheels",
// 	},
// 	{
// 		title: "Marketplace Remake",
// 		emoji: "🛍️",
// 		description:
// 			"A refined, feature-rich version of my student marketplace app with improved UI and functionality.",
// 		technologies: ["React", "Firebase", "Redux", "Styled Components"],
// 		githubUrl: "https://github.com/benedictarowo/marketplace-remake",
// 	},
// 	{
// 		title: "BlackPoint",
// 		emoji: "🔑",
// 		description:
// 			"A security-focused system with advanced authentication mechanisms and role-based access control.",
// 		technologies: ["Node.js", "Express", "JWT", "MongoDB", "React"],
// 		githubUrl: "https://github.com/benedictarowo/blackpoint",
// 	},
// 	{
// 		title: "Scissor",
// 		emoji: "✂️",
// 		description:
// 			"A URL-shortening platform with analytics and user management. Capstone project with comprehensive features.",
// 		technologies: [
// 			"Next.js",
// 			"PostgreSQL",
// 			"Prisma",
// 			"Chart.js",
// 			"Auth.js",
// 		],
// 		githubUrl: "https://github.com/benedictarowo/scissor",
// 	},
// 	{
// 		title: "Opeyemi AI",
// 		emoji: "📢",
// 		description:
// 			"An affiliate marketing system with automated commission tracking and payment processing.",
// 		technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
// 		githubUrl: "https://github.com/benedictarowo/opeyemi-ai",
// 	},
// 	{
// 		title: "University Result Checker",
// 		emoji: "🏫",
// 		description:
// 			"Helping develop a university result-checking system to streamline student performance tracking.",
// 		technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
// 		githubUrl: "https://github.com/benedictarowo/result-checker",
// 	},
// ];

export default function Page() {
	return <h1>Hello Next.js!</h1>;
}
