import Image from "next/image";
import Pretitle from "./Pretitle";
import SignatureErland from "./SignatureErland";
import Button from "./Button";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/**text */}
          <div className="flex-1">
            <div className="max-w-[540px]">
              <Pretitle text="Sobre Nosotros" />
              <h2 className="h2 mb-6">
                Comprometidos con la Excelencia en Cada Detalle.{" "}
              </h2>
              <p className="mb-11">
                Nuestro compromiso inquebrantable con la excelencia impulsa cada
                proyecto que emprendemos. Desde la concepción hasta la
                finalización, elaboramos meticulosamente soluciones que encarnan
                calidad, precisión e innovación.
              </p>
              <div className="w-max flex-col text-right mb-10">
                {/* <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt=""
                /> */}
                <SignatureErland text="Cristhian Cruz Alab"/>
                <p>CEO</p>
              </div>

              {/** */}
              <Button text="Contáctanos" />
            </div>
          </div>
          {/*/*/}
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/**/}
              <div className="hidden xl:flex w-[444px] h-[493px] bgaccent absolute -top-4 -left-4 -z-10">

              </div>
              <Image
                src="/assets/img/about/img.jpg"
                width={444}
                height={493}
                alt=""
                
             
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
