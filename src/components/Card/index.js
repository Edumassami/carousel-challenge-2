import styles from "./Card.module.css";

function Card( {imagem, titulo, legenda} ) {
    return (
        <section className={styles.card}>
            <a>
                <h2>{`${titulo}`}</h2>
                <img src= {`${imagem}`} alt="Capa" />
                <p>{`${legenda}`}</p>
            </a>
        </section>
    );
};

export default Card;