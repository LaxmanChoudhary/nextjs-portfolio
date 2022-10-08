import styles from '../styles/SideBar.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCertificate, faHome, faTerminal, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  const router = useRouter();

  return(
    <nav className={styles.navbar}>
      <div className={styles.navlink+" "+(router.pathname == "/"?"active":"")}>
        <Link href="/">
          <a><FontAwesomeIcon icon={faHome} size="xl" /></a>
        </Link>
      </div>
      <div className={styles.navlink+" "+(router.pathname == "/stats"?"active":"")}>
        <Link href="/stats">
          <a><FontAwesomeIcon icon={faUserAstronaut} size="xl"/></a>
        </Link>
      </div>
      <div className={styles.navlink+" "+(router.pathname == "/portfolio"?"active":"")}>
        <Link href="/portfolio">
          <a><FontAwesomeIcon icon={faCertificate} size="xl"/></a>
        </Link>
      </div>
      <div className={styles.navlink+" "+(router.pathname == "/more"?"active":"")}>
        <Link href="/more">
          <a><FontAwesomeIcon icon={faTerminal} size="xl"/></a>
        </Link>
      </div>
    </nav>
  )
}

export default SideBar