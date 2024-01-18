export default function Footer() {
  return (
    <footer className="home__footer">
      <div className="home__footer__left">
        <p>&copy; 2023 Rina Inada | Designed with 💖</p>
      </div>

      <div className="home__footer__right">
        <span>
          BACK TO{" "}
          <button id="topBtn" title="Back to Top">
            <a href="#hero">TOP</a>
          </button>
        </span>
      </div>
    </footer>
  );
}