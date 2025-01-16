import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
