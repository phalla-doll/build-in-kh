import Link from 'next/link';
import { Github } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm transition-all border-b border-zinc-100">
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="border-2 border-black bg-neon-lime p-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Logo className="h-8 w-8" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-zinc-500">Built In</span>
              <span className="font-display text-xl font-black tracking-tighter text-black uppercase">Cambodia</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/ranking" className="text-sm font-bold text-zinc-500 hover:text-black transition-colors uppercase tracking-wide">
              Github Ranking
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
