import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero">
      <Image
        id="hero-image"
        className="h-52 w-full object-cover lg:h-96"
        src="/images/peak-district.jpg"
        alt="Peak District"
        height={1280}
        width={1920}
        quality={100}
        priority={true}
      />
      <h1
        id="hero-title"
        className="mb-5 mt-3 text-center font-oswald text-7xl font-extrabold text-zinc sm:text-8xl"
      >
        Strava Dashboard
      </h1>
    </section>
  );
};

export default Hero;
