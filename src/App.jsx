import { useEffect } from "react";
import "./App.css";
import Nav from "./components/homepage/Nav";
import SkillsList from "./components/homepage/SkillsList";
import ProjectsList from "./components/homepage/ProjectsList";
import Contact from "./components/homepage/Contact";
import Social from "./components/homepage/Social";
import Footer from "./components/homepage/Footer";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");

    // Check if the target element exists before initializing locomotive-scroll
    if (scrollEl) {
      console.log("Scroll Container Height:", scrollEl.offsetHeight);
      const scroll = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 0.08,
      });

      // Cleanup the locomotive-scroll instance on component unmount
      return () => {
        scroll.destroy();
      };
    }
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
