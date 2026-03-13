import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[48svh] w-full bg-black md:h-[60svh] lg:h-screen">
      <Image
        src="https://static.wixstatic.com/media/c3fe9c_64a2f466993247fb86b18a52d833441b~mv2.jpg"
        alt="Vinil89 hero background"
        fill
        priority
        className="object-cover object-top opacity-70"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_ca47b72a366a4f8db9d4ee553b6549ce~mv2.png"
          alt="Vinil89 logo text"
          width={400}
          height={400}
          className="flash-logo w-60 h-60 object-contain mt-30 md:w-96 md:h-96"
        />
      </div>
    </section>
  );
}
