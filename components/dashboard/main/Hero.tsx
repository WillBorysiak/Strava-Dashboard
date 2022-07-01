import Image from 'next/image';

const Hero = () => {
	return (
		<div>
			<Image
				className="h-32 w-full object-cover lg:h-48"
				src="https://images.unsplash.com/photo-1530143584546-02191bc84eb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
				alt="Image of a bike in the UK countryside"
				height={150}
				width={1000}
				layout="responsive"
				priority={true}
			/>
			<h1 className="mb-5 mt-3 text-center font-oswald text-7xl font-extrabold text-zinc  sm:text-8xl md:mb-10">
				Cycling Dashboard
			</h1>
		</div>
	);
};

export default Hero;
