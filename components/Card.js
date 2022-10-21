// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Card.module.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Card({ project }) {
  return (
    <div className={styles.Card} /*style={{background:`center / cover no-repeat url(${project.imageUrl})`}}*/>
      <div className={styles.cardHeader}>
        {/* <Image
          src={project.imageUrl}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        /> */}
        <h2>{project.title}</h2>
      </div>
      <div className={styles.projectTags}>
        {project.stack.map((each) => (
          <div className={styles.tag} key={each}>
            {each}
          </div>
        ))}
      </div>
      <div className={styles.cardBody}>
        <p>{project.description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.projectUrl}>
          {project.projectUrls &&
            Object.keys(project.projectUrls).map((key) => {
              switch (key) {
                case "githubUrl":
                  return (
                    <span key={key}>
                      <a href={project.projectUrls[key]} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="lg" />
                      </a>
                    </span>
                  );
                case "websiteUrl":
                  return (
                    <span key={key}>
                      <a href={project.projectUrls[key]} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLink} size="1x" />
                      </a>
                    </span>
                  );
                default:
                  console.log(`default case for ${key}`);
              }
            })}
        </div>
      </div>
    </div>
  );
}
