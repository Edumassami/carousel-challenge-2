import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Category, { filterCategory } from '../../components/Category';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './fase3.module.css'

function Fase3() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.fase1}>
                    {
                        <Category categories={"FASE 3"}>
                            <Carousel>
                                {filterCategory(2).map((filmes) =>
                                    <Card
                                        imagem={filmes.imagem}
                                        titulo={filmes.titulo}
                                        legenda={filmes.descricao}
                                        key={filmes.id}
                                    />)}
                            </Carousel>
                        </Category>
                    }
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Fase3;