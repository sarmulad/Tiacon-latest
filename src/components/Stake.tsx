import Image from "next/image"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// interface FeatureProps {
//     title:string,
//     content:string,    
// }

const StakeCard = () => {
    return (
        <div className={`bg-[#1B223A] transition duration-150 ease-in hover:bg-[#1B223A] flex flex-col justify-start  h-[auto] w-[90%] md:w-[464px] p-[20px] rounded-[20px]`}>
            <h4 className="font-[400] text-[20px] md:text-[24px] mb-[42px] mt-[20px]  ml-[50px] underline">Connect Wallet</h4>
            <div className="total hover:bg-[#3C4667] mb-[20px] px-[24px] py-[18px] rounded-[20px]">
              <h5 className="font-[500] text-[20px] text-[#B9B8BB] leading-[30px]  md:text-[20px] mb-[16px] ">Total Balance</h5>
               <p className="text-[16.3px] font-[500] max-w-[80%] text-[#fff] md:text-[20px] leading-[22px]">-TIA</p>
            </div>
            <div className="total hover:bg-[#3C4667] mb-[20px] px-[24px] py-[18px] rounded-[20px]">
              <h5 className="font-[500] text-[20px] text-[#B9B8BB] leading-[30px]  md:text-[20px] mb-[16px] ">Total Balance</h5>
               <p className="text-[16.3px] font-[500] max-w-[80%] text-[#fff] md:text-[20px] leading-[22px]">-TIA</p>
            </div>
            <div className="total hover:bg-[#3C4667] mb-[20px] px-[24px] py-[18px] rounded-[20px]">
              <h5 className="font-[500] text-[20px] text-[#B9B8BB] leading-[30px]  md:text-[20px] mb-[16px] ">Total Balance</h5>
               <p className="text-[16.3px] font-[500] max-w-[80%] text-[#fff] md:text-[20px] leading-[22px]">-TIA</p>
            </div>
        </div>
    )
}
 
const StakeWallet = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 md:gap-10">
        <Image src='/connect.svg' width={168} height={45} alt="button-icon" className="md:w-[254px] md:h-[68px]"/>
        <div className={`bg-[#1B223A] transition duration-150 ease-in hover:bg-[#1B223A] flex flex-col justify-start items-center  md:h-[232px] h-[auto]  md:w-[464px] p-[20px] rounded-[20px]`}>
        <Tabs>
        <TabList className="flex mb-[32px] bg-[#3C4667] items-center justify-center gap-4 w-[85vw] md:w-[396px] h-[42px]  md:h-[68px] rounded-[20px]">
            <Tab className="bg-[#5C6891] h-full w-1/2 flex items-center justify-center rounded-[20px]">Stake TIA</Tab>
            <Tab className=" w-1/2 flex items-center justify-center ">Unstake TIA</Tab>
        </TabList>
        <TabPanel>
            {/* <p>Tab 1 content</p> */}
        </TabPanel>
        <TabPanel>
            {/* <p>Tab 2 content</p> */}
        </TabPanel>
    
      </Tabs>
            <h4 className="font-[400] text-[20px] md:text-[48px]  gradient-text">COMING SOON</h4>

       </div>
            
         </div>
    )
}


const Stake = () => {
    return(
        <div className="bg-[#0A0F20] py-[107px] px-[0px] md:px-[50px] ">
              <div className="max-w-[1000px] m-auto">
                <h1 className="font-[400] text-[32px] md:text-[48px] ml-[50px]  text-start leading-[60px] mb-[64px] max-w-[216px] md:max-w-[316px] ">Stake TIA Get Rewarded</h1>
                <div className=" relative  flex flex-col-reverse md:flex-row gap-10 md:gap-20 mb-[40px] items-center justify-center}">
                    <StakeCard />
                    <StakeWallet/>
                    {/* <StakeCard 
                        title="$1.22B"
                        content="TIAMV virtual environment value"
                    /> */}
                </div>
              </div>

            </div>
    )
}


export default Stake;