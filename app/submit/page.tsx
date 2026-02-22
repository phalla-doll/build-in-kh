import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-pink-500 selection:text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-24 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="mb-6 font-display text-4xl font-bold tracking-tight text-zinc-900">Submit Your Product</h1>
          <p className="mb-8 text-lg text-zinc-500">
            Have you built and launched a digital product in Cambodia? We&apos;d love to showcase it.
          </p>
          
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 text-left shadow-sm">
            <h2 className="mb-4 font-display text-xl font-bold text-zinc-900">Submission Guidelines</h2>
            <ul className="mb-8 list-disc space-y-2 pl-5 text-zinc-600">
              <li>Must be a live, accessible product (URL required).</li>
              <li>Must be built by a Cambodian developer or team.</li>
              <li>No &quot;Coming Soon&quot; pages or concepts.</li>
              <li>Side projects, startups, and open source tools are all welcome.</li>
            </ul>
            
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium text-zinc-700">
                To submit, please email us with the following details:
              </label>
              <div className="rounded-lg bg-white border border-zinc-200 p-4 font-mono text-sm text-zinc-600 shadow-inner">
                <p>To: submit@buildinkh.com</p>
                <p>Subject: New Submission: [Product Name]</p>
                <br />
                <p>1. Product Name</p>
                <p>2. Live URL</p>
                <p>3. Short Description</p>
                <p>4. Tech Stack</p>
                <p>5. Your Name & Portfolio/Social Link</p>
              </div>
              
              <a
                href="mailto:submit@buildinkh.com?subject=New Submission"
                className="mt-4 inline-flex h-12 items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-medium text-white transition-colors hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              >
                Send Submission Email
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
