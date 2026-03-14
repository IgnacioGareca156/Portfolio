import Image from "next/image";
import { SparklesIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  github,
  demo,
  image,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors duration-200"
        >
          GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
