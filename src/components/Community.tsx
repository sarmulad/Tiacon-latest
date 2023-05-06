import Image from "next/image"
// import Tiaicon from "../icons/tiaicon.svg"


interface CommunityProps {
    content:string,    
}

const communityContent = [
    {
        id:1,
        content:"#trojan & #phishingattack are the most harmful attacks for your device , secure it with #Tiasecure coming soon on your App Store and play store"
    },
    {
        id:2,
        content:"The goal of #blockchain is to allow #digital information to be recorded and #distributed, but not edited. In this way, a blockchain is the foundation for #immutable ledgers, or records of #transactions that cannot be altered, deleted, or destroyed. #tiacoin #tiaminer"
    },
    {
        id:3,
        content:"Hey Twitterverse, we've got some exciting news to share! Introducing Tia Coin, the first digital currency designed for use on social media, cybersecurity, metaverse, and crypto exchanges. Stay tuned for more updates on how you can get started with TIA Coin! #tiaecosystem #tiaclub"
    },
    {
        id:4,
        content:"#Binancemeetupsydney great event - thanks Leigh Travers for conducting beautiful and glorious event. Will be in touch"
    },
    {
        id:5,
        content:"\"Crypto is the future of money. If you're not onboard, you're going to miss out on the greatest wealth transfer in history.\" #Crypto"
    },
    {
        id:6,
        content:"Why buy a Lamborghini with your crypto gains when you can just HODL and become the Lambo dealership? • #crypto #HODL"
    },
    {
        id:7,
        content:"Full circle of #security from #Antivirus, #AntiHacking, #Antispyware, #Antimalware, #Antiransomware, #antiidentitytheft all in one in one app #Tiasecure powered by #Tiacoin , long term holders will get discounts and can pay by #tiacoin"
    },
    {
        id:8,
        content:"#Treeclan bringing you new way of getting together with your own. Powered by #tiacoin"
    },
    {
        id:9,
        content:"World of #metaverse is coming your way - first of its kind with a promise that you won’t get similar experience any where else. #Tiamv #nft #nftcollector #tiacoin"
    },
    {
        id:10,
        content:"Where is your first #investment in #crypto ? #nft #bitcoin #ethereum #top100crypto #ico #ifo .Pls do your market research, study, on team and project. How will they change human life or they are just there with fake ideas to take your money. Make your wise decision. #study"
    },
    {
        id:11,
        content:"Our prediction— #apple #microsoft will buy and start dealing in #cryptocurrency with in next 1 year. What do you think??? #mining #bitcoin #ethereum #bnbchain #binance #tiacoin #tiaminer #freecrypto"
    },
    {
        id:12,
        content:"Biggest news - #metaverse will be bigger the economy of many countries. #nft is already creating big impact. Life will be different- join now or it will be late. #Tiacoin biggest project #tiamv is already getting build #metaversegeneration #metaversenft #tiacoin"
    },
    {
        id:13,
        content:"Time is money and risk management while trading is important. What goals have you set for trading?? Which exchange do you use?? What commission do you pay?? #mining #bitcoin #ethereum #bnbchain #binance #tiacoin #tiaminer #freecrypto #nft #cybersecurity #metaverse"
    },
    {
        id:14,
        content:"Did you know that the total energy consumption of the Bitcoin network is now greater than the energy consumption of entire countries like Switzerland, the Netherlands, or Argentina? #CryptoMining #RenewableEnergy  #CryptoEnergy"
    },
    {
        id:15,
        content:"Did you know In 2013, a user accidentally threw away a hard drive containing 7,500 Bitcoins, which would be worth over $380 million today. #bitcoin"
    },
    {
        id:16,
        content:"#trojan & #phishingattack are the most harmful attacks for your device , secure it with #Tiasecure coming soon on your App Store and play store"
    },
]


const CommunityCard: React.FC<CommunityProps> = ({ content }) => {
    return (
      <div className={`CommunityCard bg-[#fff]   text-[#000] hover:text-[#fff] flex flex-col justify-start w-1/1 border-[0.2px] border-[#f1f1f1] md:w-[331px] rounded-[24px] min-w-[320px] py-6 md:py-8 px-6 md:px-8`}>
        <div className="flex justify-between gap-5">
          <Image src="tiaicon.svg" alt="tia-icon" height={63} width={63} />
          <div>
            <h4 className="font-[600]">Tia Ecosystem</h4>
            <p className="">@TiaEcosystem</p>
          </div>
          <Image src="twticon.svg" alt="tia-icon" height={63} width={63} />
        </div>
        <p className="text-[14px] font-[500] mt-6 md:text-[18px] leading-[24px] flex-grow">{content}</p>
      </div>
    );
  };
  
  const Community = () => {
    const slide1 = communityContent.slice(0, 8);
    const slide2 = communityContent.slice(8, 16);
    return (
      <div className="bg-[#0D1631] py-[107px] px-[35px] md:px-[50px] ">
        <div className="m-auto">
          <h1 className="font-[400] text-[24px] md:text-[40px] text-start leading-[30px] md:leading-[60px] mb-[64px] md:mb-[100px] ml-[40rem] md:ml-[20rem] max-w-[225px] md:max-w-[549px] ">
            Interact with our buzzing community!
          </h1>
          <div className="flex flex-col flex-nowrap  gap-6 max-w-[1600px] m-auto card-container">
            <div className="card-item">
              {slide1.map(({ id, content }) => (
                <CommunityCard key={id} content={content} />
              ))}
            </div>
            <div className="card-item">
              {slide2.map(({ id, content }) => (
                <CommunityCard key={id} content={content} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Community;