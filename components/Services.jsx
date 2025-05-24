"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Image from "next/image";
import Buttom from "./Button";

import servicesData from "../public/assets/servicesData.js";
import Pretitle from "./Pretitle";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duratio: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("instalaciones");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container  mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Nuestros Servicios" center />
          <h2 className="h2 mb-3">Soluciones que Ofrecemos</h2>
          <p className="mb-11 max-w-[480px] max-auto">
            Brindamos soluciones eléctricas a medida, desde el diseño hasta la
            instalación y mantenimiento, con un enfoque en la seguridad,
            eficiencia y tecnología de vanguardia.
          </p>
        </motion.div>

        {/*tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="instalaciones"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:w-[345px]">
              {servicesData.map((service, index) => {
                return (
                  <TabsTrigger
                    key={service.name}
                    value={service.name}
                    className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none cursor-pointer"
                  >
                    <div
                      className={`w-[120px] h-[100px] flex items-center justify-center absolute left-0 ${
                        activeTab === service.name
                          ? "bgprimary text-white"
                          : "bgaccent fontprimary "
                      }`}
                    >
                      <div className="text-6xl">{service.icon}</div>
                    </div>
                    <div className="uppercase fontprimary text-base font-semibold tracking-[.6px] w-[100px] ml-16">
                      {service.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/**tabs content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {servicesData.map((service, index) => {
                return (
                  <TabsContent
                    key={service.name}
                    value={service.name}
                    className="m-0"
                  >
                    <motion.div
                      variants={fadeInVariant}
                      initial="hidden"
                      whileInView="show"
                      exit="hidden"
                      className="flex flex-col md:flex-row gap-[30px]"
                    >
                      <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                        {/**images */}
                        {service.thumbs.map((thumb, index) => {
                          return (
                            <div
                              key={index}
                              className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                            >
                              {" "}
                              <Image src={thumb.url} fill alt="" />
                            </div>
                          );
                        })}
                      </div>
                      <div>
                        {/**TEXT AN BUTTON */}
                        <div>
                          <h3 className="h3 mb-6">{service.title}</h3>
                          <p className="mb-10">{service.description}</p>
                          {/** */}
                          <ul className="grid grid-cols-2 gap-4 mb-12">
                            {service.serviceList.map((servicelist, index) => {
                              return (
                                <li
                                  key={index}
                                  className="flex items-center gap-4"
                                >
                                  <div className="w-[6px] h-[6px] bgaccent"></div>
                                  <div className="capitalize font-medium fontprimary">
                                    {servicelist}
                                  </div>
                                </li>
                              );
                            })}
                          </ul>

                          {/** */}
                          <Buttom text="Más Detalles" />
                        </div>
                      </div>
                    </motion.div>
                  </TabsContent>
                );
              })}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
