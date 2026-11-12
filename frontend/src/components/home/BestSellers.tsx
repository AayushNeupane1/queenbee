import Link from "next/link";
import { bestSellers } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/product/ProductCard";

const tones = ["black", "magenta", "gold"] as const;

/**
 * Best Sellers — the first products a visitor sees. Sits on a bone background
 * so it reads as its own band between the category grid and what follows.
 */
export default function BestSellers() {
  return (
    <section className="bg-qb-bone/60 py-24 md:py-32">
      <div className="qb-container">
        <Reveal className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="qb-eyebrow-gold">Most Loved</p>
            <h2 className="qb-h2 mt-3">
              Best <span className="italic text-qb-magenta">Sellers</span>
            </h2>
          </div>
          <Link href="/shop" className="qb-nav-link mb-2 hidden shrink-0 sm:inline-block">
            View all
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-5 lg:grid-cols-4">
          {bestSellers.map((product, i) => (
            <Reveal key={product.id} delay={i * 0.08}>
              <ProductCard product={product} tone={tones[i % tones.length]} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link href="/shop" className="qb-btn-ghost">
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
