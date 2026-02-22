'use client';

import { cn } from '@/lib/utils';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

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
  const currentQuery = searchParams.get('query') || '';
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(currentQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSelect = (stack: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (stack === 'All') {
      params.delete('stack');
    } else {
      params.set('stack', stack);
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set('query', searchQuery);
    } else {
      params.delete('query');
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const clearSearch = () => {
    setSearchQuery('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete('query');
    router.push(`/?${params.toString()}`, { scroll: false });
    setIsSearchOpen(false);
  };

  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-8">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4">
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
        
        <div className="relative ml-4 h-10">
          <form
            onSubmit={handleSearchSubmit}
            className={cn(
              "flex h-10 items-center overflow-hidden bg-white transition-all duration-300 ease-in-out",
              isSearchOpen
                ? "w-72 border-2 border-black shadow-[4px_4px_0px_0px_#D4F800]"
                : "w-10 border-2 border-transparent hover:border-black hover:shadow-[4px_4px_0px_0px_#D4F800]"
            )}
          >
            <button
              type="button"
              onClick={() => {
                if (!isSearchOpen) {
                  setIsSearchOpen(true);
                  setTimeout(() => inputRef.current?.focus(), 100);
                }
              }}
              className="flex h-10 w-10 shrink-0 items-center justify-center text-black"
            >
              <Search className="h-5 w-5" />
            </button>
            
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className={cn(
                "h-full w-full bg-transparent text-sm font-bold text-black outline-none placeholder:text-zinc-400",
                isSearchOpen ? "opacity-100 px-2" : "opacity-0 px-0"
              )}
            />
            
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                clearSearch();
              }}
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center text-zinc-400 hover:text-black",
                isSearchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <X className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
