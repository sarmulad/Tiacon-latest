import Image from 'next/image';
import Link from 'next/link';

// const SocialIcon = [
//     {
//         id:1,
//         url:"fb.svg"
//     },
//     {
//         id:2,
//         url:"fb.svg"
//     },
//     {
//         id:3,
//         url:"fb.svg"
//     },
//     {
//         id:4,
//         url:"fb.svg"
//     },
//     {
//         id:5,
//         url:"fb.svg"
//     },
//     {
//         id:6,
//         url:"fb.svg"
//     },
// ]

// interface FooterProps {
//     id:number,
//     url:string

// }

const Footer = () => {
	return (
		<div
			className="bg-[#0A0F20] px-[25px] pt-[40px] md:p-[100px] flex flex-col items-center relative"
			id="contact"
		>
			<div className="flex flex-col md:flex-row justify-between w-full max-w-[1000px] gap-10">
				<div className="mt-[56px] md:mt-[0px] ">
					<Image
						src="/tialogo.webp"
						alt="logo"
						height={95}
						width={166}
						className="mb-[32px] md:mb-[22px]"
					/>
					<h4 className="text-[20px] md:text-[24px] font-medium text-[#fff] leading-[30px]">
						connect with us
					</h4>
					<div className="mt-[40px] flex gap-5">
					<Link href="https://m.facebook.com/108226041732272/" className="text-[#706F74] font-medium">
					  <Image src="/fb.svg" alt="social-icon" height={32} width={32} />
					</Link>
					<Link href="https://twitter.com/TiaEcosystem?t=Pgz4apbcKgHVxciG0GQo0w&s=08" className="text-[#706F74] font-medium">
					  <Image src="/twt.svg" alt="social-icon" height={32} width={32} />
					</Link>
					<Link href="https://t.me/realtiacoin" className="text-[#706F74] font-medium">
					 <Image src="/tel.svg" alt="social-icon" height={32} width={32} />
					</Link>
					<Link href="https://www.linkedin.com/mwlite/company/tiacoin" className="text-[#706F74] font-medium">
					  <Image src="/ink.svg" alt="social-icon" height={32} width={32} />
					</Link>
					<Link href="https://instagram.com/tiaecosystem?igshid=YmMyMTA2M2Y=" target="_blank" className="text-[#706F74] font-medium">
					    <Image src="/ig.svg" width={40} height={40} alt="instagram-icon" />
					 </Link>
					<Link href="https://www.youtube.com/channel/UCtWS5o3vGdnT1aNgV6ZOVug" className="text-[#706F74] font-medium">
					  <Image src="/yout.svg" alt="social-icon" height={32} width={32} />
					</Link>		
					<Link href="https://discord.gg/jDp5eztF"  target="_blank" className="text-[#706F74] font-medium">
					    <Image src="/disc.svg" width={40} height={40} alt="twitter-icon" />
					</Link>				
						
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<h4 className="text-[20px] md:text-[24px] font-bold text-[#fff] md:mb-[22px]">
						Company
					</h4>
					<Link href="#project" className="text-[#706F74] font-medium">
						Our Project
					</Link>
					<Link href="/Privacy" className="text-[#706F74] font-medium">
						Privacy Policy
					</Link>
					<Link href="https://Wa.me/61493687449" className="text-[#706F74] font-medium">
						Contact Us
					</Link>
				</div>
				<div className="flex flex-col gap-4">
					<h4 className="text-[20px] md:text-[24px] font-bold text-[#fff] md:mb-[22px]">
						Learn
					</h4>
					<Link href="#" className="text-[#706F74] font-medium">
						Whitepaper
					</Link>
					<Link href="#Faq" className="text-[#706F74] font-medium">
						Faq
					</Link>
					<Link href="https://polygonscan.com/token/0x957e4f54129b75828e0bec11c9e409ea1862cff4" className="text-[#706F74] font-medium">
						Contract
					</Link>
				</div>
			</div>
			<div className="mt-20 left-0 w-full">
				<div className="mx-5 py-[13px] px-[10px] border-t border-t-[#706F74] flex items-center justify-between">
					<p className="text-[#706F74] text-sans">
						© copyright 2022 | All right reserved.
					</p>
					{/* <div className="hidden lg:flex items-center space-x-4">
						<span className="text-[#706F74] text-sans">Powered by</span>
						<Image src="/polygon.svg" alt="polygon" width={111} height={28} />
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Footer;
