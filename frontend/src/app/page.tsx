import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CategoryExplorer from "@/components/home/CategoryExplorer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-qb-cream">
        <Hero />
        <CategoryExplorer />

        {/* spacer — next sections land here (Best Sellers, Offers, Story...) */}
        <section className="qb-container pb-40">
          <p className="qb-eyebrow">More sections on the way</p>
        </section>
      </main>
    </>
  );
}
