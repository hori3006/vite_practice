import * as styles from "./Hobby.css"
import animeImg from "../../img/meidragon.jpg"
import gameImg from "../../img/game.png"
import outdoorImg from "../../img/outdoor.jpeg"

const Hobby = () => {
    return(
        <div className={styles.hobby}> 
            <h1 className={styles.title}>最近はまっていること</h1>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.animeItem}>
                        <h2 className={styles.animeTitle}>アニメ</h2>
                        <img className={styles.animeImg} src={animeImg} />
                        <p className={styles.animeText}>アニメは小林さん家のメイドラゴンにはまっていて、映画も見に行きました。</p>
                    </li>

                    <li className={styles.gameItem}>
                        <h2 className={styles.gameTitle}>ゲーム</h2>
                        <img className={styles.gameImg} src={gameImg}/>
                        <p className={styles.gameText}>ゲームはシャドウバースにはまっており、グループが最近ダイヤに初めて行きました。</p>
                    </li>

                    <li className={styles.outdoorItem}>
                        <h2 className={styles.outdoorTitle}>アウトドア</h2>
                        <img  className={styles.outdoorImg} src={outdoorImg}/>
                        <p className={styles.outdoorText}>先日ロードバイクを奮発して購入したので、移動にかなり重宝しています。</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Hobby;