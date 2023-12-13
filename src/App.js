import Banner from "./components/Banner";
import Card from "./components/Card";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import images from "./json/marvel.json";

function App() {
  return (
    <>
      <Header />
      <Banner image="marvel-10" />
      <Container>
        <h1>Fase 1</h1>
        <section className="cards">
          {
            images.map((filmes) => <Card imagem={filmes.imagem} key={filmes.id} />)  
          }
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default App;
