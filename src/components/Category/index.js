import styles from "./Category.module.css";
import images from "../../json/marvel.json";

export const categories = [
    "Fase 1",
    "Fase 2",
    "Fase 3"
  ]
  
export function filterCategory(id) {
    return images.filter(filmes => filmes.categoria === categories[id])
}

function Category({category, children}) {

    return (
        <section className={styles.category}>
            <h1>{category}</h1>
            <div>
                { children }
            </div>
        </section>
    );
};

export default Category;