export default function Contact() {
  return (
    <section className="home__contact" id="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/f/xdoqnaab" method="POST">
        <input type="email" name="subject" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <input id="submit" type="submit" value="Send" />
      </form>
    </section>
  );
}