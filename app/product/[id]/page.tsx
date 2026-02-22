import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Badge } from '@/components/ui/badge';
import { getProduct, getCreator } from '@/lib/data';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product = getProduct(params.id);

  if (!product) {
    notFound();
  }

  const creator = getCreator(product.creatorId);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-pink-500 selection:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:px-6">
        <Link 
          href="/" 
          className="mb-8 inline-flex items-center text-sm text-zinc-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column: Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
            <Image
              src={product.imageUrl}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Right Column: Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center gap-3">
              <Badge variant="outline" className="border-emerald-500/30 bg-emerald-50 text-emerald-600">
                Live
              </Badge>
              <span className="text-sm text-zinc-500 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Launched {new Date(product.launchedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </span>
            </div>
            
            <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
              {product.title}
            </h1>
            
            <p className="mb-8 text-lg text-zinc-600 leading-relaxed">
              {product.longDescription}
            </p>
            
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-medium text-zinc-900 uppercase tracking-wider">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {product.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-zinc-100 text-zinc-600 border border-zinc-200 hover:bg-zinc-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            {creator && (
              <div className="mb-10 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="flex items-center gap-4">
                  <Link href={`/creator/${creator.id}`}>
                    <div className="h-12 w-12 overflow-hidden rounded-full border border-zinc-200">
                      <Image
                        src={creator.avatar}
                        alt={creator.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </Link>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider">Built by</p>
                    <Link href={`/creator/${creator.id}`} className="font-medium text-zinc-900 hover:underline">
                      {creator.name}
                    </Link>
                    <p className="text-xs text-zinc-500">{creator.role}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex gap-4">
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-medium text-white transition-colors hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Visit Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
              {/* If there was a source code link, it would go here */}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
