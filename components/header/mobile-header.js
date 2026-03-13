'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import Navbar from './navbar';

export default function MobileHeader({ isMenuOpen, onOpenMenu, onCloseMenu, isScrolled }) {
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div className="relative z-10 mx-auto flex min-h-28 w-full items-center px-4 md:hidden">
      <Link href="/" className="shrink-0">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_1a80789ff3c34b82bd2d6e7de4a2a3f6~mv2.png"
          alt="Logo Vinil89"
          width={220}
          height={220}
          quality={100}
          sizes="88px"
          priority
          className="h-[88px] w-[88px] rounded-full object-cover"
        />
      </Link>

      <button
        type="button"
        onClick={onOpenMenu}
        className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
        aria-label="Open menu"
      >
        <span className={`h-[2.5px] w-8 ${isScrolled ? 'bg-white/85' : 'bg-black/80'}`} />
        <span className={`h-[2.5px] w-8 ${isScrolled ? 'bg-white/85' : 'bg-black/80'}`} />
        <span className={`h-[2.5px] w-8 ${isScrolled ? 'bg-white/85' : 'bg-black/80'}`} />
      </button>

      <div
        className={`fixed inset-0 z-60 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-[#e6e6e6] transition-transform duration-500 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        />

        <div
          className={`relative h-full w-full transition-opacity duration-200 ${
            isMenuOpen ? 'opacity-100 delay-150' : 'opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={onCloseMenu}
            className="absolute top-14 right-12 text-[56px] leading-none text-black/85"
            aria-label="Close menu"
          >
            <span className="block translate-y-[-2px]">&times;</span>
          </button>

          <Navbar isMobile onNavigate={onCloseMenu} />
        </div>
      </div>
    </div>
  );
}
