import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              Samy Mezimez
            </h3>
            <p className="text-gray-400">
              3rd Year Software Engineering Student
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Cemi-am"
              target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/samy-mezimez/"
              target="_blank" rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p className="flex items-center justify-center gap-1">
            Samy Mezimez © 2026
          </p>
        </div>
      </div>
    </footer>
  );
}