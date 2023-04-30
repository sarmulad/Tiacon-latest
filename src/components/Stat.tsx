
interface FeatureProps {
    title:string,
    content:string,    
}

const StatCard:React.FC<FeatureProps> = ({ title, content}) => {
    return (
        <div className={`bg-[#0A0F20] transition duration-150 ease-in hover:bg-[#1B223A] flex flex-col justify-end  h-[368px] md:h-[542px] w-1/1 border-[0.2px] border-[#f1f1f1] md:w-1/2 p-[40px] rounded-[37px]`}>
            <h4 className="font-[400] text-[33px] md:text-[48px] mb-[16px] mt-[20px]">{title}</h4>
            <p className="text-[16.3px] font-[500] max-w-[80%] text-[#706F74] md:text-[20px] leading-[22px]">{content}</p>
        </div>
    )
}
 


const Stat = () => {
    return(
        <div className="bg-[#0A0F20] py-[107px] px-[35px] md:px-[50px] ">
              <div className="max-w-[1000px] m-auto">
                <h1 className="font-[400] text-[32px] md:text-[48px] text-start leading-[60px] mb-[64px] max-w-[350px] md:max-w-[549px] ">Imagine the largest, most thriving <span className="font-bold">blockchain ecosystem </span> in two years...</h1>
                <div className=" relative flex flex-col md:flex-row gap-10 mb-[40px] Stat-card}">
                    <StatCard 
                        title="$131.4M"
                        content="TiaXchange trading 24-hour trading volume"
                    />
                    <StatCard 
                        title="$1.22B"
                        content="TIAMV virtual environment value"
                    />
                </div>

                <div className="flex flex-col md:flex-row md:mt-6 w-full gap-10  Stat-card}">
                    <StatCard 
                        title="102k"
                        content="TiaSecure total userbase"
                    />
                    <StatCard 
                        title="63k"
                        content="Treeclan daily active users"
                    />
                </div>

              </div>

            </div>
    )
}


export default Stat;