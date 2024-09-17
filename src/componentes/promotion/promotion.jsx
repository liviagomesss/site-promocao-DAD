import React from 'react'
import styles from "./Promotion.module.css"

function Promotion () {
    return (
        <div>
             <div className={styles.promotion}>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    <a href="" className={styles.shop}>
                        ShopNow
                    </a>
                </p>
                <select className={styles.dropdown} name="" id="">
                    <option className={styles.opcao} value="ingles">
                        English
                    </option>
                    <option className={styles.opcao} value="portugues">
                        Portuguese
                    </option>
                </select>
            </div>
        </div>
    )
}

export default Promotion;
