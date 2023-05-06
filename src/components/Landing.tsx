import Image from "next/image";
import Link from "next/link";
// import { useMediaQuery } from "react-responsive";
// import Video from "./VideoBackground";
import YouTube from 'react-youtube';
import TypingText from "./TypingText";
import { motion } from "framer-motion";
import {Fade,} from "./Animation";


const Landing = ()=>{
    const videoId = 'HZB0DG-mzCw';
    // const isMobile = useMediaQuery({ maxWidth: 768 });

    return(      
       <div className=" pb-6">
               {/* <Video
					source="/web.mp4"
					fallbackImage="fallback.svg"
					className="covers "
				/> */}
                {/* <Video
					source="/globalmobile.mp4"
					fallbackImage="fallback.svg"
					className="covers block md:hidden"
				/> */}
          {/* {!isMobile ? <Video source="/web.mp4"  fallbackImage="fallback.svg"/> :<Video source="/mobile.mp4"  fallbackImage="mobilefallback.svg"/>} */}
          <div className='md:w-[1300px]  px-[35px] mt-[50px] md:mt-[0px] md:px-[0]'>
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
                        {/* <h4 className="font-bold text-[38px] md:text-[60px] leading-[51px] md:leading-[73px]  text-left md:mt-[60px] mb-[32px] md:mb-[0px] animated-text">Be part of a groundbreaking initiative with TIA <br/></h4> */}
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
                    <div className="flex flex-col">
                      <div className="video">
                        <YouTube videoId={videoId} className="hidden md:flex" />
                      </div>
                        {/* <Image src="/videoframe.svg" width={486} height={286} alt="icon" className="hidden md:block" /> */}
                        <div 
                         style={{
                            background: " rgba(101, 180, 193, 0.17)",
                            border: "0.4px solid #65B4C1",
                            borderRadius: "12px",
                            // width:"100%"
                         }}
                        className="flex  md:gap-3  justify-around items-center h-[82px] md:p-5 md:mt-[60px]  cursor-pointer">
                            <Link href="https://m.facebook.com/108226041732272/" target="_blank"  className="text-[#706F74] font-medium">
                            <Image src="/fbgrey.svg" width={40} height={40} alt="facebook-icon" />
					        </Link>
                            <Link href="https://twitter.com/TiaEcosystem?t=Pgz4apbcKgHVxciG0GQo0w&s=08"  target="_blank" className="text-[#706F74] font-medium">
					        <Image src="/twtgrey.svg" width={40} height={40} alt="twitter-icon" />
					        </Link>
                            <Link href="#"  target="_blank" className="text-[#706F74] font-medium">
					        <Image src="/disc.svg" width={40} height={40} alt="twitter-icon" />
					        </Link>
                            <Link href="https://t.me/realtiacoin" target="_blank" className="text-[#706F74] font-medium">
					        <Image src="/telgrey.svg" width={40} height={40} alt="telegram-icon" />
					        </Link>
                            <Link href="https://www.youtube.com/channel/UCtWS5o3vGdnT1aNgV6ZOVug" target="_blank"  className="text-[#706F74] font-medium">
					        <Image src="/youtgrey.svg" width={40} height={40} alt="youtube-icon" />
					        </Link>
                            <Link href="https://instagram.com/tiaecosystem?igshid=YmMyMTA2M2Y=" target="_blank" className="text-[#706F74] font-medium">
					        <Image src="/iggrey.svg" width={40} height={40} alt="instagram-icon" />
					        </Link>
                            <Link href="https://www.linkedin.com/mwlite/company/tiacoin" target="_blank" className="text-[#706F74] font-medium">
                            <Image src="/linkgrey.svg" width={40} height={40} alt="linkedin-icon" /> 

					        </Link>                    
                        </div>
                    </div>
                </motion.div>
                
            </div>
         </div>
        </div>     

    )
}


export default Landing;