import fondoClick from "../assets/click-bg.jpg";

function Click() {
  return (
    <section
      id="click"
      className="relative py-15 px-6 text-text-light overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${fondoClick}')` }}
      />
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <h2 className="text-2xl font-title font-extrabold mb-8">
          La primera impresión es la que cuenta
        </h2>

        <div className="rounded-xl p-[2px] bg-linear-to-r from-pink-main to-yellow-main inline-block">
          <button
            className="px-6 py-3 rounded-xl bg-bg-dark text-text-light font-semibold 
        hover:opacity-90 transition"
          >
            Contactar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Click;
