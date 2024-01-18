import { skills } from "../../constants/skillsData";

export default function SkillsList() {
  
  const skillsItems = skills.map((skill) => (
    <li key={skill}>{skill}</li>
  ));

  return (
    <section className="home__skills">
      <h2>Skills</h2>
      <ul>
        {skillsItems}
      </ul>
    </section>
  );
}
