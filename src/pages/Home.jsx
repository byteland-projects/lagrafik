import About from "../components/About";
import Click from "../components/Click";
import Contacto from "../components/Contacto";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Contacto />
      <Footer /> 
    </>
  );
}

export default Home;
