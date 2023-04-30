import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Features from '@/components/Features';
import Revolution from '@/components/Revolution';
import Landing from '@/components/Landing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQ';
import Project from '@/components/Project';
import Stat from '@/components/Stat';
import Tokenomics from '@/components/Tokenomics';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import Community from '@/components/Community';
import NewsLetter from '@/components/NewsLetter';
import Global from '@/components/Global';
import Roadmap from '@/components/Roadmap';
import Stake from '@/components/Stake';
import Cookies from '@/components/Cookies';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Tiacon</title>
				<meta
					name="description"
					content="exchange your payoneer for ngn and ghc at the speed of light."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className=" flex flex-col items-center">
				<Cookies />
				<Navbar />
				<Landing />
				<div className="w-full">
					<Revolution />
				</div>
				<div className="w-full">
					<Features />
				</div>
				<div className="w-full">
					<Project />
				</div>
				<div className="w-full">
					<Stat />
				</div>
				<div className="w-full">
					<Stake />
				</div>
				<div className="w-full">
					<Tokenomics />
				</div>
				<div className="w-full">
					<Roadmap />
				</div>
				<div className="w-full">
					<Team />
				</div>
				<div className="w-full">
					<Partners />
				</div>
				<Community />
				<div className="w-full">
					<NewsLetter />
				</div>
				<div className="w-full">
					<FAQSection />
				</div>
				<div className="w-full">
					<Global />
				</div>
			</main>
		</>
	);
}
