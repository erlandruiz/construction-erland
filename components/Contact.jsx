import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-bgaccent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/** */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] fontprimary font-bold mb-6">
                Contáctanos.
              </h4>
              <p className="mb-9">
                Estamos aquí para iluminar tu camino. Si tienes preguntas,
                necesitas soporte o deseas solicitar un servicio, no dudes en
                contactarnos. Nuestro equipo de expertos está listo para
                ofrecerte soluciones eléctricas eficientes y seguras.
              </p>
              {/** */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/**Contac Item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] textaccent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold fontprimary leading-none mb-2">
                      Chatea con Nosotros.
                    </h5>
                    <p className="mb-4">
                      Nuestro amable equipo está aquí para ayudarte.
                    </p>
                    <p className="font-semibold textprimary">
                      empresaelectrica@mail.com
                    </p>
                  </div>
                </div>

                {/**Contac Item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] textaccent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold fontprimary leading-none mb-2">
                      Oficina.
                    </h5>
                    <p className="mb-4">Ven a saludarnos a nuestra oficina. </p>
                    <p className="font-semibold textprimary">
                      Jr. Los Naranjos 150, Calle Z Lt. 135
                    </p>
                  </div>
                </div>

                {/**Contac Item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] textaccent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold fontprimary leading-none mb-2">
                      Teléfono.
                    </h5>
                    <p className="mb-4">Lunes-Viernes de 8am-5pm.</p>
                    <p className="font-semibold textprimary">+51 999-999-999</p>
                  </div>
                </div>
              </div>

              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="textprimary text-[20px]"
              />
            </div>
            {/**form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Solicita una Cita.</h2>
              <p className="mb-9">
                Estamos listos para ayudarte con tus necesidades. Completa el
                siguiente formulario para programar una cita con nuestros
                expertos. Nos pondremos en contacto contigo lo antes posible
                para confirmar los detalles y ofrecerte una solución a medida.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Contact;
