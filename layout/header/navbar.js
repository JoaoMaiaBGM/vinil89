'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'home' },
  { href: '/#sobre', label: 'sobre' },
  { href: '/#midia', label: 'mídia' },
  { href: '/contact', label: 'contato' },
];

export default function Navbar({ className }) {
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

  return (
    <nav className={`flex items-center gap-4 lg:gap-6 xl:gap-8 ${className || ''}`}>
      {links.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={(event) => handleAnchorNavigation(event, item.href)}
          className="capitalize p-small text-vin-white transition-colors hover:text-vin-primary whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
