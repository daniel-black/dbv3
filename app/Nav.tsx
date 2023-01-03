'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

const navItems = ['', 'projects', 'books'];

const isActive = (item: string, path: string | null): boolean => {
  return path === `/${item}`;
}

export default function Nav() {
  const p = usePathname();

  return (
    <nav className='flex flex-row space-x-3 sm:space-x-6'>
      {navItems.map(item => (
        <Link
          key={item}
          className={`nav-link ${p === `/${item}` ? 'nav-active' : ''}`} 
          href={item}
        >
          {item === '' ? 'about' : item}
        </Link>
      ))}
    </nav>
  );
}