import Link from 'next/link';
const links = [
  { href: '/', label: 'Home', isActive: true },
  { href: '/#about', label: 'A Vinil89' },
  { href: '/#gallery', label: 'Galeria de Fotos' },
  { href: '/music-videos', label: 'Clipes' },
  { href: '/contact', label: 'Contato' },
];

export default function Navbar({ isMobile = false, onNavigate }) {
  if (isMobile) {
    return (
      <nav className="mx-auto flex w-[62%] max-w-[420px] flex-col pt-32">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`block w-full border-b border-black/55 py-3 text-center text-[20px] leading-none ${
              item.isActive ? 'text-black/35' : 'text-black'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  const desktopLinkClass =
    'text-sm lg:text-[16px] font-medium text-white transition-colors hover:text-[#00c8d7] whitespace-nowrap';

  return (
    <nav className="flex items-center gap-4 lg:gap-6 xl:gap-8">
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${desktopLinkClass} ${item.isActive ? 'text-[#00c8d7]' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
