import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-pink-500 selection:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-display text-4xl font-bold tracking-tight md:text-5xl text-zinc-900">
            About BuildInKH
          </h1>
          
          <div className="prose prose-lg max-w-none text-zinc-600 prose-headings:font-display prose-headings:font-bold prose-headings:text-zinc-900 prose-strong:text-zinc-900">
            <p className="lead text-xl text-zinc-500">
              BuildInKH is a curated platform that showcases real, launched digital products built by developers in Cambodia.
            </p>
            
            <p>
              It exists to highlight execution, not concepts — live websites, SaaS tools, mobile apps, open-source projects, and experimental builds that are publicly accessible and actively running.
            </p>
            
            <h3>Why we built this</h3>
            <p>
              The Cambodian tech ecosystem is growing, but it&apos;s fragmented. Amazing products are being built every day, but they often go unnoticed. We wanted to create a central hub where builders can show off their work, and where the community can discover what&apos;s being made right here in the Kingdom.
            </p>
            
            <h3>What qualifies?</h3>
            <ul>
              <li><strong>Live Products:</strong> It must be accessible via a URL or app store link.</li>
              <li><strong>Cambodian Builders:</strong> Built by developers based in or from Cambodia.</li>
              <li><strong>Real Code:</strong> No no-code templates (unless heavily customized) or &quot;Coming Soon&quot; landing pages.</li>
            </ul>
            
            <h3>Join the movement</h3>
            <p>
              If you&apos;re a developer, designer, or founder, we want to see what you&apos;ve built. Submit your project and join the community of builders who are shipping real products.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
