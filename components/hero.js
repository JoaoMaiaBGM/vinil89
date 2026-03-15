import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[48svh] w-full bg-black md:h-[70svh] lg:h-[88svh] flex flex-col items-center justify-center">
      <Image
        src="https://static.wixstatic.com/media/c3fe9c_64a2f466993247fb86b18a52d833441b~mv2.jpg"
        alt="Vinil89 desktop hero background"
        fill
        priority
        className="object-cover object-top opacity-70 hidden"
      />

      <Image
        src="https://static.wixstatic.com/media/c3fe9c_b884a49de973496fb4796d067aacb732~mv2.jpg"
        alt="Vinil89 mobile hero background"
        fill
        priority
        className="object-cover object-top opacity-70 md:block"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_ca47b72a366a4f8db9d4ee553b6549ce~mv2.png"
          alt="Vinil89 logo text"
          width={400}
          height={400}
          className="flash-logo w-60 object-contain md:w-96 xl:mt-60"
        />

        <a href="/music-videos">
          <button
            type="button"
            className="bg-[#999999] text-white border border-white px-4 py-2 rounded-md cursor-pointer mt-5 hover:bg-black hover:border-black hover:text-white"
          >
            Ouça agora
          </button>
        </a>
      </div>
    </section>
  );
}
