import Image from "next/image";

const Roadmap = ()=>{
    return(           
        <div className='bg-[#0A0F20] w-full md:w-[1300px] m-auto pt-[0px] md:pt-[100px] pb-[123px] px-[35px] mt-[0px] md:mt-[0px] md:px-[0]'>
            <h1 className="font-bold text-[48px] text-center leading-[51px] mb-[60px] md:mb-[80px]">Roadmap</h1>
            <div className=' flex flex-col items-center justify-center'>
                 <Image src="/roadmapweb.svg" width={1150} height={800} alt="Roadmap" className="hidden md:block w-[90%]"/>
                 <Image src="/roadmapmobile.svg" width={337} height={1105} alt="Roadmap" className="md:hidden"/>

            </div>
        </div>
    )
}


export default Roadmap;