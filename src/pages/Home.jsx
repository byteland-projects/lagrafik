import About from "../components/About";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Values from "../components/Values";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Values />
      <Contacto />
      <Footer /> 
    </>
  );
}

export default Home;
