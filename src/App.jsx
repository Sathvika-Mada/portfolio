import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      {/* 🌌 BACKGROUND ANIMATION */}
      <div className="bg-animation">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </>
  );
}

export default App;