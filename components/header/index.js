'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 right-0 left-0 overflow-x-hidden z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-black shadow-[0_4px_18px_rgba(0,0,0,0.55)]'
          : 'bg-transparent shadow-[0_2px_10px_rgba(0,0,0,0.35)]'
      }`}
    >
      <div className="relative isolate">
        {!isScrolled && (
          <>
            <Image
              src="https://static.wixstatic.com/media/e203109d1da54dd0aaf8de0f98a49ad5.jpg"
              alt="Textura do header"
              fill
              priority
              className="pointer-events-none -z-10 scale-150 object-cover object-top opacity-85 md:scale-100"
            />
            <div className="pointer-events-none absolute inset-0 z-0 bg-black/45" />
          </>
        )}

        <DesktopHeader />
        <MobileHeader
          isMenuOpen={isMenuOpen}
          onOpenMenu={() => setIsMenuOpen(true)}
          onCloseMenu={() => setIsMenuOpen(false)}
          isScrolled={isScrolled}
        />
      </div>
    </header>
  );
}
