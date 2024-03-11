export default function Footer() {
  return (
    <footer className="home__footer">
      <div className="home__footer__left">
        <p>&copy; 2024 Rina.I | Designed with 💖</p>
      </div>

      <p>Email: hello.rinainada@gmail.com</p>

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