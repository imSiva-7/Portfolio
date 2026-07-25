'use client';

import Link from 'next/link';
// import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { ThemeToggle } from './ui/ThemeToggle';
const menuItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        {/* Logo – scrolls to top */}
        <Link href="#hero" className="text-xl font-bold tracking-tight">
          Siva<span className="text-blue-600">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center space-x-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}