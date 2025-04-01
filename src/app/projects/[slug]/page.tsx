"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Github, ExternalLink} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { ProjectDetails, projectsData } from "@/app/page";

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
