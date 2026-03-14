import { SparklesIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

interface Skill {
  name: string;
  level: number;
}

interface AboutProps {
  bio: string;
}

export default function About({ bio }: AboutProps) {
  return (
    <div className="space-y-8">
      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
        {bio}
      </p>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Tecnologías</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-semibold text-white">{skill.name}</span>
                  <SparklesIcon className="h-5 w-5 text-cyan-300" />
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-cyan-300 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {hobbies && (
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Hobbies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white">{hobby}</span>
                    <SparklesIcon className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
}
