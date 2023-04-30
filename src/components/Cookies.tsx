import Image from 'next/image';
import React from 'react';

const Cookies = () => {
	const [displayed, setDisplayed] = React.useState(false);
	const hide = () => setDisplayed(false);

	React.useEffect(() => {
		setTimeout(() => {
			setDisplayed(true);
		}, 2000);
	}, []);

	return (
		<div
			className={`py-8 px-[17px] lg:py-4 lg:px-8 lg:rounded-[64px] transition-all duration-150 bg-[#0A1126] rounded-[16px] flex flex-col lg:flex-row lg:space-y-0 lg:space-x-8 space-y-4 fixed z-[999] left-[50%] translate-x-[-50%]
        ${displayed ? 'bottom-[25px]' : 'bottom-[-1000px]'}`}
		>
			<div className="flex items-center justify-between">
				<p className="text-white font-medium text-[12px] leading-[16px] max-w-[259px] lg:max-w-[593px]">
					We use tasty cookies to personalize your site experience and analyze
					site traffic. Learn More
				</p>
				<button className="flex-shrink-0 lg:hidden" onClick={hide}>
					<Image src={'/exit.svg'} height={30} width={30} alt="exit" />
				</button>
			</div>
			<div className="mt-4 lg:m-0 flex items-center space-x-4 mb-11 lg:flex-shrink-0">
				<button
					onClick={hide}
					className="py-3 px-6 flex text-center justify-center rounded-[64px] text-[#fff] text-[14px] font-medium leading-[16px] gradient-button"
				>
					Accept
				</button>
				<button
					onClick={hide}
					className="py-3 px-6 flex text-center justify-center rounded-[64px] text-[#141217] text-[14px] font-medium leading-[16px] bg-white"
				>
					Reject
				</button>
			</div>
		</div>
	);
};

export default Cookies;
