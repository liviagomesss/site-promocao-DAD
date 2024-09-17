import styles from "./cartao.module.css";
import Desconto from "./desconto/desconto"
import olhar from "../../assets/Fill Eye.svg"
import curtir from "../../assets/Fill Heart.svg"



export default function Cartao({imagem}){
    return (
        <div className={styles.produto}>
            <Desconto valor="-40%"/>

            <div className={styles.curtirolhar}>
                <img src={olhar} alt="olho" />
                <img src={curtir} alt="curtir" />


            </div>

            <div className={imagem}>
                <img src={imagem} alt="foto do produto" />
            </div>
    
        </div>
    )
}