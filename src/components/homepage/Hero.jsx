import "../../styles/Hero.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroes = ["Hello, I'm Rina.", "Full-Stack Developer"];

  useGSAP(() => {
    gsap.to(".char", {});
  });

  const renderHero = (hero, index) => {
    const heroChars = [...hero].map((char, i) => (
      <span key={i} className="char">
        {char}
      </span>
    ));
    return <h1 key={index}>{heroChars}</h1>;
  };

  return (
    <header className="home__hero" id="hero">
      {heroes.map((hero, index) => renderHero(hero, index))}
    </header>
  );
}
