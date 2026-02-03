import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  GitBranch 
} from 'lucide-react';

const techStacks = [
  {
    category: 'Frontend',
    icon: Globe,
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: ['Node.js', 'Express', 'Python', 'REST APIs']
  },
  {
    category: 'Database',
    icon: Database,
    technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'SQLite']
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    technologies: ['React Native', 'Android', 'Kotlin']
  },
  {
    category: 'Tools & Others',
    icon: GitBranch,
    technologies: ['Git', 'Docker', 'Storyblock', 'CWS','CI/CD', 'Unity', 'Agile', 'DevOps']
  },
  {
    category: 'Languages',
    icon: Code2,
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C/C++', 'C#', 'OOP' ]
  }
];

export function TechStack() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Tech Stack
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack) => {
            const Icon = stack.icon;
            return (
              <div 
                key={stack.category}
                className="p-6 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {stack.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}