import Image from 'next/image';
import Link from 'next/link';
import { Product, getCreator } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const creator = getCreator(product.creatorId);
  
  return (
    <div className="group flex flex-col gap-4">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100">
        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
          <span className="sr-only">View {product.title}</span>
        </Link>
        
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Hover Overlay with Neon Accent */}
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
            <div className="bg-neon-lime text-black px-6 py-2 font-bold uppercase tracking-wider transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                View Project
            </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-black text-lg leading-tight group-hover:text-zinc-600 transition-colors">
            {product.title}
          </h3>
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider border border-zinc-200 px-2 py-1">{product.category}</span>
        </div>
        
        {creator && (
          <p className="text-sm text-zinc-500 font-medium">
            by <span className="text-black border-b-2 border-transparent group-hover:border-neon-lime transition-colors">{creator.name}</span>
          </p>
        )}
      </div>
    </div>
  );
}
