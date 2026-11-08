import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-qb-cream">
        {/* TEMPORARY hero placeholder — replaced in Task 2 (Hero) */}
        <section className="relative flex min-h-[78vh] items-center justify-center bg-qb-black px-6 text-center">
          <div>
            <p className="qb-eyebrow-cream">The Festive Edit &middot; 2026</p>
            <h1 className="qb-h1 mt-4 text-qb-cream">
              Wear Your <span className="italic text-qb-gold">Crown</span>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-qb-bone/70">
              Hero section coming next. Scroll down to see the header solidify.
            </p>
          </div>
        </section>

        {/* spacer so the sticky-header scroll transition is visible */}
        <section className="qb-container py-40">
          <p className="qb-eyebrow">More sections on the way</p>
          <h2 className="qb-h2 mt-3">Featured Categories, New Arrivals &amp; more</h2>
        </section>
      </main>
    </>
  );
}
