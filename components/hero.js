'use client';

import Image from 'next/image';
import { LiaPlaySolid } from 'react-icons/lia';

const HERO_IMAGE =
  'https://static.wixstatic.com/media/c3fe9c_f792a61d86334dacba2db5fe23eaf5f2~mv2.png';

const HERO_IMAGE_MOBILE =
  'https://static.wixstatic.com/media/c3fe9c_30809ee2ff2948cea2485321128145e0~mv2.png';

export default function Hero() {
  const handleScrollToMedia = () => {
    const media = document.getElementById('media');
    if (!media) return;
    media.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="section-p relative flex flex-col bg-vin-blue-350 overflow-hidden md:min-h-screen"
    >
      <div className="relative min-h-[300px] md:flex-1 lg:absolute lg:inset-0">
        <Image
          src={HERO_IMAGE}
          alt="Vinil89 desktop hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />

        <div className="pointer-events-none absolute inset-0 block bg-linear-to-b from-vin-blue-350/60 via-vin-blue-350/40 to-vin-blue-350 lg:hidden" />
      </div>

      <div className="relative z-10 flex shrink-0 flex-col items-center justify-center gap-6 pt-14 text-center lg:pb-0 lg:absolute lg:inset-0 lg:gap-8 lg:bg-transparent">
        <h1 className="h2 w-full text-vin-white font-bold md:max-w-sm lg:max-w-xl">
          <span className="text-gradient uppercase">a energia do</span>
          <br />
          <span className="text-vin-white uppercase">pop/rock nacional e internacional</span>
        </h1>

        <button
          type="button"
          className="btn-accent p-medium-bold h-12 px-4 flex items-center justify-center gap-2"
          onClick={handleScrollToMedia}
        >
          <LiaPlaySolid className="w-5 h-5" />
          Ouça agora
        </button>
      </div>

      <div className="absolute inset-0 hidden bg-linear-to-b from-vin-blue-350/60 via-vin-blue-350/60 to-vin-blue-350 lg:block" />
    </section>
  );
}
