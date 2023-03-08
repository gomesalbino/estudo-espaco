
import styles from "../menu/Menu.module.scss";

import home from "../../assets/icones/home.png";
import maisCurtidas from "../../assets/icones/mais-curtidas.png";
import maisVistas from "../../assets/icones/mais-vistas.png";
import novas from "../../assets/icones/novas.png";
import  surpreendaMe from "../../assets/icones/surpreenda-me.png";

function Menu() {
    return ( 
       <>
         <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img className={styles.menu__icone} src={home} alt="Icone de" />
                    <a className={styles.menu__link} href="#">Inicio</a>
                </li>
                <li className={styles.menu__item}>
                    <img className={styles.menu__icone} src={maisCurtidas} alt="Icone de" />
                    <a className={styles.menu__link} href="#">Mais curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img className={styles.menu__icone} src={maisVistas} alt="Icone de" />
                    <a className={styles.menu__link} href="#">Mais vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img className={styles.menu__icone} src={novas} alt="Icone de" />
                    <a className={styles.menu__link} href="#">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img className={styles.menu__icone} src={surpreendaMe} alt="Icone de" />
                    <a className={styles.menu__link} href="#">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
       </>
     );
}

export default Menu;