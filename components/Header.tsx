'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-white' : 'text-gray-500 hover:text-gray-300';
  };

  return (
    <header className="border-b border-gray-800 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-mono text-xs font-bold tracking-wide text-gray-300 hover:text-white transition-colors">
          <span className="text-gray-600">&gt;</span> Hanwu-AGI
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={`font-mono text-xs transition-colors ${isActive('/')}`}>
            agents
          </Link>
          <Link href="/docs" className={`font-mono text-xs transition-colors ${isActive('/docs')}`}>
            docs
          </Link>
          <Link href="/api-docs" className={`font-mono text-xs transition-colors ${isActive('/api-docs')}`}>
            api
          </Link>
          <Link href="/social" className={`font-mono text-xs transition-colors ${isActive('/social')}`}>
            x
          </Link>
        </nav>

        <div className="font-mono text-xs text-gray-500">
          <span className="text-green-500">●</span> online
        </div>
      </div>
    </header>
  );
}
