import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './fase1.module.css'

function Fase1() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.fase1}>
                    <h1>Fase 1</h1>
                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Fase1;