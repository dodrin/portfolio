export default function Contact() {
  return (
    <section className="home__contact" id="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/xdoqnaab" method="POST">
        <input type="text" name="subject" placeholder="Your Name" autoComplete="off" required />
        <input type="email" name="email" placeholder="Your Email" autoComplete="email" required />
        <textarea name="message" placeholder="Message(max 150 characters)" autoComplete="off" maxLength="150" required></textarea>
        <input id="submit" type="submit" value="Send" />
      </form>
    </section>
  );
}
