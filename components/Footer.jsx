import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";

import Socials from "./Socials";
import LogoErland from "./LogoErland";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bgprimary"
    >
      <div className="container mx-auto">
        <div className="py-16 xl:py-[100px] flex flex-col xl:flex-row gap-[60px] xl:gap-[30px]">
          {/** */}
          <div className="flex-1 ">
            <Link href="/" className="flex mb-6">
              {/* <Image src="/assets/logo.svg" width={230} height={48} alt=""/> */}
              <LogoErland />
            </Link>
            <p className="text-border max-w-[270px]">
              Expertos en soluciones eléctricas confiables y de vanguardia para hogares y negocios. Iluminando tu futuro con seguridad y eficiencia.
            </p>
          </div>
          {/**Contact */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Contactáme.</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill className="textaccent text-xl" />
                <p>Jr. Los Naranjos 150, Calle Z Lt. 135</p>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill className="textaccent text-xl" />
                <p>+51 999-999-999</p>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill className="textaccent text-xl" />
                <p>empresaelectrica@mail.com</p>
              </li>
            </ul>
          </div>
          {/**Newsletter */}
          <div className="flex-1 text-border">
            <h4 className="h4 text-white mb-10">Hoja Informativa.</h4>
            <p className="mb-9">
            Suscríbete a nuestra hoja informativa para recibir las últimas noticias, ofertas exclusivas y consejos de eficiencia energética directamente en tu bandeja de entrada.
            </p>
            {/**input */}
            <div className="relative max-w-[370px]">
              <input
                type="text"
                placeholder="Ingrese su Correo"
                className="bg-[#222427] h-16 w-full pl-7 rounded-none outline-none flex items-center"
              />
              <button className="bgaccent w-12 h-12 absolute right-2 top-2 bottom-2 textprimary text-xl flex items-center justify-center">
                <RiArrowRightLine />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/**copyright */}
      <div className="container mx-auto xl:px-0 py-12 border-t border-border/10 flex flex-col gap-6 xl:flex-row items-center justify-between">
        <p className="text-border">
          Copyright &copy; 2025 Empresa Eléctrica CEJ, All rights reserved.
        </p>
        <Socials
          containerStyles="flex gap-6 text-white"
          iconStyles="hover:textaccent transition-all"
        />
      </div>
    </motion.footer>
  );
};

export default Footer;
