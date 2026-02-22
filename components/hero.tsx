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
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
               <Link href="#products" className="flex w-full sm:w-auto justify-center items-center gap-2 bg-neon-lime px-8 py-4 text-base font-bold text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  EXPLORE PRODUCTS <ArrowRight className="h-5 w-5" />
               </Link>
               <Link href="/about" className="flex w-full sm:w-auto justify-center items-center gap-2 border-2 border-black bg-white px-8 py-4 text-base font-bold text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  LEARN MORE
               </Link>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
             <div className="relative aspect-square w-full max-w-[600px] mx-auto">
                {/* Background decorative elements */}
                <div className="absolute -right-4 -top-4 h-full w-full border-2 border-zinc-200 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
                
                {/* Main visual container */}
                <div className="relative h-full w-full border-4 border-black bg-white p-2 shadow-[12px_12px_0px_0px_#D4F800]">
                   <div className="relative h-full w-full overflow-hidden border-2 border-black bg-black">
                      {/* Gritty overlay image */}
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-60 mix-blend-hard-light grayscale contrast-125"></div>
                      
                      {/* Glitch/Tech overlay elements */}
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>
                      
                      <div className="relative z-10 flex h-full flex-col items-center justify-center p-8 text-center">
                         <div className="font-mono text-9xl font-black text-white mix-blend-difference">
                            KH
                         </div>
                         <div className="mt-4 border-2 border-white bg-black px-4 py-1 font-mono text-sm font-bold uppercase tracking-widest text-white">
                            Digital Product Showcase
                         </div>
                      </div>
                      
                      {/* Corner accents */}
                      <div className="absolute left-0 top-0 h-16 w-16 border-l-4 border-t-4 border-neon-lime"></div>
                      <div className="absolute bottom-0 right-0 h-16 w-16 border-b-4 border-r-4 border-neon-lime"></div>
                   </div>
                   
                   {/* Floating Badge - Brutalist Style */}
                   <div className="absolute -bottom-8 -left-8 border-4 border-black bg-white px-6 py-4 shadow-[8px_8px_0px_0px_black]">
                      <div className="flex items-center gap-4">
                         <div className="flex h-4 w-4 items-center justify-center rounded-none bg-red-600 animate-pulse"></div>
                         <div className="flex flex-col">
                            <span className="font-mono text-xs font-bold uppercase text-zinc-500">Database</span>
                            <span className="font-display text-2xl font-black leading-none text-black">100+</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
