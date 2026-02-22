import Image from 'next/image';
import Link from 'next/link';
import { Product, getCreator } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const creator = getCreator(product.creatorId);
  
  return (
    <div className="group relative flex flex-col border-2 border-black bg-white transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:z-10 hover:shadow-[8px_8px_0px_0px_#D4F800]">
      <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.title}</span>
      </Link>
      
      {/* Image Section */}
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b-2 border-black bg-zinc-100">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay Badge */}
        <div className="absolute top-0 left-0 border-b-2 border-r-2 border-black bg-white px-3 py-1">
           <span className="font-mono text-xs font-bold uppercase tracking-tighter text-black">
              {product.category}
           </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-neon-lime opacity-0 shadow-[4px_4px_0px_0px_black] transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                <ArrowUpRight className="h-6 w-6 text-black" />
            </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="mb-4">
          <h3 className="font-display text-2xl font-black uppercase leading-none tracking-tight text-black group-hover:text-zinc-700">
            {product.title}
          </h3>
          <p className="mt-2 line-clamp-2 font-mono text-xs text-zinc-500">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between border-t-2 border-black pt-3">
          {creator && (
            <div className="flex items-center gap-2">
               <div className="h-6 w-6 overflow-hidden rounded-full border border-black bg-zinc-200">
                  <Image 
                    src={creator.avatar} 
                    alt={creator.name}
                    width={24}
                    height={24}
                    className="h-full w-full object-cover"
                  />
               </div>
               <span className="font-mono text-xs font-bold uppercase text-black">
                 {creator.name}
               </span>
            </div>
          )}
          <span className="font-mono text-xs font-bold text-zinc-400">
            {new Date(product.launchedAt).getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
}
