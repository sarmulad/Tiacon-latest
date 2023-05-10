import Image from "next/image"

// import Icon1 from "../icons/polygon.svg"
// import Icon2 from "../icons/creed.svg"
// import Icon3 from "../icons/lbank.svg"
// import Icon4 from "../icons/coke.svg"
// import Icon5 from "../icons/house.svg"
// import Icon6 from "../icons/mirage.svg"
// import Icon7 from "../icons/kryptopro.svg"
// import Icon8 from "../icons/trend.svg"



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
        url:"coke.svg"
    }, {
        id:5,
        url:"house.svg"
    }, 
    {
        id:6,
        url:"mirage.svg"
    },

    {
        id:7,
        url:"kryptopro.svg"
    }, {
        id:8,
        url:"trend.svg"
    },
    
]

// interface partnersComponentProps {
//     data:any,
// }


 

const Partners = ()=>{
    const slide1 = partnerData.slice(0, 4)
    const slide2 = partnerData.slice(4, 8)

    return(           
        <div className=' bg-[#0A1126] pt-[80px] md:pt-[0px] pb-[123px] px-[35px] mt-[50px] flex flex-col items-center '>
            <h1 className="font-bold text-[24px] text-center leading-[51px] mb-[30px] md:pt-[80px]">Our Partners</h1>
            <div className='max-w-[1300px] m-auto flex  justify-center gap-5 md:items-center '>
               {slide1.map(({url, id})=>
                 <Image quality={100} key={id} src={`/${url}`} alt="icons" height={80} width={200} className="w-[76px] md:w-[200px]"/>
               )}
            </div>
            <div className='max-w-[1300px] m-auto flex  justify-center gap-5 md:items-center '>
               {slide2.map(({url, id})=>
                 <Image quality={100} key={id} src={`/${url}`} alt="icons" height={80} width={200} className="w-[76px] md:w-[200px]"/>
               )}
            </div>
                
        </div>
    )
}


export default Partners;