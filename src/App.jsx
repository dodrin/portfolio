import "./App.css";
import Nav from "./components/Nav";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="home">
        <About />
        <SkillsList />
        <ProjectsList />
        <Contact />
        <Social />
      </main>
      <Footer />
    </>
  );
}

export default App;
