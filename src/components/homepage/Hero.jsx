import "../../styles/Hero.css";

export default function Hero() {
  const heroes = ["Rina Inada", "Full-Stack", "Developer"];

  const renderHero = (hero, index) => {
    const heroChars = [...hero].map((char, i) => <span key={i}>{char}</span>);
    return <h1 key={index}>{heroChars}</h1>;
  };

  return (
    <header className="home__hero" id="hero">
      {heroes.map((hero, index) => renderHero(hero, index))}
    </header>
  );
}