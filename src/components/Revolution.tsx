import Image from 'next/image';
import Link from 'next/link';


const Revolution = () => {
	return (
		<div className="bg-[#0A1126] py-[50px] md:pt-[123px] md:pb-[123px] px-[35px]  md:mt-[0px] md:px-[0]">
			<div 
				className="md:flex md:flex-row flex flex-col-reverse md:max-w-[1240px] md:m-[auto] md:items-start gap-[32px] md:gap-[40px] md:px-[50px]"
			>
				<div 
				 	className="md:flex items-start justify-between flex-col flex-1"
				>
					<div className="w-1/1  flex flex-col py-[20px]">
						<h4 className="font-bold text-[32px] border-gradient  md:text-[40px] leading-[29px] md:leading-[52px] text-left md:mt-[20px] mb-[32px] md:mb-[0px]">
							Revolutionising the Crypto Trading Industry:
							<br />{' '}
							<span className="gradient-text">TIA is a Game-Changer</span>
						</h4>
						<p className="text-[15px] md:text-[18px] font-medium w-[100%] text-[#706F74] md:w-[100%] text-left my-[0px] mb-[53px] md:mb-[0px md:my-[30px]  leading-[22px]">
							With its secure and privacy-centric protocol, TIA seamlessly
							integrates with the top Polygon protocols and blockchain
							infrastructure to facilitate complex financial transactions in the
							crypto trading industry. With a focus on privacy, anonymity, and
							sovereignty, TIAs cybersecurity features ensure that users digital
							assets remain protected at all times.
						</p>
					</div>
					<div className="w-1/1  flex flex-col py-[20px] ">
						<h4 className="font-bold text-[32px] border-gradient md:text-[40px] leading-[30px] md:leading-[52px] text-left md:mt-[20px] mb-[32px] md:mb-[0px]">
							<span className="gradient-text">Building</span> the Future of the
							Digital World with <span className="gradient-text">TIA</span>
						</h4>
						<p className="text-[15px] md:text-[18px] font-medium w-[100%] text-[#706F74] md:w-[100%] text-left my-[0px] md:my-[30px] ] leading-[22px]">
							TIA is a comprehensive network with a blockchain ledger, on-chain
							applications, and services that serve as a bridge between the
							physical and digital worlds. TIAs innovative platform paves the
							way for the adoption of cryptocurrency by digital advertisers and
							the public, and now extends to the metaverse, connecting
							individuals worldwide like never before.
						</p>
						<div className="flex justify-start mt-[32px]">
							<Link href="/#">
								<button className="  w-[142px] gap-1 md:w-[187px] h-[60px] mb-[56px] flex text-center justify-center rounded-[64px] text-[#fff] text-[14px] font-[600] leading-[18px] md:px-[40px] px-[12px] py-[18px] md:py-[21px] gradient-button">
									Learn more
									<Image
									src="/arrow-right.png"
									alt="arrow-icon"
									height={10}
									width={20}
								    />
								</button>
							</Link>
						</div>
					</div>
				</div>

				<div 
				 className="w-1/1 md:block flex-1 md:mt-20   ">
					<Image
						src="/tiaillustration.png"
						width={500}
						height={500}
						alt="Revolution"
						className="w-[90%] revolution-img"
					/>
				</div>
			</div>
		</div>
	);
};

export default Revolution;
