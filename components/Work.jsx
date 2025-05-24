import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

import worksData from "@/public/assets/worksData";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Nuestro Trabajo" center />
          <h2 className="h2 mb-3">Conoce Nuestros Proyectos.</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Brindamos soluciones de diseño eléctrico con altos estándares de
            calidad e innovación, adaptadas a las necesidades de cada proyecto.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {worksData.map((work, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={work.img}
                fill
                className="object-cover"
                alt=""
                quality={100}
              />
              <div className="w-[90%] h-[84px] bgprimary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h4 className="text-white fontprimary font-semibold tracking-[1px] uppercase">
                    {work.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="textaccent text-xl" />
                    <p className="text-xs">{work.description}</p>
                  </div>
                </div>
                <Link
                  href={work.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bgaccent fontprimary text-2xl flex justify-center items-center absolute right-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Work;
