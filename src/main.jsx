import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './componentes/header/header.jsx'
import banner from "./assets/banner.png"
import styles from './styles/index.module.css'
import Section from "./componentes/section/section.jsx"
import Cartao from "./componentes/cartao/cartao"
import controle from "./assets/controle.png"

const texto = "Today's"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/> 
    <div className={styles.banner}>
    <img src= {banner} alt="" className={styles.imagem}/>
    </div>
    <Section subtitle={texto}/>
    <Cartao imagem ={controle}/>
    
  </StrictMode>,
)
