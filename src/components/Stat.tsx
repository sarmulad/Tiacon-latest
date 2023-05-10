import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface FeatureProps {
    title:string,
    content:string,    
}

const StatCard:React.FC<FeatureProps> = ({ title, content}) => {
    return (
        <motion.div 
            className={`bg-[#0A0F20] transition duration-150 ease-in hover:bg-[#1B223A] flex flex-col justify-end  h-[368px] md:h-[542px] w-1/1 border-[0.2px] border-[#f1f1f1] md:w-1/2 p-[40px] rounded-[37px]`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            <h4 className="font-[400] text-[33px] md:text-[48px] mb-[16px] mt-[20px]">{title}</h4>
            <p className="text-[16.3px] font-[500] max-w-[80%] text-[#706F74] md:text-[20px] leading-[22px]">{content}</p>
        </motion.div>
    )
}

const Stat = () => {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-[#0A0F20] py-[107px] px-[35px] md:px-[50px] ">
      <motion.div
        className="max-w-[1000px] m-auto"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold  text-[24px] md:text-[48px]  md:mb-[100px] text-center leading-[60px] mb-[64px]  ">
          OUR PROJECTIONS
        </h1>
        <div className=" relative flex flex-col md:flex-row gap-10 mb-[40px] Stat-card}">
          <StatCard title="$131.4M" content="TiaXchange potential 24-hour trading volume" />
          <StatCard title="$1.22B" content="TIAMV potential virtual environment value" />
        </div>

        <div className="flex flex-col md:flex-row md:mt-6 w-full gap-10  Stat-card}">
          <StatCard title="102k" content="TiaSecure potential total userbase" />
          <StatCard title="63k" content="Treeclan potential daily active users" />
        </div>
      </motion.div>
    </div>
  );
};

export default Stat;
