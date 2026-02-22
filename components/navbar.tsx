import Link from 'next/link';
import { Github } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-display text-xl font-bold tracking-tight text-black">
            BuildInKH
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              Inspiration
            </Link>
            <Link href="/about" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
              Jobs
            </Link>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="/submit" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors hidden sm:block">
            Sign in
          </Link>
          <Link
            href="/submit"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Submit Product
          </Link>
        </div>
      </div>
    </nav>
  );
}
