import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BuildInKH - Showcasing Cambodian Digital Products',
  description: 'A curated platform showcasing real, launched digital products built by developers in Cambodia.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="antialiased">
      <body className="font-sans bg-white text-black min-h-screen selection:bg-neon-lime selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
