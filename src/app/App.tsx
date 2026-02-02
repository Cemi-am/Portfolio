import { Hero } from "./components/Hero";
import { TechStack } from "./components/TechStack";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <TechStack />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}