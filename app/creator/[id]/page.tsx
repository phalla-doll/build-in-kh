import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ProductCard } from '@/components/product-card';
import { getCreator, getCreatorProducts } from '@/lib/data';
import { ArrowLeft, Github, Linkedin, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CreatorPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const creator = getCreator(params.id);

  if (!creator) {
    notFound();
  }

  const products = getCreatorProducts(creator.id);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-pink-500 selection:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:px-6">
        <Link 
          href="/" 
          className="mb-8 inline-flex items-center text-sm text-zinc-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-16 flex flex-col items-center text-center">
          {products.length > 0 ? (
            <Link href="#products" className="group mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-zinc-200 bg-zinc-50 transition-transform hover:scale-105 hover:border-black hover:shadow-[4px_4px_0px_0px_#D4F800]">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </Link>
          ) : (
            <div className="mb-6 h-32 w-32 overflow-hidden rounded-full border-2 border-zinc-200 bg-zinc-50 grayscale">
              <Image
                src={creator.avatar}
                alt={creator.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}
          
          {products.length > 0 ? (
            <Link href="#products" className="mb-2">
              <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 transition-colors hover:text-neon-lime hover:underline decoration-4 underline-offset-4 decoration-black">
                {creator.name}
              </h1>
            </Link>
          ) : (
            <h1 className="mb-2 font-display text-4xl font-bold tracking-tight text-zinc-500 cursor-not-allowed">
              {creator.name}
            </h1>
          )}
          
          <p className="mb-6 text-lg text-zinc-600 max-w-lg">{creator.bio}</p>
          
          <div className="flex gap-4">
            {creator.socials.website && (
              <a 
                href={creator.socials.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </a>
            )}
            {creator.socials.github && (
              <a 
                href={creator.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {creator.socials.linkedin && (
              <a 
                href={creator.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        
        <div id="products" className="border-t border-zinc-200 pt-16 scroll-mt-32">
          <h2 className="mb-8 font-display text-2xl font-bold text-zinc-900">Shipped Products</h2>
          
          {products.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500">No products found.</p>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
