"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import SliderBtns from "./SliderBtns";


const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/**slide 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px ]flex  items-center  gap-9 h-full">
          {/** */}

          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
        
              className="object-contain"
            fill
              quality={100}
              alt="electricidad"
            />
          </div>

          {/** */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              La colaboración fue excelente, y su habilidad para resolver desafíos complejos resultó en una entrega perfecta. Muy profesionales.
            </p>
            <p className="fontprimary font-semibold textprimary">Maria Rivera</p>
       

     
    
          </div>
        </div>
      </SwiperSlide>

         {/**slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px ]flex  items-center  gap-9 h-full">
          {/** */}

          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
        
              className="object-contain"
            fill
              quality={100}
              alt="electricidad"
            />
          </div>

          {/** */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Resultados impecables, profesionalismo y atención al detalle fueron clave. Absolutamente satisfechos con el éxito del proyecto.
            </p>
            <p className="fontprimary font-semibold textprimary">Luz Rojas</p>
          </div>
        </div>
      </SwiperSlide>


         {/**slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px ]flex  items-center  gap-9 h-full">
          {/** */}

          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
        
              className="object-contain"
            fill
              quality={100}
              alt="electricidad"
            />
          </div>

          {/** */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
            Compromiso total desde la planificación hasta la ejecución. La comunicación fue fluida y el producto final superó nuestras expectativas.
            </p>
            <p className="fontprimary font-semibold textprimary">Natalia Muñoz</p>
          </div>
        </div>
      </SwiperSlide>

      {/**Slider btns */}
      <SliderBtns/>
    </Swiper>
  );
};

export default Slider;
