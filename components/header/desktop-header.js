import Image from 'next/image';
import Link from 'next/link';
import Navbar from './navbar';

export default function DesktopHeader() {
  return (
    <div className="relative z-10 mx-auto hidden min-h-24 w-full max-w-[1200px] items-center px-4 md:flex md:px-6">
      <Link href="/" className="shrink-0">
        <Image
          src="https://static.wixstatic.com/media/c3fe9c_1a80789ff3c34b82bd2d6e7de4a2a3f6~mv2.png"
          alt="Logo Vinil89"
          width={220}
          height={220}
          quality={100}
          sizes="100px"
          priority
          className="h-[100px] w-[100px] rounded-full object-cover"
        />
      </Link>

      <div className="absolute left-1/2 -translate-x-1/2">
        <Navbar />
      </div>
    </div>
  );
}
