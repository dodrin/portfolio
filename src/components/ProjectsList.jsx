import ProjectsListItem from "./ProjectListItem";
import projectList from "../constants/projectData";

export default function ProjectsList() {
  return (
    <section className="home__projects">
      <header>
        <h2>Projects</h2>
      </header>
      {projectList.map((project) => (
        <ProjectsListItem key={project.id} projectItem={project} />
      ))}
    </section>
  );
}
