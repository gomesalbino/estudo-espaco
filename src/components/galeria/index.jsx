import Tags from "../tags";
import fotos from "./fotos.json";
import styles from "./Galeria.module.scss";
import Cards from "./cards";
import { useState } from "react";

function Galeria() {

    const [itens, setItens] = useState(fotos);
    const tags = [...new Set(fotos.map((valor)=> valor.tag))]


    const filtraFotos = (tag) => {
        const novasFotos = fotos.filter((foto) => {
            return foto.tag === tag;
        });

        setItens(novasFotos);
    }

    return (
        <section>
            <h2 className={styles.tags__titulotags}> Naveque pela galeria </h2>
            <Tags tags={tags}  filtraFotos={filtraFotos} setItens={setItens}/>
            <Cards fotos={itens} styles={styles} />
        </section>
      );
}

export default Galeria;


