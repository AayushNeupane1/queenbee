import Link from "next/link";
import { categories } from "@/data/home";
import { Reveal } from "@/components/ui/Reveal";
import { QbImage } from "@/components/ui/QbImage";

const tones = ["magenta", "black", "gold"] as const;

/**
 * Category Explorer — editorial grid. On hover the garment scales toward the
 * viewer, a gold frame draws in, and the CTA rises: the "clothes coming to you"
 * feeling that invites exploration straight after the hero.
 */
export default function CategoryExplorer() {
  return (
    <section className="qb-container py-24 md:py-32">
      <Reveal className="mb-12 text-center md:mb-16">
        <p className="qb-eyebrow-gold">Explore the Wardrobe</p>
        <h2 className="qb-h2 mt-3">
          Find the piece that <span className="italic text-qb-magenta">reigns</span>
        </h2>
        <div className="qb-divider mt-6" />
      </Reveal>

      <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 0.08}>
            <Link
              href={`/shop/${cat.slug}`}
              className="group relative block aspect-[3/4] overflow-hidden rounded-qb bg-qb-black"
            >
              {/* image / placeholder */}
              <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]">
                <QbImage
                  src={cat.image}
                  alt={cat.name}
                  label={cat.name}
                  tone={tones[i % tones.length]}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* legibility gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-qb-black/85 via-qb-black/10 to-transparent transition-opacity duration-500 group-hover:from-qb-black/90" />

              {/* gold frame draws in on hover */}
              <div className="pointer-events-none absolute inset-3 rounded-qb border border-qb-gold/0 transition-all duration-500 group-hover:inset-4 group-hover:border-qb-gold/60" />

              {/* content */}
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-[10px] uppercase tracking-[0.25em] text-qb-gold">
                  {cat.itemCount} styles
                </p>
                <h3 className="mt-1 font-display text-2xl font-light text-qb-cream md:text-3xl">
                  {cat.name}
                </h3>
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <span className="overflow-hidden text-[11px] font-medium uppercase tracking-[0.2em] text-qb-cream/85">
                    <span className="mt-2 inline-block">
                      Explore&nbsp;&rarr;
                    </span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
