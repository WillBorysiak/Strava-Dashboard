import Image from 'next/image';

const Hero = () => {
	return (
		<div>
			<Image
				id="hero-image"
				className="h-32 w-full object-cover lg:h-48"
				src="/images/peak-district.jpg"
				alt="Peak District"
				height={250}
				width={1000}
				layout="responsive"
				priority={true}
			/>
			<h1 className="mb-5 mt-3 text-center font-oswald text-7xl font-extrabold text-zinc  sm:text-8xl md:mb-10">
				Strava Dashboard
			</h1>
		</div>
	);
};

export default Hero;
