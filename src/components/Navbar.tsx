import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";

interface NavItemsProps {
  href: string;
  label: string;
  setIsMobileNavOpen: (isOpen: boolean) => void;
}

const NavItem: React.FC<NavItemsProps> = ({ href, label, setIsMobileNavOpen}) => {
  const router = useRouter()

  const checkIfActive = () => {
    if(href==="/"){
      return router.pathname==="/"&&router.asPath==="/"
    }
    return router?.asPath?.toLowerCase() === href.toLowerCase()
  }


  const isActive = checkIfActive()

  const handleMobileNavClose = () => {
    setIsMobileNavOpen(false); // close mobile nav when a menu item is clicked
  };

  
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`text-[16px] font-semibold ${isActive ? "active" : ""} `}
        onClick={handleMobileNavClose}

      >
        {label}
      </a>
    </Link>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="hidden justify-between py-[43px] max-w-[1240px] items-center  md:flex px-[50px]">
      <Link href="/">
      <Image alt="logo" className="inline" src="/tialogo.webp" width={158.6} height={53.95}/>
      </Link>
      <div className="flex gap-x-[48px] text-[16px] text-white font-[600]">
        <NavItem href="/" label="Home" setIsMobileNavOpen={() => {}}/>
        <NavItem href="/#Features" label="Features" setIsMobileNavOpen={() => {}}/>
        <NavItem href="/whitepaper.pdf" label="Whitepaper" setIsMobileNavOpen={() => {}}/>
        <NavItem href="/#Faq" label="Faq" setIsMobileNavOpen={() => {}}/>
        <NavItem href="https://Wa.me/61493687449" label="Contact Us" setIsMobileNavOpen={() => {}}/>
      </div>
      
      <div className="">
      <Link href="/#project">
        <button className="w-[179px] h-[60px] flex justify-center rounded-[64px]  text-[#fff] text-[14px] font-[600] leading-[18px] px-[30px] py-[21px] gradient-button">
          OUR PROJECTS
        </button>
      </Link>
      </div>
    </div>
  );
};

const MobileNav = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false)

 

  const handleMobileNavClose = () => {
    setMobileNavIsOpen(false); 
  };
  return(
    <div className={`md:hidden ${mobileNavIsOpen && "bg-[#0A0F20] h-[100vh] fixed top-0 left-0 w-[100%] overflow-auto z-20"} w-[100%]   px-[30px] py-[50px]`}>
      {
        mobileNavIsOpen ? (
          <>
            <div className=" flex justify-between mb-[38px] items-center">
            <Link href="/">
            <Image alt="menu" className="inline" src="/tialogo.webp" width={97.6} height={33.2} quality={100}/>
            </Link>

              <Image alt="close" className="inline" src="/close.svg" width={30} height={30} onClick={()=>setMobileNavIsOpen(!mobileNavIsOpen)}/>
            </div>
             <div className="flex flex-col gap-[48px] pt-[50px]">
                <NavItem href="/" label="Home" setIsMobileNavOpen={handleMobileNavClose}/>
                <NavItem href="/#Features" label="Features" setIsMobileNavOpen={handleMobileNavClose}/>
                <NavItem href="//whitepaper.pdf"  label="Whitepaper" setIsMobileNavOpen={handleMobileNavClose}/>
                <NavItem href="/#Faq" label="Faq" setIsMobileNavOpen={handleMobileNavClose}/>
                <NavItem href="https://Wa.me/61493687449"  label="Contact us" setIsMobileNavOpen={handleMobileNavClose}/>

             </div>
             <div className="mt-[117px]">
              <Link href="/#project">
                <button className="w-[100%] h-[60px] flex justify-center rounded-[64px]  text-[#fff] text-[14px] font-[600] leading-[18px] px-[30px] py-[21px] gradient-button">
                  OUR PROJECTS
                </button>
              </Link>
             </div>
          </>
        ) : (
          <div className="flex justify-between items-center max-h-[64px]">
              <Link href="/">
              <Image alt="logo" className="inline" src="/tialogo.webp" width={97.6} height={33.2} unoptimized={true} quality={100}/>
              </Link>
            <Image alt="menu" className="inline" src="/menu.svg" width={30} height={30}  onClick={()=>setMobileNavIsOpen(!mobileNavIsOpen)}/>
          </div>        
        )
      }
    
  </div>
  )
}


const Navbar = () => {

  return (
      <div
        className="w-full max-w-[1272px]"
      >
          <DesktopNavbar />
          <MobileNav />
      </div>
  );
};

export default Navbar;