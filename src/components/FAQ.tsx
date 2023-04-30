import {useState } from "react";
import Image from "next/image";
const FAQData = [
    {
      id: 1,
      title: "What is TIA?",
      content:
        "TIA is a  blockchain platform that seamlessly integrates social media, cybersecurity, metaverse and crypto exchange.",
    },
    {
      id: 2,
      title: "How does TIA differ from other cryptocurrencies?",
      content:
        "TIA is the first digital currency designed specifically for digital advertisers and common people. It is built to be highly accessible, private, and anonymous, while also championing user sovereignty.",
    },
    {
      id: 3,
      title: "How does TIA ensure user privacy and security?",
      content:
        "TIA uses advanced cryptographic techniques to ensure user privacy and security. It also allows users to transact anonymously, without revealing their personal information or transaction history. Additionally, TIA offers a high level of security through its use of blockchain technology.",
    },
    {
      id: 4,
      title: "What are the projects on TIA?",
      content:
        "TIA has several exciting projects in the works, including TiaXchange, a crypto exchange platform for trading various digital assets; TiaSecure, a cybersecurity platform for protecting digital assets and transactions on the blockchain; TiaMV, a metaverse platform that connects users and allows them to create, own and monetize virtual assets; and Treeclan, a social media platform that enables users to create and share content while earning rewards through TIA Coin.",
    },
    {
        id: 5,
        title: "How can I buy TIA Coin?",
        content:
          "TIA Coin can be purchased on a variety of cryptocurrency exchanges. To buy TIA Coin, simply create an account on one its listed exchanges, deposit the desired amount of cryptocurrency or fiat currency, and then use that currency to purchase TIA Coin.",
      },
  ];

interface FAQComponentProps {
    data:any,
}

const FAQComponent:React.FC<FAQComponentProps> = ({ data }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="w-full h-[700px] overflow-y-auto p-2 flex flex-col items-center">
      {data.map((faq:any, index:number) => (
        <div key={index} className="w-full max-w-[1022px] bg-[#fff]  rounded-[8px] px-[16px] md:px-[32px] py-[22px] md:py-[29px] mb-[16px] md:mb-[24px]  flex flex-col justify-center">
          <div className="flex flex-col gap-3 ">
            <div
              className="flex justify-between items-center cursor-pointer  py-[]"
              onClick={() =>
                open === faq.id ? setOpen(null) : setOpen(faq.id)
              }
            >
              <header className="text-[16px] md:text-[16px] text-[#000] font-medium ">
                {faq.title}
              </header>
               {open ? <Image src="/minus.svg" alt="email" height={25} width={25}/> :  <Image src="/plus.svg" alt="email" height={25} width={25}/>}
            
            </div>
            <p
              className={`${open !== faq.id && "hidden"} text-[16px] mt-[20px] transition-all ease-in-out duration-300 text-[#777777]`}
            >
              {faq.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};


const FAQSection = () => {
  return (
    <section id="Faq" className="bg-[#0A0F20] faq w-full min-h-[530px] py-[70px] md:py-[90px] flex justify-center">
      <div className="px-[20px] md:px-0 w-full flex flex-col items-center justify-center md:max-w-[813px]">
          <header className="col-span-1 font-bold text-[24px] md:text-[48px] w-full text-center">
             Frequently Asked Questions
          </header>
          <div className="col-span-1 w-full mt-[32px] md:mt-[48px]">
            <FAQComponent data={FAQData} />
          </div>
      </div>
    </section>
  );
};

export default FAQSection;