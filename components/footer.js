import Image from 'next/image';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="text-white flex flex-col items-center justify-center gap-4 py-2 mx-auto min-h-24 w-full max-w-[1200px] px-4 md:flex-row md:justify-between md:px-8">
      <div className="logo-container">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_1a80789ff3c34b82bd2d6e7de4a2a3f6~mv2.png"
          alt="Logo Vinil89"
          width={70}
          height={70}
          priority
          className="h-[70px] w-[70px] rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center justify-center max-w-lg text-center gap-2">
        <p className="text-xs md:text-sm">
          &copy; 2026 Vinil89. Todos os direitos reservados. Criado com{' '}
          <a
            href="https://wix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 underline"
          >
            Wix.com
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/bandavinil89/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram da Vinil89"
          >
            <FaInstagram size={22} className="text-white hover:text-gray-300 pointer" />
          </a>
          <a
            href="https://www.youtube.com/@vinil89.oficial"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube da Vinil89"
          >
            <FaYoutube size={22} className="text-white hover:text-gray-300 pointer" />
          </a>
        </span>
      </div>
    </footer>
  );
}
