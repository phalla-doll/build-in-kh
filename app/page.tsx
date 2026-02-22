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
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-pink-500 selection:text-white">
      <Navbar />
      <Hero />
      
      <section id="products" className="container mx-auto px-4 py-8 md:px-6">
        <FilterBar />
        
        {filteredProducts.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 text-center">
            <p className="text-zinc-500">No products found matching your criteria.</p>
            <Link href="/" className="mt-4 text-sm font-medium text-pink-500 underline underline-offset-4 hover:text-pink-600">
              Clear filters
            </Link>
          </div>
        )}
        
        <div className="mt-12 flex justify-center">
            <button className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-50 hover:text-pink-500 transition-colors">
                Load more shots
            </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
