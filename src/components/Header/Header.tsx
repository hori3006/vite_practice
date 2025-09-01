import *as styles from './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1 className={styles.header_title}>Hori Portfolio</h1>
        <nav className={styles.header_nav}>
            <ul className={styles.header_li}>
                <li className={styles.home_item}>
                  <Link to="/" className={styles.home_link} ><i className="fa-solid fa-house"></i></Link>
                </li>

                <li className={styles.hobby_item}>
                  <Link to="/hobby" className={styles.hobby_link} ><i className="fa-brands fa-x-twitter"></i></Link>
                 </li>

                <li className={styles.github_item}>
                  <a className={styles.github_link} href='https://github.com/hori3006'><i className="fa-brands fa-github"></i></a>
                 </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header