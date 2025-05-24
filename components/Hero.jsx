import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Hero = () => {
  return (
    <section className="h-[70vh] bg-hero-custom bg-no-repeat bg-cover bg-center relative">
      {/** */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-back/50 to-black/70 z-10"></div>

      <div className="container mx-auto h-full flex items-center">
        <div
          className="z-20 text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]
        "
        >
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-white mb-4 fontsecondary font-semibold"
          >
            <span className="textaccent">Construcciones</span> Eléctricas
            robustas y duraderas.
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9"
          >
            Desde el concepto hasta la finalización, nos aseguramos de que cada
            detalle esté optimizado desde la resistencia y la fuerza, creando
            soluciones que inspiran confianza y se mantienen firmes durante
            años.
          </motion.p>
          {/** */}

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="Nuestro Trabajo"></Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
