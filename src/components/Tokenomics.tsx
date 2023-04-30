import Image from "next/image";
// import Link from "next/link";
import TokenomicsChart from "./TokenomicsChart";


const Tokenomics = ()=>{

    const data = [38, 34, 5, 10, 7, 1, 4];
  const labels = ['Public Sale:38%', 'Locked Token:34%', 'IDO/IFO/ICO:5%', 'Management:10%', "Staff E-swap:7%", "Administration & Legal:1%", "Project development:4%", "Bounty Program: 1%"];
    return(           
        <div className='bg-[#0A0F20] md:w-[1300px] w-full m-auto pt-[30px] md:pt-[100px] pb-[123px] px-[35px] mt-[50px] md:mt-[0px] md:px-[0]'>
            <h1 className="font-bold text-[48px] text-center leading-[51px] mb-[64px]">Tokenomics</h1>
            <div className="md:ml-[130px] mb-[5rem]">
              <p className="font-[500] leading-[22px] text-[14px]">Name : TIA Coin Token</p>
              <p className="font-[500] leading-[22px] text-[14px]">Total Supply : 2,900,000,000</p>
              <p className="font-[500] w-[80%] break-words leading-[22px] inline-block text-[14px]">Contract : https://Polygonscan.com/token/0xa54cdb7A8712e157d1d44Dac6A47D9d116d5cb24#readContract</p>

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