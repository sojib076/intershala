import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {  FaHandHoldingHeart, FaPlay } from "react-icons/fa6";
import Bbanner from "./Bbanner";


const Banner = () => {
    return (
        <div>
            <div className=" w-full h-auto lg:py-32 py-10 bg-[#d9d9d9] grid lg:grid-cols-2 grid-cols-1 items-center lg:gap-20 lg:px-32  " >
            

                    <div className="flex justify-center items-center    ">

                        <div className="lg:w-[600px] w-full px-5 ">

                            <h1 className="text-[#27AE60] font-semibold text-[20px] text-left "> Save Life, Save the Planet</h1>
                            <h1 className=" lg:text-[60px] text-4xl lg:leading-[60px] leading-10 font-bold my-4 "> {`Venturing forever, together
                                 `}
                            </h1>
                            <div className="w-[62px] h-[4px] bg-[#f9a826] my-4 
                                rounded-lg 
                                " />

                            <p className="lg:w-[499px] text-[#555555] text-lg font-normal  leading-relaxed">
                            We bring visions to life with a full suite of agencies to help companies start and scale.
                            </p>


                            <div className="mt-8 flex lg:gap-10 gap-2 items-center motion-preset-flomoji-👉 " >
                                <Button className="lg:w-[193px]  h-[58px] bg-mycustomcolors-secondary rounded-[5px]
                                hover:motion-scale-out-105
                                    hover:bg-[#27AE60]

                                    text-sm

                                
                                " >
                                    Apply For Fellowship
                                     <span>
                                        <Heart size={20} className="text-white" />

                                    </span>
                                </Button>
                                
                                <div className="flex gap-5 items-center  ">
                                    <FaPlay className="text-[#f9a826]  w-[60px] h-[60px] p-5 bg-white rounded-full hover:motion-preset-bounce  " />
                                    <span className="text-[#27AE60] font-semibold  text-sm">Watch Video</span>



                                </div>
                            </div>
                        </div>

                    </div>
              

                <div className="relative   lg:p-0 p-4 ">
               


                    <img
                    
                        src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/627d1e14ef51702e03cde3a0_PV.svg"
                        alt="hero"
                    className="lg:w-[600px]  lg:h-[600px] h-[400px]rounded-lg" />
                    <div className="max-w-[310px] h-[190px] bg-white rounded-[10px] shadow lg:absolute relative  lg:bottom-[-40px] lg:left-16 p-7 left-4 top-[-40px] lg:top-[75%]  " >
                        <h1 className="w-[250px] text-[#27ae60] text-[54px] font-bold font-['Poppins'] leading-[60px]">1K+</h1>
                        <hr className="w-[70px] h-[4px] bg-[#ec8e11] rounded-[50px]" />
                        <p className="w-[250px] text-[#292929] text-lg font-semibold font-['Poppins'] leading-relaxed mt-2">
                            Number of Download on playstore
                            
                        </p>
                    </div>

                </div>

            </div>
           <div className="relative top-[-20px] "> 
           <Bbanner />
           </div>
        </div>
    );
};

export default Banner;