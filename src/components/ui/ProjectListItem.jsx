import "../../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsListItem(props) {
  const { projectItem } = props;

  return (
    <div>
      <div>
        <img
          src={projectItem.img}
          alt={projectItem.title}
          className="screenshot"
        />
      </div>
      <div>
        <h3>{projectItem.title}</h3>
        <a href={projectItem.github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>

        {projectItem.preview ? (
          <a
            href={projectItem.preview}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGlobe} size="xl" />
          </a>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
