import styles from "./Header.module.css"
import styled from "styled-components"
 
// const HeaderPreco = styled.header`
// background-color: #00f;
 
// `
import Promotion from "../promotion/promotion"
import lupa from "../../assets/Search.png"
import coracao from "../../assets/Coracao.png"
import carrinho from "../../assets/Carrinho.png"
 
export default function Header(){
    return ( 
        <header>
            <Promotion/>
            <div className= {styles.cabecalho}>
                <h1>Exclusive</h1>
                <div className={styles.links}>
                    <nav>
                        <ul className = {styles.lista}>
                            <li>Home</li>
                            <li>Contact</li>
                            <li>About</li>
                            <li>Sign up</li>
                        </ul>
                    </nav>
                </div>
                
                <div className={styles.container}>
                        <form>
                            <div className={styles.input}>  
                                
                                <input className={styles.nome} type="text" name="" id ="nome" />
                                <img src={lupa} alt="" /> 
                            </div>
                        </form>
                       
                        <img src={coracao} alt="coracao" />
                        <img src={carrinho} alt="carrinho" />
                       
                </div>

            </div>
           

        </header>
   
)}



