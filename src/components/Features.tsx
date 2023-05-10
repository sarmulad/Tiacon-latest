
import Xch from "../icons/xch.svg";
import Adt from "../icons/adt.svg";
import Cash from "../icons/cash.svg";
import Key from "../icons/key.svg";
import Love from "../icons/love.svg";
import Penny from "../icons/penny.svg";
import Rel from "../icons/rel.svg";
import SEC from "../icons/sec.svg";
import Fraud from "../icons/fraud.svg"



interface FeatureProps {
    title:string,
    content:string,
    icon?:React.ReactNode,
}

const FeatureCard:React.FC<FeatureProps> = ({ title, icon, content}) => {
    return (
        <div className={`feature-card hover:stroke-white hover:fill-white  bg-[#1B223A] md:h-[336px] w-1/1 border-t-[1px] border-[#f1f1f1] md:w-1/3 p-[30px] rounded-3xl item md:odd:mt-[-100px]`}>
            <div className="feature-card-content flex flex-col justify-center items-center ">
            {/* <Image src={`/${icon}`} alt="star-icon" height={50} width={50} /> */}
            {icon}
            <h4 className="feature-card-header font-bold text-[20px] md:text-[24px] mb-[16px] mt-[20px] text-center gradient-text">{title}</h4>
            <p className="feature-card-paragraph text-[#706F74] font-[500] text-[14px] text-center md:text-[16px] leading-[22px]">{content}</p>
            </div>
        </div>
    )
}
 
const Features = () => {
    return(
        <div 
            className="bg-[#0A0F20] py-[107px] px-[35px] md:px-[50px] flex flex-col items-center" id="Features">
                <h1 className="font-bold  text-[24px] md:text-[48px] text-center leading-[51px] mb-[64px] md:mb-[200px]">FEATURES</h1>
                <div className=" relative flex flex-col md:flex-row w-full gap-10 max-w-[1000px] features-card} mb-[30px]">
                    <FeatureCard 
                    icon={<Xch/>}
                        title="Instant Exchange"
                        content="TIA Team is building a B2B exchange where user can lock their price for 48 Hrs before exchanging them to Fiat."
                    />
                    <FeatureCard 
                        icon = {<Cash/>}
                        title="Instant Cashout"
                        content="Cash out your digital assets quickly and easily, with minimal transaction fees."
                    />
                    <FeatureCard 
                        icon = {<Key/>}
                        title="Safe & Secure"
                        content="Keep your digital assets safe and secure in your own wallet, with all transactions recorded and publicly available for added transparency."
                    />
                </div>

                <div className="flex flex-col md:flex-row md:mt-6 w-full gap-10 max-w-[1000px] features-card mb-[30px]">
                    <FeatureCard 
                        icon = {<Adt/>}
                        title="Advertising Platform"
                        content="Connect with a vast network of social media platforms and reach your target audience with ease."
                    />
                    <FeatureCard 
                        icon = {<Fraud/>}
                        title="Anti-Fraud Mechanisms"
                        content="Stay protected from fraud and invalid ad traffic with TIA's advanced technical mechanisms."
                    />
                    <FeatureCard 
                        icon = {<SEC/>}
                        title="Ultimate Digital Security"
                        content="Enjoy bank-level security to protect your mobile device and digital assets."
                    />
                </div>

                <div className="flex flex-col md:flex-row md:mt-6 w-full gap-10 max-w-[1000px] features-card}">
                    <FeatureCard 
                        icon ={<Penny/>}
                        title="Every Penny Counts"
                        content="Get detailed reports on your advertising spending to ensure every penny is well-spent. "
                    />
                    <FeatureCard 
                        icon = {<Rel/>}
                        title="Experience the Metaverse"
                        content="Immerse yourself into the ultimate virtual world with TIAMV, a user-friendly space that combines all aspects of life in one place."
                    />
                    <FeatureCard 
                        icon = {<Love/>}
                        title="Connecting Lives"
                        content="Create their own family tree, connect with relatives across generations, and enjoy a range of exciting features."
                    />
                </div>

            </div>
    )
}


export default Features;