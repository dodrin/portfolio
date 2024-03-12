import Logo from "../../constants/logo";

export default function Nav() {
  return (
    <nav className="home__nav">
      <Logo className="nav-logo" />
      <div className="nav-menu">
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
