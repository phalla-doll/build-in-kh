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
    <div className="group relative flex flex-col border-2 border-zinc-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:shadow-[8px_8px_0px_0px_#D4F800]">
      <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.title}</span>
      </Link>
      
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden bg-zinc-100">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-0 right-0 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="bg-neon-lime p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <ArrowUpRight className="h-5 w-5 text-black" />
            </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="font-bold text-black text-lg leading-tight line-clamp-1 group-hover:text-zinc-700 transition-colors">
            {product.title}
          </h3>
          <span className="shrink-0 text-[10px] font-bold text-zinc-500 uppercase tracking-wider border border-zinc-200 px-2 py-1 bg-zinc-50">
            {product.category}
          </span>
        </div>
        
        {creator && (
          <p className="text-sm text-zinc-500 font-medium">
            by <span className="text-black group-hover:bg-neon-lime transition-colors px-1 -ml-1">{creator.name}</span>
          </p>
        )}
      </div>
    </div>
  );
}
