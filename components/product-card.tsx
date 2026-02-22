import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Product, Creator, getCreator } from '@/lib/data';
import { Heart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const creator = getCreator(product.creatorId);
  
  // Generate deterministic numbers based on product ID
  const likes = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 200 + 20;
  const views = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) * 12 % 5000 + 500;

  return (
    <div className="group flex flex-col gap-3">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100">
        <Link href={`/product/${product.id}`} className="absolute inset-0 z-10">
          <span className="sr-only">View {product.title}</span>
        </Link>
        
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="font-medium text-white truncate">{product.title}</span>
          <div className="flex gap-2">
            <button className="rounded-md bg-white p-2 text-zinc-900 shadow-sm hover:bg-zinc-100">
                <Heart className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-0.5">
        {creator && (
          <div className="flex items-center gap-2">
            <Link href={`/creator/${creator.id}`} className="relative h-6 w-6 overflow-hidden rounded-full">
              <Image
                src={creator.avatar}
                alt={creator.name}
                fill
                className="object-cover"
              />
            </Link>
            <Link href={`/creator/${creator.id}`} className="text-sm font-medium text-zinc-900 hover:underline">
              {creator.name}
            </Link>
            <Badge variant="secondary" className="bg-zinc-200 text-[10px] text-zinc-600 px-1 py-0 h-4">
              PRO
            </Badge>
          </div>
        )}
        
        <div className="flex items-center gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-1 hover:text-pink-500 cursor-pointer transition-colors">
            <Heart className="h-3.5 w-3.5" />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            <span>{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
