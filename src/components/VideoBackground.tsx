import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const isSafari = () => {
	const ua = navigator.userAgent.toLowerCase();
	return ua.indexOf('safari') > -1 && ua.indexOf('chrome') < 0;
};

interface VideoProps {
	source: string;
	fallbackImage: string;
	className?: string;
}

export default function Video({
	source,
	fallbackImage,
	className,
}: VideoProps): JSX.Element {
	const videoParentRef = useRef<HTMLDivElement>(null);
	const [shouldUseImage, setShouldUseImage] = useState<boolean>(false);

	useEffect(() => {
		if (isSafari() && videoParentRef.current) {
			const player = videoParentRef.current.children[0] as HTMLVideoElement;

			if (player) {
				player.controls = false;
				player.playsInline = true;
				player.muted = true;
				player.setAttribute('muted', '');
				player.autoplay = true;

				const handlePlay = () => {
					player.removeEventListener('play', handlePlay);
					setShouldUseImage(false);
				};

				const handlePause = () => {
					player.removeEventListener('pause', handlePause);
					setShouldUseImage(true);
				};

				player.addEventListener('play', handlePlay);
				player.addEventListener('pause', handlePause);

				setTimeout(() => {
					const promise = player.play();
					if (promise.then) {
						promise
							.then(() => {})
							.catch(() => {
								if (videoParentRef.current) {
									videoParentRef.current.style.display = 'none';
									setShouldUseImage(true);
								}
							});
					}
				}, 0);
			}
		}
	}, []);

	return shouldUseImage ? (
		<Image
			src={fallbackImage}
			alt="Muted Video"
			width="1000"
			height="1000"
			style={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100vh',
				objectFit: 'cover',
				zIndex: '-1',
			}}
		/>
	) : (
		<div
			className="video-wrapper"
			style={{
				position: 'absolute',
				top: '0',
				left: '0',
				width: '100%',
				height: '100%',
				objectFit: 'cover',
				zIndex: '-1',
			}}
			ref={videoParentRef}
		>
			<video
				loop
				muted
				autoPlay
				playsInline // Add the playsInline attribute
				preload="metadata"
				className={className}
			>
				<source src={source} type="video/mp4" />
			</video>
		</div>
	);
}
