import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-zinc-900">BuildInKH</span>
          </div>
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} BuildInKH. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm text-zinc-500 hover:text-black transition-colors">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
