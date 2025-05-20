"use client"; // Importante: Indica que este componente se renderiza en el cliente
import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";

import links from "../public/assets/links";
import LogoErland from "./LogoErland";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className=" py-4 primary ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/**log */}
          <div>
          <LogoErland/>
          {/* <Logo/> */}


          </div>

          {/**NAV */}

          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex ">
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-white text-sm uppercase  font-medium tracking-[1.2px]   after:content-['/'] after:mx-4 last:after:content-none after:text-amber-300">
                    <ScrollLink
                      to={link.path}
                      smooth
                      spy
                      className="cursor-pointer"
                      activeClass="text-accent"
                    >
                      {link.name}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>

            {}
            <button className="w-[200px] h-[54px] py-[5px] pl-[10px] pr-[5px] flex items-center justify-center min-w-[200px] bg-white  group ">
              <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold textprimary text-sm uppercase">
                Cotizar
              </div>
              <div className="w-11 h-11 primary flex items-center justify-center">
                <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200" />
              </div>
            </button>
          </nav>

          {/**nav mobile */}
          <div className="xl:hidden"><NavMobile/></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
