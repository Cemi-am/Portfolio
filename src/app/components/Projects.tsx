import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    id: 1,
    title: "Bill Splitting App with Solana",
    period: "Ongoing",
    status: "In Development",
    description:
      "A decentralized bill splitting application leveraging Solana blockchain for secure and transparent payment settlements. Features include real-time expense tracking, cryptocurrency payments, and automated split calculations.",
    image:
      "https://images.unsplash.com/photo-1640694514279-090bb1b09ee9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeSUyMGJsb2NrY2hhaW4lMjBwYXltZW50JTIwYXBwfGVufDF8fHx8MTc2OTk5NjA3NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Solana", "Vite"],
    github: "https://github.com/yassineAbdellatif/ConUHacks",
  },
  {
    id: 2,
    title: "Concordia Campus Map Mobile App",
    period: "Ongoing",
    status: "In Development",
    description:
      "A mobile navigation application for Concordia University campus, providing interactive maps, real-time directions, building information, and location-based services for students and visitors.",
    image:
      "https://images.unsplash.com/photo-1768162125912-e721d0794b7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtYXAlMjBsb2NhdGlvbnxlbnwxfHx8fDE3Njk5OTYwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "TypeScript", "Firebase", "Node.js", "Express", "Google Maps API"],
  },
  {
    id: 3,
    title: "Bike Sharing Web Application",
    period: "September - December 2025",
    description:
      "A full-stack bike sharing platform with secure role-based authentication, user profiles with payment integration, real-time station tracking via map API, and community engagement features including leaderboards and forums.",
    image:
      "/BikeShare.png",
    tags: ["React", "JavaScript", "Node.js", "Express", "SQLite", "Map API"],
    github: "https://github.com/Cemi-am/CodeBusters",
  },
  {
    id: 4,
    title: "Topographical Analysis with 3D Mapping",
    period: "February 2025",
    award: "2nd Place - PolyHacks 2025",
    description:
      "Designed and implemented a program to analyze topographical data and convert it to 3D-rendered planet maps. Developed algorithms to identify regions of similar elevation with modifiable parameters.",
    image:
      "/Topo.png",
    tags: ["React", "TypeScript", "Vite", "Three.js"],
  },
  {
    id: 5,
    title: "Peer Assessment Web Application",
    period: "October - December 2024",
    role: "Project Manager",
    description:
      "Led a team of 5 in developing a web application for peer assessments. Integrated authentication features for differentiated student and instructor access, and designed a system for conducting peer assessments with MySQL database storage.",
    image:
      "https://images.unsplash.com/photo-1758876022295-00ec1f0e39f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDF8fHx8MTc2OTk5NTY4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["JavaScript", "CSS", "Node.js", "Express", "MySQL"],
    github: "https://github.com/Cemi-am/Bat_Boys",
  },
];

export function Projects() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Featured Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A showcase of my recent work and side projects
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3 text-sm">
                  <span className="text-gray-500">{project.period}</span>
                  {project.award && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-blue-600 font-medium">{project.award}</span>
                    </>
                  )}
                  {project.role && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-indigo-600 font-medium">{project.role}</span>
                    </>
                  )}
                  {project.status && (
                    <>
                      <span className="text-gray-300">•</span>
                      <span className="text-gray-500 font-medium">{project.status}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}