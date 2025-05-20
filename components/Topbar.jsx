import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      id="home"
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] flex items-center"
    >
      <div className="container mx-auto">
        {/**phone  mail social */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="hidden xl:flex items-center gap-8">

            {/**phone */}



            <div className="flex items-center gap-3">
              <div className="w-8 h-8 primary text-white flex items-center justify-center">
                <RiPhoneFill/>
              </div>
              <p className="font-medium textprimary ">+51  969-999-999</p> 
          
            </div>

            {/**mail */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 primary text-white flex items-center justify-center">
                <RiMailFill/>
              </div>
                <p className="font-medium textprimary ">email@gmail.com</p> 
      
            </div>
          </div>

          {/**scoail */}
         <Socials containerStyles= "flex items-center gap-8 mx-auto xl:mx-0" iconStyles="textprimary"/>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
