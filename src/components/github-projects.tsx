"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Star, GitFork } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

type Repository = {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
}

type FeaturedProject = {
  name: string
  emoji: string
  description: string
}

const featuredProjects: FeaturedProject[] = [
  {
    name: "opeyemi-ai",
    emoji: "⚡",
    description: "Affiliate marketing system with automated commissions.",
  },
  {
    name: "marketplace-app",
    emoji: "🛍️",
    description: "Connecting buyers and sellers with real-time messaging.",
  },
  {
    name: "auth-system",
    emoji: "🔐",
    description: "Secure authentication with JWT and OAuth.",
  },
  {
    name: "crypto-exchange",
    emoji: "💸",
    description: "Real-time crypto-to-fiat conversion with custodial wallets.",
  },
]

export function GitHubProjects({ username }: { username: string }) {
  const [repositories, setRepositories] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true)
        // In a real implementation, you would fetch from the actual GitHub API
        // For demo purposes, we'll create mock data based on the featured projects

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const mockRepositories: Repository[] = featuredProjects.map((project, index) => ({
          id: index,
          name: project.name,
          description: project.description,
          html_url: `https://github.com/${username}/${project.name}`,
          homepage: null,
          stargazers_count: Math.floor(Math.random() * 100),
          forks_count: Math.floor(Math.random() * 30),
          language: ["TypeScript", "JavaScript", "Python", "Go"][index % 4],
          topics: ["web", "nextjs", "react", "api", "fullstack"],
        }))

        setRepositories(mockRepositories)
      } catch (err) {
        setError("Failed to fetch repositories. Please try again later.")
        console.error("Error fetching GitHub repositories:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [username])

  // Function to get emoji for project
  const getProjectEmoji = (repoName: string) => {
    const project = featuredProjects.find((p) => p.name === repoName)
    return project ? project.emoji : "📁"
  }

  if (error) {
    return (
      <div className="text-center py-10 text-zinc-400">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {loading
        ? // Loading skeletons
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-zinc-900">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Skeleton className="h-8 w-8 rounded-full" />
                  <Skeleton className="h-6 w-40" />
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-6" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-6 w-20 rounded-full" />
                  <Skeleton className="h-6 w-20 rounded-full" />
                </div>
                <Skeleton className="h-8 w-32" />
              </div>
            </div>
          ))
        : repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="overflow-hidden rounded-lg border-zinc-800 bg-zinc-900 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">
                      {getProjectEmoji(repo.name)}
                    </span>
                    <h3 className="text-xl font-bold">{repo.name.replace(/-/g, " ")}</h3>
                  </div>
                  <p className="mb-4 text-zinc-400">{repo.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.language && (
                      <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">{repo.language}</span>
                    )}
                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300 flex items-center">
                      <Star className="h-3 w-3 mr-1" /> {repo.stargazers_count}
                    </span>
                    <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300 flex items-center">
                      <GitFork className="h-3 w-3 mr-1" /> {repo.forks_count}
                    </span>
                  </div>
                  <Link
                    href={`/projects/${repo.name}`}
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
    </div>
  )
}

