'use client';

import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';

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
    <div className="mb-16 flex flex-col items-center justify-center gap-8">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {stacks.map((stack) => (
          <button
            key={stack}
            onClick={() => handleSelect(stack)}
            className={cn(
              "text-sm font-bold uppercase tracking-wider transition-all duration-300 px-4 py-2",
              selectedStack === stack
                ? "bg-black text-white shadow-[4px_4px_0px_0px_#D4F800]"
                : "text-zinc-500 hover:text-black hover:bg-zinc-100"
            )}
          >
            {stack}
          </button>
        ))}
      </div>
    </div>
  );
}
