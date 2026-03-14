interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <div className="space-y-8">
      {experience.map((exp, index) => (
        <div
          key={index}
          className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-800"
        >
          <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
          <p className="text-gray-300 mb-2">{exp.company}</p>
          <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
          <div className="space-y-2">
            {exp.description.split('\n').map((line, i) => (
              <p key={i} className="text-gray-300">
                {line}
              </p>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            {exp.achievements.map((achievement, i) => (
              <div
                key={i}
                className="flex items-center text-gray-300"
              >
                <span className="mr-2">•</span>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
