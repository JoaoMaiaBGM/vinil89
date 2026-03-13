import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[48svh] w-full bg-black md:h-[60svh] lg:h-screen">
      <Image
        src="https://static.wixstatic.com/media/c3fe9c_64a2f466993247fb86b18a52d833441b~mv2.jpg"
        alt="Vinil89 hero background"
        fill
        priority
        className="object-cover object-top"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest uppercase">Vinil89</h1>
      </div>
    </section>
  );
}
