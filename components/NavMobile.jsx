"use client";
import { useState } from "react";

import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { RiMenu3Fill } from "react-icons/ri";
import Logo from "./Logo";
import Socials from "./Socials";
import LogoErland from "./LogoErland";

import { Link as ScrollLink } from "react-scroll";

import links from "../public/assets/links.js";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="text-white flex items-center justify-center text-3xl"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>

      <SheetContent className="primary border-none text-white ">
        <div  className="flex flex-col pt-16 pb-8  items-center justify-between h-full">
          <SheetHeader>
            <SheetTitle>
              {/* <LogoErland /> */}
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">Menu </SheetDescription>
          </SheetHeader>

          <ul className="w-full flex flex-col gap-10 justify-center text-center">
            {links.map((link, index) => {
              return (
                <li key={index} className="text-white uppercase fontprimary font-medium tracking-[1.2px]">
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy 
                    duration={500}
                    className="cursor-pointer"
                    activeClass="text-accent"
                    onClick={()=>{setIsOpen(false)}}
                  >
                    {link.name}{" "}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
          {/**socials */}
          <Socials containerStyles="text-white text-xl flex gap-6"/>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
