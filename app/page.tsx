import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { FilterBar } from '@/components/filter-bar';
import { ProductCard } from '@/components/product-card';
import { Footer } from '@/components/footer';
import { products, TechStack } from '@/lib/data';

export default async function Home(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const stack = searchParams.stack as string | undefined;
  const query = searchParams.query as string | undefined;

  let filteredProducts = products;

  if (stack) {
    filteredProducts = filteredProducts.filter((p) => p.techStack.includes(stack as TechStack));
  }

  if (query) {
    const lowerQuery = query.toLowerCase();
    filteredProducts = filteredProducts.filter((p) => 
      p.title.toLowerCase().includes(lowerQuery) || 
      p.description.toLowerCase().includes(lowerQuery) ||
      p.longDescription.toLowerCase().includes(lowerQuery)
    );
  }

  return (
    <main className="min-h-screen bg-white text-black selection:bg-neon-lime selection:text-black">
      <Navbar />
      <Hero />
      
      <section id="products" className="w-full px-6 md:px-12 py-12">
        <FilterBar />
        
        {filteredProducts.length > 0 ? (
          <div className="grid gap-x-8 gap-y-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex h-96 flex-col items-center justify-center text-center">
            <p className="text-xl font-bold text-zinc-400">No products found.</p>
            <Link href="/" className="mt-4 text-sm font-bold text-black border-b-2 border-neon-lime hover:bg-neon-lime transition-colors">
              CLEAR FILTERS
            </Link>
          </div>
        )}
        
        <div className="mt-24 flex justify-center">
            <button className="text-sm font-bold text-zinc-500 hover:text-black transition-colors uppercase tracking-widest border-b-2 border-transparent hover:border-neon-lime pb-1">
                Load More
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
