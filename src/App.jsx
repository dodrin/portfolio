import "./App.css";
import Nav from "./components/Nav";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main className="home">
        <header className="home__hero">
          <h1>Hello, I'm Rina,</h1>
          <h1>Full Stack Developer</h1>
        </header>

        <section className="home__about">
          <h2>About Me.</h2>
          <p>
            Hi, I'm a Full-Stack developer in Victoria, BC. I am passionate
            about clean design and problem-solving. I'm on a continuous learning
            journey in programming. Excited to contribute to dynamic teams, I
            thrive on the endless possibilities in tech.
          </p>

          <p>When I'm not coding, I love going on outdoor adventures ⛷🧗‍♀️🥾🚵‍♀️</p>

          <p>Let's create something great together!</p>
        </section>

        <SkillsList />

        <ProjectsList />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
