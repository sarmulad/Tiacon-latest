import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';



const GeneralSans = localFont({
  // src: '../../public/fonts/GeneralSans-Regular.woff',
  src: [
    {
      path: '../../public/fonts/GeneralSans-Light.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/GeneralSans-Medium.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../public/fonts/GeneralSans-Semibold.woff',
      weight: '700',
      style: 'normal'
    }
  ],
  // variable: '--font-inter',


})

// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });




export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={GeneralSans.className} font-sans>
      {/* <Navbar/> */}
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}
