import styles from '../styles/ThemeBtn.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrush } from '@fortawesome/free-solid-svg-icons'

const toggleTheme = () => {
  document.body.classList.toggle('light-theme')
}

export default function ThemeBtn() {
  return(
    <div onClick={() => toggleTheme()} className={styles.themeBtnCon}>
      <div className={styles.themeBtn}><FontAwesomeIcon icon={faBrush} size="xl"/></div>
    </div>
  )
}