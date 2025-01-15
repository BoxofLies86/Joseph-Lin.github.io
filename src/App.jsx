import ButtonGradient from "./assets/svg/ButtonGradient";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills.jsx";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-50 selection:text-purple-900">
        <Navbar />
        <Hero />
        <About />
        <Skills />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
