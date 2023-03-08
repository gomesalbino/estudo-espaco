import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import styles from "./Rodape.module.scss";

function Rodape() {
    return ( 
       <footer className={styles.rodape}>
            <div className={styles.rodape__div}>
                <a href="#" className={styles.rodape__link}>
                    <img src={facebook} className={styles.rodape__imagem} alt="Imagem do facebook" />
                </a>
                <a href="#" className={styles.rodape__link}>
                    <img src={instagram} className={styles.rodape__imagem} alt="Imagem de instagram" />
                </a>
                <a href="#" className={styles.rodape__link}>
                    <img src={twitter} className={styles.rodape__imagem} alt="Imagem de Twitter" />
                </a>
            </div>
       </footer>
     );
}

export default Rodape;