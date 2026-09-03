// src/App.jsx
import Navigation from "./components/Navigation.jsx";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience.jsx";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-term-bg font-mono text-term-text antialiased selection:bg-term-green selection:text-term-bg">
      <div className="fixed top-0 left-0 z-[-1] h-full w-full">
        <div className="absolute top-0 h-full w-full bg-term-bg bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(74,222,128,0.08),rgba(10,11,13,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navigation />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default App;
