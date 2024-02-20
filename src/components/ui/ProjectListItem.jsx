import "../../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsListItem(props) {
  const { projectItem } = props;

  return (
    <article>
      <h3>{projectItem.title}</h3>
      <div>
        <img
          src={projectItem.img}
          alt={projectItem.title}
          className="screenshot"
        />

        <div className="icon-container">
          <a
            href={projectItem.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" className="icon" />
          </a>

          {projectItem.preview ? (
            <a
              href={projectItem.preview}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGlobe} size="xl" className="icon" />
            </a>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </article>
  );
}
