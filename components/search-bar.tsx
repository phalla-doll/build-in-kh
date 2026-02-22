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
    <div className="relative w-full max-w-2xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6">
        <Search className="h-5 w-5 text-zinc-400" />
      </div>
      <input
        type="text"
        className="block w-full rounded-full border-0 bg-white py-4 pl-14 pr-16 text-base text-zinc-900 shadow-lg shadow-zinc-200/50 placeholder:text-zinc-400 focus:ring-2 focus:ring-pink-500/20"
        placeholder="What are you looking for?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="absolute inset-y-0 right-2 flex items-center">
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-white transition-transform hover:scale-105 hover:bg-pink-600">
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
