'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const links = [
  {
    name: 'Gastos',
    href: '/dashboard',
    icon: '/icons/gastos.ico',
  },
  { name: 'Home', href: '/dashboard/invoices', icon: '/icons/home.ico' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-gray-400 font-bold hover:text-violet-600 md:flex-none md:justify-start md:p-2 md:px-3 ${
              pathname === link.href ? ` text-violet-600` : ''
            }`}
          >
            <Image
              src={link.icon}
              alt={link.name}
              width={24}
              height={24}
            />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}