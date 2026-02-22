import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function RankingPage() {
  return (
    <main className="min-h-screen bg-white text-black selection:bg-neon-lime selection:text-black">
      <Navbar />
      <section className="container mx-auto px-6 md:px-12 py-24">
        <h1 className="mb-8 font-display text-5xl font-black tracking-tighter text-black">
          GitHub Ranking
        </h1>
        <p className="text-xl text-zinc-600">
          Coming soon: A leaderboard of top Cambodian developers and repositories.
        </p>
      </section>
      <Footer />
    </main>
  );
}
