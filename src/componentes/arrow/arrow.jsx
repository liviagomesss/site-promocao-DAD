import styles from "./arrow.module.css"


import setaDireta from "../../assets/Fill With Left Arrow.svg"
import setaEsquerda from "../../assets/Fill with Right Arrow.svg"

export default function arrow (){
    return (
        <div className= {styles.arrows}>
              <img src={setaDireta} alt="Seta Direita" />
              <img src={setaEsquerda} alt="Seta Esquerda" />
            
        </div>
    )
}