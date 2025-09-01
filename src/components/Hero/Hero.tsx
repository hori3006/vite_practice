import *as styles from "./Hero.css"
import profileImg from '../..//img/profile.jpg'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.hero_title}>Hori Soshin</h1>
        <p className={styles.profile_text}>よろしくお願いいたします。</p>
      </div>
       <img className={styles.profile_img} src={profileImg}/>
    </div>
  )
}

export default Hero