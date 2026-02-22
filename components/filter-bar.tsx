'use client';

import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';

const stacks: string[] = [
  'All',
  'React',
  'Next.js',
  'Vue',
  'Flutter',
  'Go',
  'Node.js',
  'Laravel',
];

export function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedStack = searchParams.get('stack') || 'All';

  const handleSelect = (stack: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (stack === 'All') {
      params.delete('stack');
    } else {
      params.set('stack', stack);
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
      <button className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50">
        Following <ChevronDown className="h-4 w-4 text-zinc-400" />
      </button>

      <div className="flex flex-1 items-center justify-center gap-6 overflow-x-auto pb-2 scrollbar-hide md:pb-0">
        {stacks.map((stack) => (
          <button
            key={stack}
            onClick={() => handleSelect(stack)}
            className={cn(
              "whitespace-nowrap text-sm font-medium transition-colors",
              selectedStack === stack
                ? "text-black"
                : "text-zinc-500 hover:text-black"
            )}
          >
            {stack}
          </button>
        ))}
      </div>

      <button className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50">
        <SlidersHorizontal className="h-4 w-4" /> Filters
      </button>
    </div>
  );
}
