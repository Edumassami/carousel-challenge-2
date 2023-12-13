import styles from "./Card.module.css";

function Card( {imagem} ) {
    return (
        <section className={styles.card}>
            <a>
                <img src= {`${imagem}`} alt="Capa" />
            </a>
        </section>
    );
};

export default Card;