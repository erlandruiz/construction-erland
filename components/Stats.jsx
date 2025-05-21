"use client"

import { useRef } from "react";
import { useInView } from "framer-motion";
import CountUp from "react-countup";

import statsData from "../public/assets/statsData.js";

const Stats =()=>{
    const ref = useRef(null);
    const inView = useInView(ref, {treshold:0.2} )
    return(
        <div ref={ref} className="mt-16 xl:mt-32 bgprimary py-10 w-full">
            <div className="container mx-auto h-full">
                <div className="text-white flex flex-col items-center justify-between xl:flex-row h-full gap-12 text-center xl:text-left">
                    {statsData.map((stat, index)=>{
                    return(
                        <div className="w-full" key={index}>
                            <div className="text-5xl font-semibold fontsecondary">
                                {inView && (<CountUp start={0} end={stat.endCountNum} delay={0.5} duration={3}/>)}
                                <span>{stat.enCountText}</span>
                            </div>
                            <p className="fontsecondary">{stat.text}</p>
                        </div>
                    )
                })}
                
                </div>
            </div>
        </div>
    )
}

export default Stats;