'use client';

import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebounce } from '@/hooks/use-debounce';

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState(searchParams.get('query') || '');
  const query = useDebounce(text, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }
    router.push(`/?${params.toString()}`, { scroll: false });
  }, [query, router, searchParams]);

  return (
    <div className="relative w-full max-w-lg mx-auto group">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-0">
        <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-zinc-900 transition-colors" />
      </div>
      <input
        type="text"
        className="block w-full border-b-2 border-zinc-200 bg-transparent py-4 pl-10 pr-4 text-lg font-bold text-black placeholder:text-zinc-400 focus:border-neon-lime focus:outline-none focus:ring-0 transition-colors"
        placeholder="SEARCH PRODUCTS..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
