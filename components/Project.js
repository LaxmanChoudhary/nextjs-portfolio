import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../styles/Project.module.scss";

export default function Project({project}) {
  return (
    <div className={styles.project}>
      <div className={styles.projectHead}>
        <div className={styles.projectTitle}>{project.title}</div>
        <div className={styles.projectTags}>
          {project.stack.map(each => (
            <div className={styles.tag} key={each}>
              {each}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.projectBody}>
        {/* <div className={styles.projectHeroImg}>
          <Image layout="responsive" width="200px" height="200px" src={project.imageUrl} alt={project.title}/>
        </div> */}
        <div className={styles.projectDescription}>{project.description}</div>
        <div className={styles.projectUrl}>
          <FontAwesomeIcon icon={faLink} /><span><a href={project.projectUrl}>{project.projectUrl}</a></span>
        </div>
      </div>
    </div>
  )
}