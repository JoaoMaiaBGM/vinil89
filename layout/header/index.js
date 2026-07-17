'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LiaYoutube, LiaInstagram } from 'react-icons/lia';

import Navbar from './navbar';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-vin-blue-350 backdrop-blur-md border-b border-border z-50">
      <div className="relative z-10 mx-auto flex p-4 w-full max-w-[1200px] items-center justify-between">
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <Image
            src="https://static.wixstatic.com/media/c3fe9c_b5825c1eeef245d2af977b118240321c~mv2.png"
            alt="Logo Vinil89"
            width={1200}
            height={1200}
            priority
            className="w-10 h-10 object-contain"
          />

          <span className="text-2xl uppercase font-bold text-gradient">vinil89</span>
        </Link>

        <Navbar className="hidden md:flex" />

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/bandavinil89/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vin-white hover:text-vin-primary transition-colors"
          >
            <LiaInstagram className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@vinil89.oficial"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vin-white hover:text-vin-primary transition-colors"
          >
            <LiaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}
