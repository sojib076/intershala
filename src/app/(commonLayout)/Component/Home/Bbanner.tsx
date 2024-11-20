import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { BiWorld } from "react-icons/bi";


const Bbanner = () => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2  lg:pl-60  overflow-x-hidden   ">

            <div className=" h-[300px] bg-black  lg:p-12 p-8 " >
                <h1 className="lg:w-[435px] text-white text-3xl font-semibold font-['Poppins'] leading-[37px]  ">We Change Your Life<br />& World</h1>
                <div className="w-[60px] h-[3px] bg-mycustomcolors-primary rounded-[50px] my-4 " />
                <p className=" text-neutral-100 text-base font-normal font-['Poppins'] leading-snug lg:mb-10 mb-5 ">Penatibus et magnis dis parturient montes nascetur ridiculus. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
              
            </div>
            <div className=" h-[300px] bg-purple-900 lg:p-12 p-8 " >
                <h1 className="lg:w-[435px] text-white text-3xl font-semibold font-['Poppins'] leading-[37px]  ">We Change Your Life<br />& World</h1>
                <div className="w-[60px] h-[3px] bg-mycustomcolors-primary rounded-[50px] my-4 " />
                <p className=" text-neutral-100 text-base font-normal font-['Poppins'] leading-snug lg:mb-10 mb-5 ">Penatibus et magnis dis parturient montes nascetur ridiculus. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
          

            </div>
            <div className=" h-[300px] bg-purple-950  lg:p-12 p-8 " >
                <h1 className="lg:w-[435px] text-white text-3xl font-semibold font-['Poppins'] leading-[37px]  ">We Change Your Life<br />& World</h1>
                <div className="w-[60px] h-[3px] bg-mycustomcolors-primary rounded-[50px] my-4 " />
                <p className=" text-neutral-100 text-base font-normal font-['Poppins'] leading-snug lg:mb-10 mb-5 ">Penatibus et magnis dis parturient montes nascetur ridiculus. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.</p>
             

            </div>


        </div>
    );
};

export default Bbanner;