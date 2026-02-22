import Link from 'next/link';
import { SearchBar } from '@/components/search-bar';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f4] pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="mb-6 font-display text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl lg:text-7xl">
              Discover Cambodia&apos;s <br className="hidden lg:block" />
              Top Digital Products
            </h1>
            <p className="mb-8 text-lg text-zinc-500 md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Explore work from the most talented developers and founders in the Kingdom.
              Real, launched products ready to be used.
            </p>
            
            <div className="mx-auto lg:mx-0 max-w-2xl">
              <SearchBar />
              
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="text-sm font-medium text-zinc-500">Popular:</span>
                <Link href="/?stack=Mobile+App" className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-black">
                  Mobile Apps
                </Link>
                <Link href="/?stack=SaaS" className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-black">
                  SaaS
                </Link>
                <Link href="/?stack=Open+Source" className="rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:border-zinc-300 hover:text-black">
                  Open Source
                </Link>
              </div>
            </div>
          </div>
          
          <div className="relative flex-1">
            <div className="relative mx-auto aspect-square w-full max-w-[500px] overflow-hidden rounded-[2rem] bg-zinc-900 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-violet-600 opacity-80 mix-blend-multiply"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-9xl font-bold text-white opacity-20">KH</span>
               </div>
               {/* 3D Element Placeholder */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
