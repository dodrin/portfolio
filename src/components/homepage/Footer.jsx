export default function Footer() {
  const handleScrollToTop = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="home__footer">
      <div className="home__footer__left">
        <p>&copy; 2024 Rina.I | Designed with 💖</p>
      </div>

      <div className="home__footer__right">
        <span>
          BACK TO{' '}
          <button id="topBtn" title="Back to Top" onClick={handleScrollToTop}>
            TOP
          </button>
        </span>
      </div>
    </footer>
  );
}
