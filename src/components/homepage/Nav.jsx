import Logo from "../../constants/logo";

export default function Nav() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="home__nav">
      <Logo className="nav-logo" />
      <button className="nav-menu" onClick={handleScrollToContact}>
        Contact
      </button>
    </nav>
  );
}
