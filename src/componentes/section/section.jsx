import styles from "./section.module.css";
import Arrow from "../arrow/arrow"



export default function Section({title, subtitle, products}){
    return(
        <div className={styles.TUDOO}>
            <div className={styles.container}>
                <div className={styles.rediv}></div>
                <p>{subtitle}</p>
            </div>
            <div className={styles.alinhasrSetas}>
                <div className={styles.tituloehours}>
                    <h2>Flash Sales</h2>
                    <div className={styles.dates}>
                        <nav>
                            <ul className={styles.lista}>
                                <li>Days</li>
                                <li>Hours</li>
                                <li>Minutes</li>
                                <li>Seconds</li>
                            </ul>
                        </nav>
                        <nav>
                            <ul className={styles.listaHours}>
                                <li>03</li>
                                <li>:</li>
                                <li>23</li>
                                <li>:</li>
                                <li>14</li>
                                <li>:</li>
                                <li>07</li>
                            </ul>
                        </nav>
                    </div>
                    
                </div>
                <Arrow/>

            </div>
          


        </div>
    )
}
 