import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import faqItemsData from "@/public/assets/faqItemsData";

//animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};
const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/**text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">¿Tienes Preguntas? estamos atentos.</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Desde la planificación del proyecto hasta los toques finales, hemos
            respondido las preguntas más comunes para ayudarlo a tomar
            decisiones informadas.
          </p>
        </motion.div>
        {}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((faqItem, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index} //pass indec to control stagger effect
              >
                <FaqItem
                  title={faqItem.title}
                  description={faqItem.description}
                />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
