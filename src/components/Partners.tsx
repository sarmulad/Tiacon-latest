import Image from "next/image";

const partnerData = [
    {
        id:1,
        url:"polygon.svg"
    },
    {
        id:2,
        url:"creed.svg"
    }, {
        id:3,
        url:"lbank.svg"
    }, {
        id:4,
        url:"coinstore.svg"
    }, {
        id:5,
        url:"house.svg"
    }, {
        id:6,
        url:"kryptopro.svg"
    }, {
        id:7,
        url:"trend.svg"
    },
]

interface partnersComponentProps {
    data:any,
}


 

const Partners = ()=>{
    const slide1 = partnerData.slice(0, 4)
    const slide2 = partnerData.slice(4, 7)

    return(           
        <div className=' bg-[#0A1126] pt-[40px] md:pt-[0px] pb-[123px] px-[35px] mt-[50px] flex flex-col items-center '>
            <h1 className="font-bold text-[48px] text-center leading-[51px] mb-[30px] md:pt-[80px]">Our Partners</h1>
            <div className='max-w-[1300px] m-auto flex  justify-center gap-5 md:items-center '>
               {slide1.map(({url, id})=>
                 <Image key={id} src={`/${url}`} alt="icons" height={80} width={200} className="w-[76px] md:w-[200px]"/>
               )}
            </div>
            <div className='max-w-[1300px] m-auto flex  justify-center gap-5 md:items-center '>
               {slide2.map(({url, id})=>
                 <Image key={id} src={`/${url}`} alt="icons" height={80} width={200} className="w-[76px] md:w-[200px]"/>
               )}
            </div>
                
        </div>
    )
}


export default Partners;