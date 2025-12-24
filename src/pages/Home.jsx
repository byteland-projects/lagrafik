import About from "../components/About";
import Contacto from "../components/Contacto";
import Downloads from "../components/Downloads";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Values from "../components/Values";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Products />
      <Downloads />
      <Contacto />
      <Footer /> 
    </>
  );
}

export default Home;
