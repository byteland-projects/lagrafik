import Button from "./Button";
import fondo from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section
      id="inicio"
      className="flex flex-col items-center justify-center min-h-screen bg-var(--color-bg-1) text-var(--color-text-light) px-4"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${fondo}')` }}
      />
      <div className="absolute inset-0 z-0 bg-linear-to-b from-black/70 via-black/80 to-[#020202]" />

          <div className="relative place-items-center gap-12 lg:gap-16 max-w-7xl w-full z-10 items-center">

      <h1 className="text-3xl lg:text-5xl font-title font-extrabold text-center mb-8">
        La publicidad es{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-main to-yellow-main">
          la mejor inversión
        </span>
        <br></br>
        para tu negocio.
      </h1>
      <p className="text-lg text-center text-text-mid mb-12 max-w-2xl">
        En La Grafik te ayudamos a crear materiales gráficos de alta calidad que
        realmente generen resultados.
      </p>
      <Button nombre={"Ver productos"} />
    </div>
    </section>
  );
}

export default Hero;
