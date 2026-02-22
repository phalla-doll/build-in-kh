import Link from 'next/link';
import { Github } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all border-b border-zinc-100">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 font-display text-3xl font-black tracking-tighter text-black">
            <Logo className="h-10 w-10" />
            BuildInKH
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-bold text-zinc-500 hover:text-black transition-colors uppercase tracking-wide">
              Discover
            </Link>
            <Link href="/about" className="text-sm font-bold text-zinc-500 hover:text-black transition-colors uppercase tracking-wide">
              About
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="/submit"
            className="rounded-none bg-neon-lime px-6 py-3 text-sm font-bold text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          >
            SUBMIT PRODUCT
          </Link>
        </div>
      </div>
    </nav>
  );
}
