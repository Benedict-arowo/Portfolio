"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Github, ExternalLink, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type ProjectDetails = {
	name: string;
	emoji: string;
	title: string;
	description: string;
	longDescription: string;
	features: string[];
	challenges: string[];
	technologies: string[];
	githubUrl: string;
	liveUrl: string | null;
	images: string[];
	stargazers_count: number;
	forks_count: number;
	language: string;
	lastUpdated: string;
};

// Mock project details data - in a real app, you would fetch this from an API or CMS
// const projectsData: Record<string, ProjectDetails> = {
//   "opeyemi-ai": {
//     name: "opeyemi-ai",
//     emoji: "⚡",
//     title: "Opeyemi AI",
//     description: "Affiliate marketing system with automated commissions.",
//     longDescription:
//       "Opeyemi AI is an advanced affiliate marketing platform that automates the commission tracking and payment process. It uses AI to optimize affiliate matching with products and analyzes user behavior to increase conversion rates.",
//     features: [
//       "Automated commission calculation and distribution",
//       "Real-time analytics dashboard for affiliates and merchants",
//       "AI-powered product matching for affiliates",
//       "Multi-tier commission structure",
//       "Integrated payment processing system",
//     ],
//     challenges: [
//       "Building a scalable system that could handle thousands of transactions per minute",
//       "Implementing secure payment processing with fraud detection",
//       "Creating an algorithm for fair commission distribution in multi-tier structures",
//       "Optimizing database queries for real-time analytics",
//     ],
//     technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe API", "TensorFlow"],
//     githubUrl: "https://github.com/benedictarowo/opeyemi-ai",
//     liveUrl: "https://opeyemi-ai.example.com",
//     images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
//     stargazers_count: 85,
//     forks_count: 23,
//     language: "TypeScript",
//     lastUpdated: "2023-12-15",
//   },
//   "marketplace-app": {
//     name: "marketplace-app",
//     emoji: "🛍️",
//     title: "Marketplace App",
//     description: "Connecting buyers and sellers with real-time messaging.",
//     longDescription:
//       "A comprehensive marketplace platform that facilitates transactions between buyers and sellers. Features include product listings, search and filter functionality, secure payment processing, and a real-time messaging system for negotiations.",
//     features: [
//       "User authentication and profile management",
//       "Product listing with multiple images and categories",
//       "Advanced search and filter options",
//       "Real-time messaging between buyers and sellers",
//       "Secure payment processing",
//       "Rating and review system",
//     ],
//     challenges: [
//       "Implementing a scalable real-time messaging system",
//       "Building a search algorithm that delivers relevant results quickly",
//       "Creating a secure escrow payment system",
//       "Optimizing image loading and storage",
//     ],
//     technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3", "Cloudinary", "Stripe"],
//     githubUrl: "https://github.com/benedictarowo/marketplace-app",
//     liveUrl: "https://marketplace-app.example.com",
//     images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
//     stargazers_count: 62,
//     forks_count: 18,
//     language: "JavaScript",
//     lastUpdated: "2023-11-28",
//   },
//   "auth-system": {
//     name: "auth-system",
//     emoji: "🔐",
//     title: "Auth System",
//     description: "Secure authentication with JWT and OAuth.",
//     longDescription:
//       "A robust authentication system that provides secure user authentication through multiple methods including email/password, OAuth providers, and two-factor authentication. The system is designed to be easily integrated into any web application.",
//     features: [
//       "Email and password authentication",
//       "OAuth integration (Google, GitHub, Facebook)",
//       "Two-factor authentication",
//       "Password reset functionality",
//       "Role-based access control",
//       "Session management",
//       "Brute force protection",
//     ],
//     challenges: [
//       "Implementing secure token storage and transmission",
//       "Building a flexible role-based access control system",
//       "Creating a seamless OAuth integration experience",
//       "Developing a robust two-factor authentication flow",
//     ],
//     technologies: ["Node.js", "Express", "MongoDB", "JWT", "Passport.js", "Redis", "Nodemailer", "Twilio API"],
//     githubUrl: "https://github.com/benedictarowo/auth-system",
//     liveUrl: null,
//     images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
//     stargazers_count: 41,
//     forks_count: 12,
//     language: "JavaScript",
//     lastUpdated: "2023-10-05",
//   },
//   "crypto-exchange": {
//     name: "crypto-exchange",
//     emoji: "💸",
//     title: "Crypto Exchange",
//     description: "Real-time crypto-to-fiat conversion with custodial wallets.",
//     longDescription:
//       "A cryptocurrency exchange platform that allows users to buy, sell, and trade cryptocurrencies with fiat currencies. The platform includes custodial wallets for secure storage and implements real-time price tracking and order matching.",
//     features: [
//       "Real-time cryptocurrency price tracking",
//       "Secure custodial wallets for multiple cryptocurrencies",
//       "Order book and matching engine",
//       "Fiat on/off ramps",
//       "Trading history and portfolio analysis",
//       "Advanced security features including cold storage",
//     ],
//     challenges: [
//       "Building a high-performance order matching engine",
//       "Implementing secure wallet management with cold storage",
//       "Creating a real-time price tracking system",
//       "Developing comprehensive security measures to prevent attacks",
//     ],
//     technologies: [
//       "React",
//       "Redux",
//       "Node.js",
//       "PostgreSQL",
//       "Redis",
//       "WebSockets",
//       "Docker",
//       "Kubernetes",
//       "Blockchain APIs",
//     ],
//     githubUrl: "https://github.com/benedictarowo/crypto-exchange",
//     liveUrl: "https://crypto-exchange.example.com",
//     images: ["/placeholder.svg?height=600&width=800", "/placeholder.svg?height=600&width=800"],
//     stargazers_count: 73,
//     forks_count: 29,
//     language: "JavaScript",
//     lastUpdated: "2024-01-22",
//   },
// }
const projectsData: Record<string, ProjectDetails> = {
	"password-manager": {
		name: "password-manager",
		emoji: "🔥",
		title: "Password Manager App",
		description: "A secure password manager with end-to-end encryption.",
		longDescription:
			"A highly secure password manager that allows users to store and manage credentials with encryption. Built with a strong focus on security and usability, it ensures that passwords are safe and easily accessible.",
		features: [
			"End-to-end encryption for stored credentials",
			"Secure password generation tool",
			"Biometric authentication support",
			"Cross-device synchronization",
			"User-friendly UI with dark mode",
		],
		challenges: [
			"Implementing strong encryption without performance issues",
			"Ensuring seamless synchronization across multiple devices",
			"Building a secure yet user-friendly authentication flow",
			"Optimizing database storage for large-scale usage",
		],
		technologies: ["React", "Node.js", "Express", "MongoDB", "Crypto"],
		githubUrl: "https://github.com/benedictarowo/password-manager",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		stargazers_count: 58,
		forks_count: 19,
		language: "JavaScript",
		lastUpdated: "2024-03-20",
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
		githubUrl: "https://github.com/benedictarowo/crystal-wheels",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		stargazers_count: 47,
		forks_count: 14,
		language: "TypeScript",
		lastUpdated: "2024-02-18",
	},
	"marketplace-remake": {
		name: "marketplace-remake",
		emoji: "🛍️",
		title: "Marketplace Remake",
		description: "A feature-rich student marketplace with improved UI.",
		longDescription:
			"A refined version of the student marketplace app, offering better UI/UX, real-time messaging, and enhanced search and filtering options. Designed for a smooth and secure buying and selling experience.",
		features: [
			"User authentication and profile management",
			"Product listing with multiple images and descriptions",
			"Real-time messaging between buyers and sellers",
			"Advanced search and filtering options",
			"Secure payment processing",
		],
		challenges: [
			"Building a responsive and engaging UI",
			"Optimizing search functionality for fast results",
			"Implementing a secure messaging system",
			"Ensuring data security and fraud prevention",
		],
		technologies: ["React", "Firebase", "Redux", "Styled Components"],
		githubUrl: "https://github.com/benedictarowo/marketplace-remake",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		stargazers_count: 54,
		forks_count: 17,
		language: "JavaScript",
		lastUpdated: "2024-03-10",
	},
	blackpoint: {
		name: "blackpoint",
		emoji: "🔑",
		title: "BlackPoint",
		description: "Security-focused authentication system with RBAC.",
		longDescription:
			"BlackPoint is an advanced security system with role-based access control, multi-factor authentication, and secure session management. Built to ensure secure user authentication across applications.",
		features: [
			"Role-based access control (RBAC)",
			"Multi-factor authentication (MFA)",
			"Secure session management",
			"Audit logging and activity tracking",
			"OAuth and JWT authentication support",
		],
		challenges: [
			"Implementing a highly secure yet efficient authentication process",
			"Ensuring smooth user experience with multi-factor authentication",
			"Building a flexible role-based access control system",
			"Managing secure token storage and transmission",
		],
		technologies: ["Node.js", "Express", "JWT", "MongoDB", "React"],
		githubUrl: "https://github.com/benedictarowo/blackpoint",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		stargazers_count: 64,
		forks_count: 21,
		language: "JavaScript",
		lastUpdated: "2024-01-29",
	},
	scissor: {
		name: "scissor",
		emoji: "✂️",
		title: "Scissor",
		description: "A URL-shortening platform with analytics.",
		longDescription:
			"Scissor is a powerful URL-shortening service that provides analytics, user management, and custom link generation. Designed for businesses and individuals who need efficient link tracking.",
		features: [
			"Custom URL shortening",
			"Click tracking and analytics",
			"User authentication and management",
			"API for third-party integrations",
			"QR code generation for shortened URLs",
		],
		challenges: [
			"Optimizing database queries for large-scale analytics",
			"Ensuring link security and preventing abuse",
			"Implementing a scalable architecture for high traffic",
			"Creating a seamless user experience for managing links",
		],
		technologies: [
			"Next.js",
			"PostgreSQL",
			"Prisma",
			"Chart.js",
			"Auth.js",
		],
		githubUrl: "https://github.com/benedictarowo/scissor",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		stargazers_count: 71,
		forks_count: 22,
		language: "TypeScript",
		lastUpdated: "2024-02-12",
	},
	"opeyemi-ai": {
		name: "opeyemi-ai",
		emoji: "📢",
		title: "Opeyemi AI",
		description:
			"An affiliate marketing system with automated commissions.",
		longDescription:
			"Opeyemi AI is an advanced affiliate marketing platform that automates commission tracking and payment processing. It integrates AI for optimized product matching and user analytics.",
		features: [
			"Automated commission calculation",
			"Real-time analytics dashboard",
			"AI-powered affiliate-product matching",
			"Multi-tier commission structure",
			"Integrated payment system",
		],
		challenges: [
			"Handling high transaction volumes efficiently",
			"Implementing fraud detection in payment processing",
			"Building a fair commission distribution algorithm",
			"Optimizing database performance for real-time analytics",
		],
		technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
		githubUrl: "https://github.com/benedictarowo/opeyemi-ai",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		stargazers_count: 85,
		forks_count: 23,
		language: "JavaScript",
		lastUpdated: "2024-03-05",
	},
	"university-result-checker": {
		name: "university-result-checker",
		emoji: "🏫",
		title: "University Result Checker",
		description: "A platform for students to check academic results.",
		longDescription:
			"A web-based system designed to allow students to check their academic results easily. Built with an intuitive UI and secure result management, ensuring accuracy and efficiency.",
		features: [
			"Student authentication and dashboard",
			"Secure result management and retrieval",
			"Bulk upload of results by administrators",
			"PDF result generation",
			"Mobile-friendly interface",
		],
		challenges: [
			"Ensuring data security and integrity",
			"Handling bulk result uploads efficiently",
			"Providing accurate search and filtering options",
			"Optimizing the platform for fast performance",
		],
		technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap", "jQuery"],
		githubUrl: "https://github.com/benedictarowo/result-checker",
		liveUrl: null,
		images: ["/placeholder.svg?height=600&width=800"],
		stargazers_count: 39,
		forks_count: 10,
		language: "PHP",
		lastUpdated: "2024-02-25",
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
			// Simulate API call delay
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Get project data
			const projectData = projectsData[slug];
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
						<Badge
							variant="outline"
							className="flex items-center gap-1">
							<span className="bg-primary/20 rounded-full p-0.5">
								<Star className="h-3.5 w-3.5 text-primary" />
							</span>
							{project.stargazers_count} stars
						</Badge>
						<Badge
							variant="outline"
							className="flex items-center gap-1">
							<span className="bg-primary/20 rounded-full p-0.5">
								<GitFork className="h-3.5 w-3.5 text-primary" />
							</span>
							{project.forks_count} forks
						</Badge>
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
									<img
										src={
											project.images[activeImageIndex] ||
											"/placeholder.svg"
										}
										alt={`${project.title} screenshot`}
										className="w-full h-full object-cover"
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
											<img
												src={
													image || "/placeholder.svg"
												}
												alt={`${
													project.title
												} thumbnail ${index + 1}`}
												className="h-full w-auto object-cover"
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
