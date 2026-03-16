'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
const links = [
  { href: '/', label: 'Home', isActive: true },
  { href: '/#about', label: 'A Vinil89' },
  { href: '/#gallery', label: 'Galeria de Fotos' },
  { href: '/music-videos', label: 'Clipes' },
  { href: '/contact', label: 'Contato' },
];

export default function Navbar({ isMobile = false, onNavigate }) {
  const pathname = usePathname();

  const handleAnchorNavigation = (event, href) => {
    if (href === '/' && pathname === '/') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '/');
      return;
    }

    if (!href.startsWith('/#') || pathname !== '/') {
      return;
    }

    const targetId = href.slice(2);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', href);
  };

  if (isMobile) {
    return (
      <nav className="mx-auto flex w-[62%] max-w-[420px] flex-col pt-32">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={(event) => {
              handleAnchorNavigation(event, item.href);
              onNavigate?.();
            }}
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
          onClick={(event) => handleAnchorNavigation(event, item.href)}
          className={`${desktopLinkClass} ${item.isActive ? 'text-[#00c8d7]' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
