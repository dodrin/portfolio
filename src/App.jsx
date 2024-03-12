import "./App.css";
import Nav from "./components/homepage/Nav";
import SkillsList from "./components/homepage/SkillsList";
import ProjectsList from "./components/homepage/ProjectsList";
import Contact from "./components/homepage/Contact";
import Social from "./components/homepage/Social";
import Footer from "./components/homepage/Footer";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";

function App() {
  
  return (
    <>
      <div>
        <Nav />
        <Hero />
      </div>
      <div>
        <main className="home">
          <About />
          <SkillsList />
          <ProjectsList />
          <Contact />
          <Social />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
