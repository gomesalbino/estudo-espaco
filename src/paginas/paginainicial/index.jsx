import banner from "../../paginas/paginainicial/banner.png"
import styles from "./Paginainicial.module.scss";


import Cabecalho from "components/cabecalho";
import Menu from "components/menu";
import Galeria from "components/galeria";
import Rodape from "components/rodape";
import Populares from "components/populares";


function Paginainicial() {
    return (
        <section>
            <Cabecalho />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <h1 className={styles.banner__titulo}>A galeria mais completa do espeço </h1>
                        <img src={banner} className={styles.banner__imagem} alt="A imagem da terra vista do espaço" />
                    </div>
                </section>
               
                    <div className={styles.galeria}>
                        <Galeria />
                        <Populares />
                    </div>
                
            </main>

            <section>
                <div>
                    <Rodape />
                </div>
            </section>
        </section>
    );
}

export default Paginainicial;