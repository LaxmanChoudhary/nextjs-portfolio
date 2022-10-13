import styles from '../styles/SideBar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faHome, faTerminal, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  const router = useRouter();

  return(
    <nav className={styles.navbar}>
      <div className={styles.navlink}>
        <Link href="/" replace>
          <a className={router.pathname == "/"?"active":""}><FontAwesomeIcon icon={faHome} size="xl" /></a>
        </Link>
      </div>
      <div className={styles.navlink}>
        <Link href="/stats" replace>
          <a className={router.pathname == "/stats"?"active":""}><FontAwesomeIcon icon={faUserAstronaut} size="xl"/></a>
        </Link>
      </div>
      <div className={styles.navlink}>
        <Link href="/portfolio" replace>
          <a className={router.pathname == "/portfolio"?"active":""}><FontAwesomeIcon icon={faCertificate} size="xl"/></a>
        </Link>
      </div>
      <div className={styles.navlink}>
        <Link href="/more" replace>
          <a className={router.pathname == "/more"?"active":""}><FontAwesomeIcon icon={faTerminal} size="xl"/></a>
        </Link>
      </div>
    </nav>
  )
}

export default SideBar