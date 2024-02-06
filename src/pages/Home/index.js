import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Banner image="marvel-10" />
      <Container>
        <section className={ styles.home }>
          <h1>MCU: Universo Cinematográfico Marvel</h1>
          <h3>O Universo Cinematográfico Marvel começou em 2008 com Homem de Ferro e apresenta quatro fases de produções.</h3>
          <p>O Universo Cinematográfico Marvel está em andamento com sua Fase 4, que teve início com WandaVision – primeira série original da Marvel no Disney+, vale lembrar que essas produções serão essenciais para o UCM – e está próximo do lançamento de seu primeiro filme na nova etapa da franquia, Viúva Negra que é um dos quatro filmes da Marvel programados para 2021.</p>
          <p>Mas antes disso, outras três fases apresentaram produções da Marvel e, juntas, carregaram o nome de Saga do Infinito – por causa da trama das Joias do Infinito e do antagonismo de Thanos (Josh Brolin), que é considerado o melhor vilão da Marvel nos cinemas. Para atualizar você sobre o Universo Cinematográfico, sepaeamos cada uma dessas quatro fases e quais produções fazem parte dela. Dá uma olhada!</p>
        </section>
      </Container>
      
      <Footer />
    </>
  );
}

export default Home;
