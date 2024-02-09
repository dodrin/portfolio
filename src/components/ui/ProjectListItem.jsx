import "../../styles/Projects.css";

export default function ProjectsListItem(props) {
  const { projectItem } = props;

  return (
    <article>
      <img
        src={projectItem.screenshot}
        alt={projectItem.title}
        className="screenshot"
      />
      <h3>{projectItem.title}</h3>
      <ul>
        <li>{projectItem.year}</li>
        <li>{projectItem.stack}</li>
      </ul>
    </article>
  );
}
