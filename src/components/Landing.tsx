import Image from "next/image";
import Link from "next/link";
import TypingText from "./TypingText";
import { motion } from "framer-motion";
import {Fade,} from "./Animation";
import React, { lazy, Suspense } from 'react';
import Social  from "./Social";

const YouTube = lazy(() => import('react-youtube'));





const Landing = ()=>{

    const videoId = "KB11VYwccf8"

    return(      
       <div>
          <div className='md:w-[1300px]  p-[35px] mt-[30px] md:mt-[0px]  '>
            <div className='flex flex-col gap-[32px] md:gap-[0px] md:px-[50px] '>
                <motion.div 
                 initial={"offscreen"}
                 whileInView={"onscreen"}
                 viewport={{once:true, amount:0.5}}
                 transition={{staggerChildren:0.5}}
                 className="md:flex justify-between items-center gap-10 "
                 
                 >
                    <div className="w-1/1 md:w-1/2 flex flex-col ">
                        <TypingText text="Be part of a groundbreaking initiative with TIA"/>
                        <motion.p variants={Fade} 
                           className="text-[16px] md:text-[20px] font-medium max-w-[350px] md:w-[80%] text-left  md:my-[30px] leading-[20px] md:leading-[30px]">
                            The first blockchain project to seamlessly 
                            integrate social media, 
                            cybersecurity, metaverse and crypto exchange.
                        </motion.p>
                        <motion.div variants={Fade} className="flex justify-start mt-[32px] gap-7">
                            <Link href="/#Contact">
                              <button className=" w-[128px] btn-gradient md:w-[186px] h-[44.22px] md:h-[60px] mb-[56px] border-[1px] border-[#38DBFF]  flex text-center justify-center rounded-[64px]  text-[#FFF] text-[11px] md:text-[14px] font-[500] leading-[18px] md:px-[40px] px-[20px] md:py-[21px] py-[10.58px]  ">
                               JOIN WAITLIST
                                </button>
                            </Link>
                            <Link href="/#project">
                                <button className=" w-[128px] btn-white md:w-[186px] h-[44.22px] md:h-[60px] mb-[56px] border-[1px] border-[#38DBFF]  flex text-center justify-center rounded-[64px]  text-[#000] text-[11px] md:text-[14px] font-[500] leading-[18px] md:px-[40px] px-[20px] md:py-[21px] py-[10.58px] gradient-white">
                                OUR PROJECT
                                </button>
                            </Link>
                            
                        </motion.div>

                    </div>
                    <div className="flex flex-col md:w-[45%] ">
                    <div className="video mb-[40px]">
                     <Suspense fallback={<div>Loading...</div>}>
                        <YouTube
                        videoId={videoId}
                        className="md:flex"
                        />
                     </Suspense>
                    </div>
                        <div 
                         style={{
                            background: " rgba(101, 180, 193, 0.17)",
                            border: "0.4px solid #65B4C1",
                            borderRadius: "12px",
                            // width:"100%"
                         }}
                            > 
                            <Social padding={5}/>                  
                        </div>
                    </div>
                </motion.div>
                
            </div>
         </div>
        </div>     

    )
}


export default Landing;