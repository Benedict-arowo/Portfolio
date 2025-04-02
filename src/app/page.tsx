"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Globe,
	Mail,
	Cpu,
	Shield,
	Zap,
	Github,
	Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

type ProjectDetails = {
	name: string;
	emoji: string;
	title: string;
	description: string;
	longDescription: string;
	features: string[];
	challenges: string[];
	technologies: string[];
	githubUrl: string | null;
	liveUrl: string | null;
	images: string[];
	language: string;
	lastUpdated: string;
	work_experience: boolean;
};
const projectsData: Record<string, ProjectDetails> = {
	"password-manager": {
		name: "password-manager",
		emoji: "🔥",
		title: "Password Manager App",
		description:
			"A secure password manager built as a CS50 Web Capstone project with end-to-end encryption.",
		longDescription:
			"A highly secure password manager web application built with Django, HTML, JavaScript, and Tailwind CSS. It allows users to create accounts, manage credentials within folders, and encrypt sensitive data (passwords and hints) using Fernet. The app leverages dynamic JavaScript enhancements for a responsive, mobile-friendly experience.",
		features: [
			"Account registration and login with encrypted password hints",
			"Folder and credential management with dynamic UI",
			"End-to-end encryption of stored data using Fernet",
			"Secure password generation and copy-to-clipboard functionality",
			"Responsive design with mobile-friendly JavaScript enhancements",
		],
		challenges: [
			"Implementing robust encryption without performance drawbacks",
			"Building a secure yet user-friendly authentication flow",
			"Managing modular functionality with multiple Django apps and models",
			"Ensuring a responsive, dynamic UI across devices",
		],
		technologies: [
			"Django",
			"Python",
			"HTML",
			"JavaScript",
			"Tailwind CSS",
			"Fernet",
		],
		githubUrl: "https://github.com/Benedict-arowo/Password-Manager-App",
		liveUrl: "https://password-manager-app-s5rf.onrender.com/auth/",
		images: [
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743479851/portfolio/password-manager/vjnrkekvn5weya7rdjpg.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743479851/portfolio/password-manager/xgzkhcfwnaqa5rubuoqz.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743479851/portfolio/password-manager/lh1mgzjm3ddlcpqiyobl.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743479850/portfolio/password-manager/qbqkgckggoinf51lta40.png",
			// "https://www.youtube.com/watch?v=N07PgXOyiP4",
		],
		language: "Python",
		lastUpdated: "Not provided",
		work_experience: false,
	},
	"crystal-wheels": {
		name: "crystal-wheels",
		emoji: "🚗",
		title: "Crystal Wheels",
		description: "A vehicle rental system with real-time availability.",
		longDescription:
			"Crystal Wheels is an intuitive vehicle rental platform that enables users to book and manage vehicles seamlessly. With real-time availability tracking and secure payment integration, it ensures a smooth rental experience.",
		features: [
			"Real-time vehicle availability tracking",
			"Secure booking and payment system",
			"User reviews and ratings for rentals",
			"Admin dashboard for vehicle management",
			"Responsive and modern UI",
		],
		challenges: [
			"Developing a robust real-time tracking system",
			"Handling large-scale booking requests efficiently",
			"Ensuring a seamless and secure payment process",
			"Building a scalable architecture for future expansion",
		],
		technologies: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Stripe",
			"Tailwind",
		],
		githubUrl: null,
		liveUrl: "https://crystalwheeldeal.com/",
		images: [
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476772/portfolio/crystal-wheel/jx95xl4vzdpp1rcj0ifx.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476771/portfolio/crystal-wheel/tgy6xccoq25s9onjiwkm.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476771/portfolio/crystal-wheel/dpimq63aboi7lirxvryv.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476771/portfolio/crystal-wheel/mcvgbzcpbyytycejk2hb.png",
		],
		language: "TypeScript",
		lastUpdated: "2024-02-18",
		work_experience: true,
	},
	unimart: {
		name: "UniMart",
		emoji: "🛍️",
		title: "UniMart",
		description: "A feature-rich student marketplace with amazing UI.",
		longDescription:
			"A student-focused marketplace platform designed for the university community, enabling sellers to onboard via a subscription fee, list products with detailed descriptions and multiple images, and create customizable storefronts with unique URLs. Built with NextJS on the client-side for a dynamic and responsive experience and ExpressJS on the backend for robust API handling, this platform streamlines product search, real-time messaging between buyers and sellers, and secure transactions.",
		features: [
			"Seller onboarding with subscription-based access",
			"Product listings with detailed descriptions and multiple images",
			"Real-time messaging between buyers and sellers",
			"Advanced search and filtering options",
			"Customizable storefronts with unique URLs for targeted advertising",
		],
		challenges: [
			"Developing a responsive and engaging UI with NextJS",
			"Optimizing search functionality for fast and accurate results",
			"Implementing a secure and reliable real-time messaging system",
			"Integrating subscription management and personalized storefront features",
		],
		technologies: [
			"NextJS",
			"ExpressJS",
			"NodeJS",
			"Context API",
			"ShadCN",
			"Prisma",
			"Postgres",
			"Cloudinary",
			"Web Socket",
			"Typescript",
		],
		githubUrl: "https://github.com/Benedict-arowo/UniMart",
		liveUrl: null,
		images: [
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480658/portfolio/unimart/mr0c5nsdu3cjotywiq5j.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480658/portfolio/unimart/rsjwd0ntyqeryudf90ih.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480658/portfolio/unimart/qnro91a7bcnargd6i7mc.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480657/portfolio/unimart/q33xl11lfca7h6khnru6.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480657/portfolio/unimart/andiruqglmxqaef8wnib.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480657/portfolio/unimart/brzdoee1mpavzt8mkgjr.png",
		],
		language: "JavaScript",
		lastUpdated: "2024-03-10",
		work_experience: false,
	},
	"student-test-recovery": {
		name: "student-test-recovery",
		emoji: "📜",
		title: "Student Test Recovery System",
		description:
			"Flask-based solution that matches student phone numbers to identities, saving 800+ students from retaking a test.",
		longDescription:
			"Developed in response to a critical university testing error where student names were omitted from the Google Forms submissions, this Flask web application empowers administrators to upload two Excel files—one containing attendance records (with student names, phone numbers, and departments) and another with test scores linked to phone numbers. Using Python and OpenPyXL, the system automates the matching process by normalizing phone number formats, accurately linking test scores to the correct students, and generating a comprehensive Excel report that highlights both matched results and unmatched records. This solution spared over 800 students from the burden of retaking their tests while streamlining the administrative recovery process.",
		features: [
			"Flask-based web interface for secure file uploads",
			"Excel file processing and data extraction using OpenPyXL",
			"Automated matching of student records via normalized phone numbers",
			"Generation of detailed Excel reports with matched scores and unmatched entries",
			"User-friendly design tailored for quick and accurate recovery operations",
		],
		challenges: [
			"Accurately matching records despite inconsistent phone number formats",
			"Handling duplicate entries and data inconsistencies in Excel files",
			"Optimizing processing speed for large datasets",
			"Designing an intuitive UI for non-technical users under time constraints",
		],
		technologies: ["Python", "Flask", "OpenPyXL"],
		githubUrl: "https://github.com/Benedict-arowo/French",
		liveUrl: "https://frenchscores.onrender.com/",
		images: [
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743478816/portfolio/french/cekuwtedfq0beps7sqrq.png",
		],
		language: "Python",
		lastUpdated: "2024-03-30",
		work_experience: true,
	},
	"scissor-capstone-project": {
		name: "scissor-capstone-project",
		emoji: "✂️",
		title: "Scissor - URL Shortening Application",
		description:
			"A web application that shortens long URLs into concise links for easier sharing and tracking.",
		longDescription:
			"Scissor is a full-stack web application designed to condense lengthy URLs into shorter, more manageable links. Built with a modern tech stack, it offers users a seamless experience in generating and managing shortened URLs.",
		features: [
			"User authentication and profile management",
			"URL shortening with custom aliases",
			"Analytics dashboard to track link performance",
			"QR code generation for shortened URLs",
			"Responsive design for optimal viewing on all devices",
		],
		challenges: [
			"Ensuring the uniqueness of shortened URLs",
			"Implementing robust security measures for user data",
			"Designing an intuitive and user-friendly interface",
			"Scaling the application to handle a large number of requests",
		],
		technologies: [
			"Next.js",
			"Express.js",
			"TypeScript",
			"Prisma",
			"PostgreSQL",
			"Tailwind CSS",
		],
		githubUrl:
			"https://github.com/Benedict-arowo/Scissor---Capstone-Project",
		liveUrl: "https://scissor-capstone-project-five.vercel.app",
		images: [
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480157/portfolio/scissor/uv7xn6vsq9ouwv8kx7vg.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480157/portfolio/scissor/cmmpqkhfifa7ija0raa0.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480157/portfolio/scissor/pttfvmidzlwxbtnx526d.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743480157/portfolio/scissor/uut8k53j9syes1mziapu.png",
		],
		language: "TypeScript",
		lastUpdated: "2024-03-15",
		work_experience: false,
	},
	blackpoint: {
		name: "blackpoint",
		emoji: "🔐",
		title: "Blackpoint",
		description:
			"A decentralized peer-to-peer (P2P) marketplace that enables users to trade currencies (both fiat and crypto), digital assets, and virtual goods directly with other traders without intermediaries.",
		longDescription:
			"Blackpoint is a cutting-edge decentralized marketplace designed to empower individuals by enabling direct peer-to-peer trading of both fiat and crypto currencies, digital assets, and virtual goods. It leverages top-notch security features such as multi-factor authentication, encryption, and role-based access control, ensuring a safe trading environment. The platform is built using modern technologies including React for the frontend, while ExpressJS and MongoDB provide a robust and scalable backend.",
		features: [
			"Multi-factor authentication (MFA) for secure user login",
			"Role-based access control (RBAC) to manage user permissions",
			"Real-time security alerts to prevent fraud and unauthorized access",
			"Session tracking with automatic logout to enhance account protection",
			"Encrypted storage to safeguard sensitive user information",
		],
		challenges: [
			"Developing a robust and user-friendly authentication system that is both secure and seamless",
			"Ensuring the real-time functionality of the platform, especially for security logging and alerting, without affecting performance",
			"Securing user data by implementing advanced database encryption techniques and maintaining data integrity",
			"Balancing the need for strong security with usability to avoid frustrating users with overly complex processes",
		],
		technologies: [
			"React",
			"ExpressJS",
			"NodeJS",
			"MongoDB",
			"Socket.io",
			"Passport.js",
			"JWT",
			"Cloudinary",
			"TypeScript",
		],
		githubUrl: null,
		liveUrl: "https://blackpoint.market/",
		images: [
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743475912/portfolio/blackpoint/f2hw2an1cmlrxvartegj.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743475930/portfolio/blackpoint/wzf53kiagt9dilewdxgq.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476788/portfolio/blackpoint/chxosvpaakaupxcs80v8.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476417/portfolio/blackpoint/hcmcpjtxsfi4xevafaer.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476416/portfolio/blackpoint/snciuzjsxxiygbh0ugji.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743475968/portfolio/blackpoint/nhnjyu9tr2jziriieegl.png",
		],
		language: "TypeScript",
		lastUpdated: "2024-03-31",
		work_experience: true,
	},
	"opeyemi-ai": {
		name: "opeyemi-ai",
		emoji: "💼",
		title: "OpeyemiAI",
		description:
			"An affiliate marketing website with commission-based earnings and user referral levels.",
		longDescription:
			"OpeyemiAI is a structured affiliate marketing platform where users earn commissions through direct sales and referral levels. The system integrates a structured referral tree, commission tracking, and a badge system for ranking users. Built with ReactJS on the frontend and ExpressJS on the backend, it ensures seamless performance and real-time commission updates. The platform requires a ₦10,000 registration fee, handled via Moniepoint API, before users can withdraw commissions.",
		features: [
			"Service/product listing for affiliate sales",
			"Registration payment integration with Moniepoint API",
			"Payment confirmation and pending status page",
			"Affiliate marketing system with product referral links",
			"Multi-level referral tree tracking (downline 1-6)",
			"User badge ranking system based on earnings",
			"Admin dashboard for managing users, commissions, and withdrawals",
			"Secure withdrawal request system for commissions",
		],
		challenges: [
			"Implementing a scalable multi-level referral system",
			"Ensuring secure and seamless payment integration with Moniepoint API",
			"Managing real-time commission updates and earnings tracking",
			"Balancing security and accessibility in the authentication system",
		],
		technologies: [
			"ReactJS",
			"ExpressJS",
			"NodeJS",
			"MongoDB",
			"JWT Authentication",
			"TailwindCSS",
			"Vite",
			"Axios",
			"Framer Motion",
			"Moniepoint API",
		],
		githubUrl: null,
		liveUrl: null,
		images: [
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476439/portfolio/opeyemi-ai/wapddvzmapqphmx0fv7m.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476436/portfolio/opeyemi-ai/mzknrf5ukjs2xoqtz2ly.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476436/portfolio/opeyemi-ai/g7vaq3morx0fu9pnnsrh.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476434/portfolio/opeyemi-ai/encffjkjgr7liv4n4h3x.png",
			"https://res.cloudinary.com/dctbkswpr/image/upload/v1743476434/portfolio/opeyemi-ai/smqyznjsvoucyjfaa5r6.png",
		],
		language: "JavaScript",
		lastUpdated: "2024-04-01",
		work_experience: true,
	},
	"university-result-checker": {
		name: "resultchecker",
		emoji: "📊",
		title: "University Result Checker",
		description:
			"A modern and user-friendly university result checking system.",
		longDescription:
			"This result checking system provides a seamless and intuitive experience for students to access their academic results. The platform ensures fast result retrieval, responsive design, and a user-friendly interface. Built with Django for both the frontend and backend, utilizing TailwindCSS for a clean and modern UI.",
		features: [
			"Fast and efficient result retrieval system",
			"Modern UI with TailwindCSS",
			"Secure login for students",
			"Responsive design for mobile and desktop",
			"Backend management for result updates and student records",
		],
		challenges: [
			"Implementing a responsive and visually appealing UI with TailwindCSS",
			"Ensuring secure authentication for student result access",
			"Optimizing database queries for fast result retrieval",
		],
		technologies: [
			"Django",
			"TailwindCSS",
			"PostgreSQL",
			"JavaScript",
			"HTML",
		],
		githubUrl: "https://github.com/olanipekun01/resultchecker",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		language: "Python",
		lastUpdated: "2024-03-10",
		work_experience: false,
	},
};

export default function Portfolio() {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Hero Section */}
			<section className="container mx-auto px-4 pt-32 pb-20">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-3xl">
					<h2 className="text-xl font-medium text-primary mb-2">
						👋 Hi, I'm Benedict Arowojolu-Alagwe
					</h2>
					<h1 className="text-5xl font-bold tracking-tight md:text-7xl">
						<span className="text-primary">Full-Stack</span>{" "}
						Developer | Aspiring Electrical Engineer
					</h1>
					<p className="mt-6 text-xl text-zinc-400">
						I don't just write code—I build systems that work.
						Whether it's software, automation, or engineering, I
						focus on efficiency, scalability, and real-world impact.
					</p>

					<div className="mt-8 space-y-3">
						<div className="flex items-start">
							<span className="text-primary mr-2">🔹</span>
							<p className="text-zinc-300">
								<span className="font-medium">
									Full-Stack Development
								</span>{" "}
								– React, Next.js, PostgreSQL, APIs, and more.
							</p>
						</div>
						<div className="flex items-start">
							<span className="text-primary mr-2">🔹</span>
							<p className="text-zinc-300">
								<span className="font-medium">
									Cyber & Cloud Enthusiast
								</span>{" "}
								– Exploring security and scalability.
							</p>
						</div>
						<div className="flex items-start">
							<span className="text-primary mr-2">🔹</span>
							<p className="text-zinc-300">
								<span className="font-medium">
									Automation & Efficiency
								</span>{" "}
								– Streamlining processes through smart systems.
							</p>
						</div>
						<div className="flex items-start">
							<span className="text-primary mr-2">🔹</span>
							<p className="text-zinc-300">
								<span className="font-medium">
									Aspiring Electrical Engineer
								</span>{" "}
								– Learning the foundations of circuits, systems,
								and embedded tech.
							</p>
						</div>
					</div>

					<p className="mt-8 text-zinc-300">
						🎓 Electrical & Electronics Engineering student at{" "}
						<Link
							href={"https://achievers.edu.ng/"}
							className="underline">
							Achievers University.
						</Link>{" "}
						I'm learning the fundamentals now but aiming to master
						hardware-software integration in the future.
					</p>

					<div className="mt-10 flex gap-4">
						<Button size="lg" className="group">
							<Link href={"#projects"}>View Projects</Link>
							<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
						</Button>
						<Button size="lg" variant="outline">
							<Link href={"#contact"}>Contact Me</Link>
						</Button>
					</div>
				</motion.div>
			</section>

			{/* What I Do Section */}
			<section className="container mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-12">
					<h2 className="text-3xl font-bold md:text-4xl">
						What I Do
					</h2>
					<div className="mt-2 h-1 w-20 bg-primary"></div>
				</motion.div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<Card className="border-zinc-800 bg-zinc-900/50 transition-all hover:border-primary/50 h-full">
								<CardContent className="p-6">
									<div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
										{service.icon}
									</div>
									<h3 className="mb-2 text-xl font-bold">
										{service.title}
									</h3>
									<p className="text-zinc-400">
										{service.description}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</section>

			{/* Work Experience */}
			<section className="projects container mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-12">
					<h2 className="text-3xl font-bold md:text-4xl">
						Work Experience
					</h2>
					<div className="mt-2 h-1 w-20 bg-primary"></div>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* {projectsData
						.filter((project) => project.work_experience)
						.map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								viewport={{ once: true }}
								className="group">
								<Card className="overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 hover:border-primary/50 transition-all h-full">
									<CardContent className="p-6">
										<div className="flex items-center gap-2 mb-3">
											<span
												className="text-2xl"
												aria-hidden="true">
												{project.emoji}
											</span>
											<h3 className="text-xl font-bold">
												{project.title}
											</h3>
										</div>
										<p className="mb-6 text-zinc-400">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-6">
											{project.technologies.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
														{tech}
													</span>
												)
											)}
										</div>
										<Link
											href={`/projects/${project.name}`}
											className="text-primary hover:underline inline-flex items-center">
											View More{" "}
											<ArrowRight className="ml-1 h-4 w-4" />
										</Link>
									</CardContent>
								</Card>
							</motion.div>
						))} */}

					{Object.values(projectsData)
						.filter((project) => project.work_experience)
						.map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								viewport={{ once: true }}
								className="group">
								<Card className="overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 hover:border-primary/50 transition-all h-full">
									<CardContent className="p-6">
										<div className="flex items-center gap-2 mb-3">
											<span
												className="text-2xl"
												aria-hidden="true">
												{project.emoji}
											</span>
											<h3 className="text-xl font-bold">
												{project.title}
											</h3>
										</div>
										<p className="mb-6 text-zinc-400">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-6">
											{project.technologies.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
														{tech}
													</span>
												)
											)}
										</div>
										<Link
											href={`/projects/${project.name}`}
											className="text-primary hover:underline inline-flex items-center">
											View More{" "}
											<ArrowRight className="ml-1 h-4 w-4" />
										</Link>
									</CardContent>
								</Card>
							</motion.div>
						))}
				</div>
			</section>

			{/* Featured Projects */}
			<section className="projects container mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="mb-12">
					<h2 className="text-3xl font-bold md:text-4xl">
						Featured Projects
					</h2>
					<div className="mt-2 h-1 w-20 bg-primary"></div>
				</motion.div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* {projectsData
						.filter((project) => !project.work_experience)
						.map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								viewport={{ once: true }}
								className="group">
								<Card className="overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 hover:border-primary/50 transition-all h-full">
									<CardContent className="p-6">
										<div className="flex items-center gap-2 mb-3">
											<span
												className="text-2xl"
												aria-hidden="true">
												{project.emoji}
											</span>
											<h3 className="text-xl font-bold">
												{project.title}
											</h3>
										</div>
										<p className="mb-6 text-zinc-400">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-6">
											{project.technologies.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
														{tech}
													</span>
												)
											)}
										</div>
										<Link
											href={`/projects/${project.name}`}
											className="text-primary hover:underline inline-flex items-center">
											View More{" "}
											<ArrowRight className="ml-1 h-4 w-4" />
										</Link>
									</CardContent>
								</Card>
							</motion.div>
						))} */}

					{Object.values(projectsData)
						.filter((project) => !project.work_experience)
						.map((project, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								viewport={{ once: true }}
								className="group">
								<Card className="overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 hover:border-primary/50 transition-all h-full">
									<CardContent className="p-6">
										<div className="flex items-center gap-2 mb-3">
											<span
												className="text-2xl"
												aria-hidden="true">
												{project.emoji}
											</span>
											<h3 className="text-xl font-bold">
												{project.title}
											</h3>
										</div>
										<p className="mb-6 text-zinc-400">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2 mb-6">
											{project.technologies.map(
												(tech, techIndex) => (
													<span
														key={techIndex}
														className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
														{tech}
													</span>
												)
											)}
										</div>
										<Link
											href={`/projects/${project.name}`}
											className="text-primary hover:underline inline-flex items-center">
											View More{" "}
											<ArrowRight className="ml-1 h-4 w-4" />
										</Link>
									</CardContent>
								</Card>
							</motion.div>
						))}
				</div>

				<div className="mt-12 text-center">
					<Button variant="outline" size="lg" asChild>
						<Link
							href="https://github.com/Benedict-arowo"
							target="_blank"
							className="inline-flex items-center">
							<Github className="mr-2 h-4 w-4" />
							More Projects on GitHub
						</Link>
					</Button>
				</div>
			</section>

			{/* About Me Section */}
			<section className="container mx-auto px-4 py-20 bg-zinc-950">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold md:text-4xl mb-8">
						About Me
					</h2>
					<p className="text-xl text-zinc-300 leading-relaxed mb-6">
						I thrive on efficiency, clean code, and real-world
						problem-solving. While I'm still in my first year of
						Electrical & Electronics Engineering, I aim to bridge
						the gap between hardware and software, creating smarter,
						more efficient systems.
					</p>
					<p className="text-xl text-zinc-300 leading-relaxed">
						Whether it's developing full-stack applications, working
						on security-focused platforms, or contributing to
						university projects, I approach every challenge with
						logic and strategy.
					</p>
				</motion.div>
			</section>

			{/* Contact Section */}
			<section className="contact container mx-auto px-4 py-20">
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="rounded-2xl bg-zinc-900 p-8 md:p-12">
					<div className="mx-auto max-w-2xl text-center">
						<h2 className="text-3xl font-bold md:text-4xl">
							Let's Work Together
						</h2>
						<p className="mt-4 text-zinc-400">
							Need a developer who thinks like an engineer? Let's
							talk.
						</p>
						<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
							<Button
								size="lg"
								className="group w-full sm:w-auto">
								<Mail className="mr-2 h-4 w-4" />
								<Link href={"mailto:benedict.arowo@gmail.com"}>
									Get In Touch
								</Link>
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="w-full sm:w-auto"
								asChild>
								<Link
									href="https://www.linkedin.com/in/benedict-arowo/"
									target="_blank"
									className="inline-flex items-center">
									<Linkedin className="mr-2 h-4 w-4" />
									LinkedIn
								</Link>
							</Button>
						</div>
						<p className="mt-8 text-zinc-400">
							📧{" "}
							<Link
								className=" hover:underline"
								href="mailto:benedict.arowo@gmail.com">
								benedict.arowo@gmail.com
							</Link>{" "}
							| 💼{" "}
							<Link
								href="https://www.linkedin.com/in/benedict-arowo/"
								className="text-primary hover:underline">
								LinkedIn
							</Link>{" "}
							| 📍 Open to opportunities
						</p>
					</div>
				</motion.div>
			</section>

			{/* Footer */}
			<footer className="border-t border-zinc-800 py-8">
				<div className="container mx-auto px-4 text-center text-zinc-500">
					<p>
						© {new Date().getFullYear()} AROWOJOLU-ALAGWE Benedict |
						Designed & Built with ❤️
					</p>
				</div>
			</footer>
		</div>
	);
}

const services = [
	{
		title: "Full-Stack Development",
		description:
			"Building complete web applications with React, Next.js, PostgreSQL, and modern APIs for seamless user experiences.",
		icon: <Globe className="h-6 w-6 text-primary" />,
	},
	{
		title: "Learning Rust",
		description:
			"Exploring Rust from the ground up to build efficient, memory-safe, and high-performance applications.",
		icon: <Shield className="h-6 w-6 text-primary" />,
	},
	{
		title: "Automation & Efficiency",
		description:
			"Creating systems that streamline processes and boost productivity through smart, scalable solutions.",
		icon: <Zap className="h-6 w-6 text-primary" />,
	},
	{
		title: "Electrical Engineering",
		description:
			"Learning the foundations of circuits, systems, and embedded technology to bridge hardware and software.",
		icon: <Cpu className="h-6 w-6 text-primary" />,
	},
];
