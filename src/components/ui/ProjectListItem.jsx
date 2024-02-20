import "../../styles/Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsListItem(props) {
  const { projectItem } = props;

  return (
    <article>
      <h3>{projectItem.title}</h3>
      <div className="project__container">
        <img
          src={projectItem.img}
          alt={projectItem.title}
          className="screenshot"
        />

        <div className="project__links">
          <div className="icons">
            <a
              href={projectItem.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2xl" className="icon" />
            </a>

            {projectItem.preview ? (
              <a
                href={projectItem.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGlobe} size="2xl" className="icon" />
              </a>
            ) : (
              <div></div>
            )}
          </div>
          <div className="project__year">{projectItem.year}</div>
        </div>
      </div>
    </article>
  );
}
