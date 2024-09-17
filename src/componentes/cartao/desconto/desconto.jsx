import styles from "./desconto.module.css";

export default function desconto({valor}){
    return (
        <div className={styles.promocao}>
            <p>{valor}</p>
        </div>
    )
}