"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";

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

export default function ProjectPage() {
	const params = useParams();
	const slug = params?.slug as string;
	const [project, setProject] = useState<ProjectDetails | null>(null);
	const [loading, setLoading] = useState(true);
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	useEffect(() => {
		const fetchProject = async () => {
			setLoading(true);

			// Get project data
			const projectData = projectsData[slug.toLowerCase()];
			if (projectData) {
				setProject(projectData);
			}

			setLoading(false);
		};

		if (slug) {
			fetchProject();
		}
	}, [slug]);

	if (loading) {
		return (
			<div className="min-h-screen bg-black text-white py-16">
				<div className="container mx-auto px-4">
					<div className="flex items-center mb-8">
						<Skeleton className="h-10 w-24 mr-4" />
						<Skeleton className="h-8 w-64" />
					</div>
					<Skeleton className="h-96 w-full mb-8 rounded-lg" />
					<Skeleton className="h-10 w-48 mb-4" />
					<Skeleton className="h-6 w-full mb-2" />
					<Skeleton className="h-6 w-full mb-2" />
					<Skeleton className="h-6 w-3/4 mb-8" />
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<Skeleton className="h-10 w-40 mb-4" />
							<Skeleton className="h-6 w-full mb-2" />
							<Skeleton className="h-6 w-full mb-2" />
							<Skeleton className="h-6 w-full mb-2" />
						</div>
						<div>
							<Skeleton className="h-10 w-40 mb-4" />
							<Skeleton className="h-6 w-full mb-2" />
							<Skeleton className="h-6 w-full mb-2" />
							<Skeleton className="h-6 w-full mb-2" />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (!project) {
		return (
			<div className="min-h-screen bg-black text-white flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-3xl font-bold mb-4">
						Project Not Found
					</h1>
					<p className="text-zinc-400 mb-8">
						The project you're looking for doesn't exist or has been
						removed.
					</p>
					<Button asChild>
						<Link href="/">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Home
						</Link>
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-white py-16">
			<div className="container mx-auto px-4">
				{/* Back button and project title */}
				<div className="mb-12">
					<div className="flex flex-wrap items-center gap-4 mb-8">
						<Button variant="outline" size="sm" asChild>
							<Link href="/">
								<ArrowLeft className="mr-2 h-4 w-4" />
								Back to Home
							</Link>
						</Button>
						<div className="flex items-center">
							<span className="text-3xl mr-3" aria-hidden="true">
								{project.emoji}
							</span>
							<h1 className="text-4xl font-bold">
								{project.title}
							</h1>
						</div>
					</div>

					<div className="flex flex-wrap gap-3 mb-6">
						{/* <Badge
							variant="outline"
							className="flex items-center gap-1">
							<span className="bg-primary/20 rounded-full p-0.5">
								<Star className="h-3.5 w-3.5 text-primary" />
							</span>
							{project.stargazers_count} stars
						</Badge> */}
						{/* <Badge
							variant="outline"
							className="flex items-center gap-1">
							<span className="bg-primary/20 rounded-full p-0.5">
								<GitFork className="h-3.5 w-3.5 text-primary" />
							</span>
							{project.forks_count} forks
						</Badge> */}
						<Badge variant="secondary">{project.language}</Badge>
						<Badge variant="outline">
							Last updated: {project.lastUpdated}
						</Badge>
					</div>
				</div>

				{/* Project main content */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
					{/* Left column - Images and description */}
					<div className="lg:col-span-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mb-8">
							{/* Project Images */}
							<div className="relative rounded-lg overflow-hidden bg-zinc-900 mb-6">
								<div className="aspect-video">
									<Image
										width={100}
										height={100}
										layout="responsive"
										src={
											project.images[activeImageIndex] ||
											"/placeholder.svg"
										}
										alt={`${project.title} screenshot`}
										className="w-full h-full object-cover object-top max-h-[600px]"
									/>
								</div>
							</div>

							{/* Thumbnail navigation */}
							{project.images.length > 1 && (
								<div className="flex gap-2 mb-8">
									{project.images.map((image, index) => (
										<button
											key={index}
											onClick={() =>
												setActiveImageIndex(index)
											}
											className={`rounded-md overflow-hidden h-16 border-2 ${
												activeImageIndex === index
													? "border-primary"
													: "border-transparent"
											}`}>
											<Image
												src={
													image || "/placeholder.svg"
												}
												width={100}
												height={100}
												alt={`${
													project.title
												} thumbnail ${index + 1}`}
												className="h-[100px] w-[100px] object-top object-cover"
											/>
										</button>
									))}
								</div>
							)}

							{/* Description */}
							<div className="space-y-6">
								<h2 className="text-2xl font-bold">Overview</h2>
								<p className="text-zinc-300 leading-relaxed">
									{project.longDescription}
								</p>
							</div>
						</motion.div>

						{/* Features */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
							className="mb-12">
							<h2 className="text-2xl font-bold mb-6">
								Key Features
							</h2>
							<ul className="space-y-3">
								{project.features.map((feature, index) => (
									<li
										key={index}
										className="flex items-start">
										<span className="text-primary mr-2">
											•
										</span>
										<span className="text-zinc-300">
											{feature}
										</span>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Challenges */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}>
							<h2 className="text-2xl font-bold mb-6">
								Challenges & Solutions
							</h2>
							<ul className="space-y-3">
								{project.challenges.map((challenge, index) => (
									<li
										key={index}
										className="flex items-start">
										<span className="text-primary mr-2">
											•
										</span>
										<span className="text-zinc-300">
											{challenge}
										</span>
									</li>
								))}
							</ul>
						</motion.div>
					</div>

					{/* Right column - Technologies and links */}
					<div className="lg:col-span-4">
						<div className="sticky top-8">
							{/* Technologies */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="mb-8">
								<Card className="bg-zinc-900 border-zinc-800 p-6">
									<h2 className="text-xl font-bold mb-4">
										Technologies Used
									</h2>
									<div className="flex flex-wrap gap-2">
										{project.technologies.map(
											(tech, index) => (
												<Badge
													key={index}
													className="bg-zinc-800">
													{tech}
												</Badge>
											)
										)}
									</div>
								</Card>
							</motion.div>

							{/* Project Links */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.4 }}>
								<Card className="bg-zinc-900 border-zinc-800 p-6">
									<h2 className="text-xl font-bold mb-4">
										Project Links
									</h2>
									<div className="space-y-4">
										{project.githubUrl && (
											<Button
												className="w-full justify-start"
												asChild>
												<a
													href={project.githubUrl}
													target="_blank"
													rel="noopener noreferrer">
													<Github className="mr-2 h-4 w-4" />
													View on GitHub
												</a>
											</Button>
										)}

										{project.liveUrl && (
											<Button
												variant="outline"
												className="w-full justify-start"
												asChild>
												<a
													href={project.liveUrl}
													target="_blank"
													rel="noopener noreferrer">
													<ExternalLink className="mr-2 h-4 w-4" />
													Visit Live Site
												</a>
											</Button>
										)}
									</div>
								</Card>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
