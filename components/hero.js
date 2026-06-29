import Image from 'next/image';

export default function Hero() {
  return (
    <section className="superhero relative flex h-[60svh] w-full flex-col items-center justify-center bg-vin-background md:h-[80svh] lg:h-[150svh]">
      <Image
        src="https://static.wixstatic.com/media/c3fe9c_64a2f466993247fb86b18a52d833441b~mv2.jpg"
        alt="Vinil89 desktop hero background"
        fill
        priority
        className="hidden object-cover object-top opacity-70 md:block"
      />

      <Image
        src="https://static.wixstatic.com/media/c3fe9c_b884a49de973496fb4796d067aacb732~mv2.jpg"
        alt="Vinil89 mobile hero background"
        fill
        priority
        className="block object-cover object-top opacity-70 md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-vin-white">
        <h1 className="h1 text-vin-primary">Vinil89</h1>

        <a href="/music-videos">
          <button type="button" className="btn-primary mt-5">
            Ouça agora
          </button>
        </a>
      </div>
    </section>
  );
}
