import "./App.css";
import Nav from "./components/Nav";
import SkillsList from "./components/SkillsList";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";
import ScrollContainer from "./components/ScrollContainer";

function App() {
  return (
    <>
      <ScrollContainer>
        <Nav />
        <main className="home">
          <header className="home__hero" data-scroll-section>
            <h1 className="home__hero__one">Hello, I'm Rina,</h1>
            <h1 className="home__hero__two">Full Stack Developer</h1>
          </header>

          <section className="home__about" data-scroll-section>
            <h2>About Me.</h2>
            <div
              data-scroll-class="scroll-class"
              data-scroll
              data-scroll-delay="4"
              className="home__about__p"
            >
              <p>
                Hi, I'm a Full-Stack developer in Victoria, BC. I am passionate
                about clean design and problem-solving. I'm on a continuous
                learning journey in programming. Excited to contribute to
                dynamic teams, I thrive on the endless possibilities in tech.
              </p>

              <p>
                When I'm not coding, I love going on outdoor adventures ⛷🧗‍♀️🥾🚵‍♀️
              </p>

              <p>Let's create something great together!</p>
            </div>
          </section>

          <SkillsList />

          <ProjectsList />
          <Contact />
          <Social />
        </main>
        <Footer />
      </ScrollContainer>
    </>
  );
}

export default App;
