import Link from 'next/link';
import { Logo } from '@/components/logo';

export function Footer() {
  return (
    <footer className="bg-dark-surface py-20 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-sm">
             <div className="flex items-center gap-3 mb-6">
                <Logo className="h-10 w-10" variant="neon" />
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-black tracking-tighter text-white leading-none">BuildInKH</span>
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest">EST. 2024</span>
                </div>
             </div>
             <div className="border-l-2 border-neon-lime pl-6">
                <h3 className="text-neon-lime font-bold text-lg mb-2 flex items-center gap-2">
                   <span className="inline-block h-4 w-4 bg-neon-lime clip-path-polygon"></span>
                   Our Mission
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                   A curated platform that showcases real, launched digital products built by developers in Cambodia.
                </p>
             </div>
          </div>
          
          <div className="flex flex-col gap-6">
             <h4 className="font-bold uppercase tracking-widest text-zinc-500 text-sm">Platform</h4>
             <div className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-medium hover:text-neon-lime transition-colors">Discover</Link>
                <Link href="/about" className="text-lg font-medium hover:text-neon-lime transition-colors">About</Link>
                <Link href="/submit" className="text-lg font-medium hover:text-neon-lime transition-colors">Submit</Link>
             </div>
          </div>
          
          <div className="flex flex-col gap-6">
             <h4 className="font-bold uppercase tracking-widest text-zinc-500 text-sm">Connect</h4>
             <div className="flex flex-col gap-4">
                <Link href="#" className="text-lg font-medium hover:text-neon-lime transition-colors">Twitter</Link>
                <Link href="#" className="text-lg font-medium hover:text-neon-lime transition-colors">GitHub</Link>
                <Link href="#" className="text-lg font-medium hover:text-neon-lime transition-colors">Discord</Link>
             </div>
          </div>
        </div>
        
        <div className="mt-20 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-zinc-600 text-sm">&copy; {new Date().getFullYear()} BuildInKH. All rights reserved.</p>
           <p className="text-zinc-600 text-sm font-mono">DESIGNED IN CAMBODIA</p>
        </div>
      </div>
    </footer>
  );
}
