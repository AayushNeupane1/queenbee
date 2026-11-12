import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import CategoryExplorer from "@/components/home/CategoryExplorer";
import BestSellers from "@/components/home/BestSellers";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-qb-cream">
        <Hero />
        <CategoryExplorer />
        <BestSellers />

        {/* spacer — next sections land here (Offers, Story...) */}
        <section className="qb-container py-24">
          <p className="qb-eyebrow">More sections on the way</p>
        </section>
      </main>
    </>
  );
}
