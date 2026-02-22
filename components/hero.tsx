import Link from 'next/link';
import { SearchBar } from '@/components/search-bar';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-24 md:pt-32 md:pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <div className="mb-6 inline-block border-l-2 border-neon-lime pl-4">
               <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Curated Showcase</span>
            </div>
            <h1 className="mb-8 font-display text-7xl font-black tracking-tighter text-black md:text-8xl lg:text-9xl leading-[0.9]">
              Built in <span className="text-zinc-300">Cambodia</span>
            </h1>
            <p className="mb-10 text-xl text-zinc-600 md:text-2xl leading-relaxed max-w-xl">
              A curated platform that showcases real, launched digital products built by developers in Cambodia.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <Link href="#products" className="inline-flex items-center gap-2 bg-neon-lime px-8 py-4 text-base font-bold text-black transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  EXPLORE PRODUCTS <ArrowRight className="h-5 w-5" />
               </Link>
               <Link href="/about" className="inline-flex items-center gap-2 border-2 border-black bg-white px-8 py-4 text-base font-bold text-black transition-transform hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  LEARN MORE
               </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
             <div className="relative aspect-square w-full max-w-[600px] mx-auto">
                <div className="absolute inset-0 bg-zinc-100 rounded-full opacity-50 blur-3xl transform translate-x-10 translate-y-10"></div>
                {/* Abstract representation of "Future" */}
                <div className="relative h-full w-full bg-black rounded-[3rem] overflow-hidden flex items-center justify-center">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-screen"></div>
                   <div className="relative z-10 text-center">
                      <div className="text-neon-lime font-mono text-9xl font-bold opacity-20">01</div>
                   </div>
                   
                   {/* Floating Badge */}
                   <div className="absolute top-10 right-10 bg-white px-6 py-3 rounded-xl shadow-xl flex items-center gap-3">
                      <div className="h-3 w-3 bg-neon-lime rounded-full animate-pulse"></div>
                      <span className="font-bold text-sm">100+ Products</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
