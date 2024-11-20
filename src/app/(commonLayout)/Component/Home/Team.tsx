import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { BiCircleQuarter } from 'react-icons/bi';

const Team = () => {
    return (
        <div>
            <div className="mt-[120px]   ">

                <div className="w-fll  grid lg:grid-cols-2 grid-cols-1 gap-10 items-center lg:w-[80%] mx-auto    ">
                    <div className=" lg:h-[500px] rounded-[10px] lg:p-8 lg:mt-0 p-5     " >
                        <h1 className=" text-[#27ae60] text-sm font-semibold  leading-relaxed">
                            Team
                        </h1>
                        <div className=" text-[#292929] lg:text-[30px] text-2xl font-semibold lg:leading-[40px]">Want to be an entrepreneur or creator at Persist, but still in college?</div>
                        <div className="w-[70px] h-1 bg-mycustomcolors-secondary rounded-[10px] my-3" />
                        <p className=" text-[#555555] text-sm font-normal leading-snug">Persist Ventures brought the California Creators Institute International to Pillai College in Navi Mumbai, focusing on building strong founders and influencers.</p>

                        <div className=" my-4 h-[106px] bg-neutral-100 rounded-[10px] items-center justify-center  flex" >
                            <span className='text-5xl mt-[-40px] text-mycustomcolors-secondary '>
                                ❝
                            </span>
                            <p className=" items-center  text-mycustomcolors-text text-sm font-medium  leading-snug">
                            Persist Ventures brought the California Creators Institute International to Pillai College in Navi Mumbai, focusing on building strong founders and influencers
                            </p>
                        </div>

                        <Button className="w-[193px]  h-[58px] bg-mycustomcolors-secondary mt-5 rounded-[5px]
                                hover:motion-scale-out-105
                                    hover:bg-mycustomcolors-secondary
                                    text-xl

                                
                                " >
                            Join Now 
                            <span>
                                <Heart size={20} className="text-white" />

                            </span>
                        </Button>

                    </div>

                    <div className=" relative lg:left-10 top-10 lg:w-full  w-[80%] mx-auto      ">
                        <Image src="/Element.png" alt="s" width={300} height={25} className="mx-auto absolute lg:left-20 left-[-5%] lg:w-[350px]
                     w-52  lg:right-[-200px] lg:top-[-50px] top-[-20%]  " />

                        <img 
                        src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/6668a5b8ac78f6cce8b6b470_bb446c34-f806-444b-813a-22dedf8d65db.png" alt="s"
                        className="lg:w-[500px] w-[300px]  bg-[#d9d9d9] lg:rounded-full rounded-[200px] relative z-20  " />

                    <div className=" relative lg:left-[18%] left-4  top-[-40px] z-50   ">



                            <div className=" lg:h-[70px] w-[250px] h-[70px]      bg-white rounded-full shadow overflow-hidden " >

                                <div className='relative lg:left-8 left-[14%] lg:top- top-3  '>
                                    <div className="w-[50px] h-[50px] left-5 absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-12  absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-20  absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-28  absolute bg-[#d9d9d9] rounded-full border-2 border-white" />
                                    <div className="w-[50px] h-[50px] left-28  absolute bg-[#d9d9d9] rounded-full border-2 border-white flex items-center justify-center text-center " >
                                        100+
                                    </div>

                                </div>

                            </div>
                    </div>



                    </div>

                </div>

            </div>
        </div>
    );
};

export default Team;