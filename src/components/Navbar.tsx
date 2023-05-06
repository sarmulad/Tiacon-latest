import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
// import Image from 'react-optimized-image'


interface NavItemsProps {
  href: string;
  label: string;
}

const NavItem: React.FC<NavItemsProps> = ({ href, label }) => {
  const router = useRouter()

  const checkIfActive = () => {
    if(href==="/"){
      return router.pathname==="/"&&router.asPath==="/"
    }
    return router?.asPath?.toLowerCase() === href.toLowerCase()
  }


  const isActive = checkIfActive()


  return (
    <Link href={href} legacyBehavior>
      <a
        className={`text-[16px] font-semibold ${isActive ? "active" : ""} `}
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
      <Image alt="menu" className="inline" src="/tialogo.svg" width={158.6} height={53.95}/>
      </Link>
      <div className="flex gap-x-[48px] text-[16px] text-white font-[600]">
        <NavItem href="/" label="Home" />
        <NavItem href="/#Features" label="Features" />
        <NavItem href="/Whitepaper" label="Whitepaper" />
        <NavItem href="/#Faq" label="Faq" />
        <NavItem href="https://Wa.me/61493687449" label="Contact Us" />
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
  return(
    <div className={`md:hidden ${mobileNavIsOpen && "bg-[#0A0F20]"} w-[100%] px-[30px] py-[50px]`}>
      {
        mobileNavIsOpen ? (
          <>
            <div className=" flex justify-between mb-[38px] items-center">
            <Link href="/">
            <Image alt="menu" className="inline" src="/tialogo.svg" width={97.6} height={33.2} unoptimized={true} quality={100}/>
            </Link>

              <Image alt="close" className="inline" src="/close.svg" width={30} height={30} unoptimized={true} onClick={()=>setMobileNavIsOpen(!mobileNavIsOpen)}/>
            </div>
             <div className="flex flex-col gap-[48px]">
                <NavItem href="/" label="Home" />
                <NavItem href="/#Features" label="Features" />
                <NavItem href="/#" label="Whitepaper" />
                <NavItem href="/#Faq" label="Faq" />
                <NavItem href="https://Wa.me/61493687449" label="Contact us" />

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
              <Image alt="menu" className="inline" src="/tialogo.svg" width={97.6} height={33.2} unoptimized={true}/>
              </Link>
            <Image alt="menu" className="inline" src="/menu.svg" width={30} height={30} unoptimized={true} onClick={()=>setMobileNavIsOpen(!mobileNavIsOpen)}/>
          </div>        
        )
      }
    
  </div>
  )
}
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ...

const Navbar = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
        className="w-full max-w-[1272px]"
      >
          <DesktopNavbar />
          <MobileNav />
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;


// const Navbar = () => {
//   return(
//     <div className="w-full max-w-[1272px]">
//       <DesktopNavbar />
//       <MobileNav />
//     </div>
//   )
// }


// export default Navbar;