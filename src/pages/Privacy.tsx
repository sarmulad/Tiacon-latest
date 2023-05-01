import Head from 'next/head';
import Navbar from '@/components/Navbar';
import PrivacyPage from '@/components/PrivacyPage';

// const inter = Inter({ subsets: ['latin'] });

export default function Privacy() {
	return (
		<>
			<Head>
				<title>Privacy Policy</title>
				<meta
					name="Tiacoin"
					content="The first blockchain project to seamlessly integrate social media, cybersecurity,metaverse and crypto exchange."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className=" flex flex-col items-center">
				<Navbar />
                <PrivacyPage/>
			</main>
		</>
	);
}
