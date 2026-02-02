import { 
  Code, 
  Palette, 
  Lightbulb, 
  Users, 
  Zap, 
  Target,
  Brain,
  Rocket,
  Languages
} from 'lucide-react';

const skills = [
  {
    name: 'Full-Stack Development',
    icon: Code,
    description: 'Building end-to-end web applications'
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    description: 'Creating intuitive user experiences'
  },
  {
    name: 'Problem Solving',
    icon: Brain,
    description: 'Analytical thinking and algorithms'
  },
  {
    name: 'Team Collaboration',
    icon: Users,
    description: 'Working effectively in teams'
  },
  {
    name: 'Fast Learner',
    icon: Zap,
    description: 'Quickly adapting to new technologies'
  },
  {
    name: 'Project Management',
    icon: Target,
    description: 'Planning and executing projects'
  },
  {
    name: 'English',
    icon: Languages,
    description: 'Fluent in spoken and written communication'
  },
  {
    name: 'French',
    icon: Languages,
    description: 'Fluent in spoken and written communication'
  }
];

export function Skills() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Core competencies that drive my development process
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name}
                className="p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}