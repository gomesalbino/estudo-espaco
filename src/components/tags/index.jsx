import styles from "../tags/Tags.module.scss";
import fotos from "../galeria/fotos.json";

function Tags({tags, filtraFotos, setItens }) {
    return (  
        <div className={styles.tags}>
            <p className={styles.tags__titulotags}>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tags.map((tag) =>{
                    return (
                        <li  key={tag} onClick={()=>filtraFotos(tag)} className={styles.tags__item}>{tag}</li>
                    );
                })}
                <li onClick={()=>setItens(fotos)} className={styles.tags__item}>Todas</li>
            </ul>
        </div>
    );
}

export default Tags;