import Image from "next/image";
// import Link from "next/link";
import TokenomicsChart from "./TokenomicsChart";
import Link from "next/link";


const Tokenomics = ()=>{

    const data = [37.42, 34.02, 0.51, 14.80, 6.8, 2.04, 4.08, 0.34];
  const labels = ['Public Sale:37.42%', 'Locked Token:34.02%', 'Funding Round Sale: 0.51%', 'Management:14.80%', "Staff E-swap:6.8%", "Administration & Legal:2.04%", "Project development:4.08%", "Bounty Program: 0.34%"];
    return(           
        <div className='bg-[#0A0F20] md:w-[1300px] w-full m-auto pt-[0px] md:pt-[100px] pb-[123px] px-[35px]  md:mt-[0px] md:px-[0]' id="tokenomics">
            <h1 className="font-bold text-[24px] md:text-[48px] text-center leading-[51px] mb-[64px]">Tokenomics</h1>
            <div className="md:ml-[130px] mb-[5rem]">
              <p className="font-[500] leading-[22px] p-1 text-[16px]">Name : TIA Coin</p>
              <p className="font-[500] leading-[22px] p-1 text-[16px]">Token Ticker : TIAC</p>
              <p className="font-[500] leading-[22px] p-1 text-[16px]">Total Supply : 2,940,000,000</p>
             <Link href="https://polygonscan.com/token/0x957e4f54129b75828e0bec11c9e409ea1862cff4"><p className="font-[500] w-[80%] break-words p-1  leading-[22px] inline-block text-[14px]">Contract : 0xa54cdb7A8712e157d1d44Dac6A47D9d116d5cb24</p></Link> 

            </div>
            <div className=' md:flex flex-row justify-between  md:gap-[90px]'>
              <div className=" h-[400px] md:h-[500px] flex-1">
                 <TokenomicsChart data={data} labels={labels} />
              </div>

              <div className="md:flex items-start justify-between flex-col flex-1">
                    <div className="w-1/1  flex flex-col  py-[20px]">
                    <Image src="/tokengrp.svg" width={400} height={400} alt="Tokenomics" className="w-[100%]"/>
                        
                    </div>
              </div>
            </div>
        </div>
    )
}


export default Tokenomics;