export default function SkillsList() {
  const skills = [
    "Javascript",
    "HTML",
    "CSS",
    "Ruby",
    "PostgreSQL",
    "React",
    "Node.js",
    "jQuery",
    "Rails",
    "Bootstrap",
    "TailwindCSS",
    "Supabase",
    "Figma",
  ];

  const skillsItems = skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ));

  return (
    <section className="home__skills" data-scroll-section>
      <h2>Skills</h2>
      <ul>
        {skillsItems}
      </ul>
    </section>
  );
}
