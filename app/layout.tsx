import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BuildInKH - Showcasing Cambodian Digital Products',
  description: 'A curated platform showcasing real, launched digital products built by developers in Cambodia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-white text-zinc-900 min-h-screen selection:bg-pink-500 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
