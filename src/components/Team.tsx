import { motion } from "framer-motion";
import {SectionFade} from "./Animation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
	
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from "swiper";
import ArrowLeft from "../icons/arrow-circle-left.svg"
import ArrowRight from "../icons/arrow-circle-right.svg"

import Member1 from "../icons/member1.webp"
import Member2 from "../icons/member2.png"
import Member3 from "../icons/member3.webp"
import Member4 from "../icons/member4.webp"
import Member5 from "../icons/member5.webp"

import type { StaticImageData } from 'next/image';



interface MemberCardProps {
    Member:StaticImageData,
    name:string,
    position:string,
    linkedin:string,

}

const MemberCard:React.FC<MemberCardProps> = ({  Member, name, position, linkedin}) => {
    return (
        <div className={` w-1/1  p-[40px] flex flex-col items-center`}>
             <Image src={Member} alt="member-Member" height={220} width={220}/>
            <h2 className="font-bold text-[20px]  mt-[10px]">{name}</h2>
            <p className="text-[14px] md:text-[16px] leading-[22px] text-[#706F74]">{position}</p>
            <a href={`${linkedin}`}>
              <Image quality={80} src="linkedin.svg" alt="image-linkedin" height={30} width={30}/>  

            </a>
                            
        </div>
    )
}
 

const Team = ()=>{
    return(           
        <motion.div 
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.1}}
            transition={{staggerChildren:0.5}}
            variants={SectionFade}
            className='bg-[#0A0F20] relative pt-[40px] md:pt-[0px] md:pb-[123px] md:px-[35px] mt-[50px] flex flex-col items-center '>
            <h1 className="font-bold text-[24px] md:text-[48px] text-center leading-[51px] mb-[30px] md:pt-[80px]">The Team</h1>
            <ArrowLeft className=" md:block swiper-arrow-left absolute top-[60%]  md:top-[50%] translate-y-[-50%] left-[10%] md:left-[22%] z-10  cursor-pointer"/>
			      <ArrowRight className=" md:block swiper-arrow-right absolute top-[60%] md:top-[50%] translate-y-[-50%] right-[10%] z-10 md:right-[22%] cursor-pointer"/>
            <div className='max-w-[1300px] m-auto md:flex-col md:items-center '>
                <div className="max-w-[90vw]  flex flex-col items-center mx-auto">
                   <p className="text-[15px] md:text-[18px] font-[400] w-[100%] text-[#fff] md:w-[90%] text-center md:text-center my-[0px] leading-[20px] gradient-text-white">At TIA, we are a team of seasoned professionals with a wealth of expertise in finance, blockchain technology, and cybersecurity. Our founding members have spent years in related sectors where safety measures are critical and can mean the difference between life and death. We understand the importance of providing elegant and simple solutions that are also scalable. With this extensive experience, we have established the safety standard for TIA, setting the bar high for others to follow. Trust us to protect your digital assets and personal information with our top-notch security solutions.</p>
                   <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
						        delay: 2500,
						        disableOnInteraction: true,
					         }}
                    keyboard={{
                    enabled: true,
                    }}
                    breakpoints={{
                    769: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                    },
                    }}
                    // scrollbar={true}
                    navigation={{prevEl:".swiper-arrow-left",nextEl:".swiper-arrow-right"}}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
                    className="md:w-[60%] "
                    >
                    <SwiperSlide>
                      <MemberCard
                          Member={Member1}
                          name="Rudr Rishi"
                          position="CEO & Founder"
                          linkedin="https://www.linkedin.com/in/rishi-rudr"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                      <MemberCard
                          Member={Member2}
                          name="Dhanush Devang"
                          position="CMO"
                          linkedin="https://www.linkedin.com/in/sai-dhanush-p-9b0aa6178"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                      <MemberCard
                        Member={Member3}
                        name="Mark Warton"
                        position="CTO - treeclan"
                        linkedin="https://www.linkedin.com/in/markwarton"
                         />
                    </SwiperSlide>
                    <SwiperSlide>
                      <MemberCard
                        Member={Member4}
                        name="Servesh Gupta"
                        position="CTO - Tiasecure"
                        linkedin="https://www.linkedin.com/in/sarvesh-d-gupta-62409712/"
                         />
                    </SwiperSlide>
                    <SwiperSlide>
                      <MemberCard
                        Member={Member5}
                        name="Monika Podar"
                        position="CFO & cofounder"
                        linkedin="https://www.linkedin.com/in/monika-poddar-shetty-469b331b6"
                         />
                    </SwiperSlide>

                    </Swiper>
                        
                       
                </div>
            </div>
                
        </motion.div>
    )
}


export default Team;