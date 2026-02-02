import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Hero() {

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mezimez.samy@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Samy_Mezimez_Resume_EN.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          <span className="text-blue-600">Samy Mezimez</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          Software Engineering Student
        </p>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Passionate about building innovative web applications and solving complex problems. 
          Currently in my third year at Concordia University, focusing on full-stack development.
        </p>
        
        <div className="flex gap-4 justify-center mb-8">
          <Button className="gap-2" onClick={handleCopyEmail}>
            <Mail className="w-4 h-4" />
            {copied ? 'Email Copied!' : 'Contact Me'}
          </Button>
          <Button variant="outline" className="gap-2" onClick={handleDownloadResume}>
            <Download className="w-4 h-4" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <a href="https://github.com/Cemi-am" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/samy-mezimez/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}