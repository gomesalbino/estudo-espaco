import logo from "./logo.png";
import search from "./search.png";
import styles from "./Cabecalho.module.scss";

function Cabecalho() {
    return ( 
        <section>
            <header className={styles.cabecalho}>
               <img src={logo} alt="Logo de espaço" />
               <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="search"
                placeholder="O que vc procura? ...." />
                <img  src={search} className={styles.cabecalho__loopa} alt="Icone de busca" />
               </div>
            </header>
        </section>
     );
}

export default Cabecalho;