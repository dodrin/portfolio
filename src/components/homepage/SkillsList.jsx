import { skills } from "../../constants/skillsData";

export default function SkillsList() {
  const skillsItems = skills.map((skill) => skill.toLowerCase() + ",");
  const skillsString = skillsItems.join("");

  return (
    <section className="home__skills">
      <h2>Skills</h2>
      <p>
        I am always eager to learn more about my current stack and explore new
        technologies that could expand my skill set, enhance my problem-solving
        capabilities, and keep me at the forefront of industry trends.
      </p>
      <p align="center">
        <img
          src={`https://skillicons.dev/icons?i=${skillsString}`}
          alt="skills icons"
        />
      </p>
    </section>
  );
}
