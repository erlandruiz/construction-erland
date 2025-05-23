import Image from "next/image";
import Button from "./Button";
import Pretitle from "./Pretitle";
import Slider from "./Slider";

Image;

const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row relative">
          {/** */}
          <div className="flex-1 max-w-[484px] xl:pt-[54px] mb-12 xl:mb-0">
            <Pretitle text="Testimoniales" />

            <h2 className="h2 mb-6">
              Construido sobre la confianza, Comprobado por los resultados.
            </h2>
            <p className="mb-10 max-w-[420px]">
             Desde viviendas hasta espacios comerciales, nuestros clientes comparten sus experiencias de trabajar con nosotros. Vea cómo hemos ayudado a hacer realidad sus sueños.
            </p>
            <Button text="Trabaja con Nosotros " />
          </div>
          {/**img */}

          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-[570px] xl:h-[580px]">
              <Image
                src="/assets/img/testimonials/img.jpg"
                fill
                alt=""
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="xl:absolute xl:bottom-0 xl:right-[160px] relative max-w-max ">
              {/**quote */}
              <Image
                src="/assets/img/testimonials/quote.svg"
                alt="cita"
                width={20}
                height={36}
                quality={100}
                className="absolute z-20 -top-4 left-[60px]"
              />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
