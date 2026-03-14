import { SparklesIcon } from "@heroicons/react/24/outline";

interface Skill {
  name: string;
  level: number;
}

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          <h4 className="text-white font-semibold">{skill.name}</h4>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
            <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}
