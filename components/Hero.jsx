import Button from "./Button";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero-custom bg-no-repeat bg-cover bg-center relative">
      {/** */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-back/50 to-black/70 z-10"></div>

      <div className="container mx-auto h-full flex items-center">
        <div className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]
        ">
          <h1 className="h1 text-white mb-4">
            <span className="textaccent">Construcciones</span> Eléctricas
            robustas y  duraderas.
          </h1>
          <p className="mb-9">
            Desde el concepto hasta la finalización, nos aseguramos de que cada
            detalle esté optimizado desde la resistencia y la fuerza, creando
            soluciones que inspiran confianza y se mantienen firmes durante
            años.
          </p>
          {/** */}

          <div>
            <Button text="Nuestro Trabajo"></Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
