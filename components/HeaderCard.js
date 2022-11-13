import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ProfileImg from "../public/images/profile.jpg"
import styles from "../styles/HeaderCard.module.scss";

export default function HeaderCard({ user }){
  const firstName = user.firstName[0].toUpperCase() + user.firstName.slice(1)
  const lastName = user.lastName[0].toUpperCase() + user.lastName.slice(1)

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.pic}>
          <Image src={ProfileImg} height="150" width="150" alt="userProfile"  />
        </div>
        <h1>{`${firstName} ${lastName}`}</h1>
        <p>A Software Engineer</p>
      </div>
      <div className={styles.socialLinks}>
        <div className={styles.link}>
          <a href="https://www.linkedin.com/in/laxmanchoudhary" alt="linkedin" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="xl"/>
          </a>
        </div>
        <div className={styles.link}>
          <a href="https://github.com/LaxmanChoudhary" alt="github" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="xl"/>
          </a>
        </div>
        <div className={styles.link}>
          <a href="mailto:im.choudharylaxman@gmail.com" alt="mailid" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="xl"/>
          </a>
        </div>
      </div>
    </div>
  )
}