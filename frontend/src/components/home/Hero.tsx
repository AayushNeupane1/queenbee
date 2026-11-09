import Link from "next/link";
import Image from "next/image";

/**
 * Hero — full-bleed landing section.
 * Entrance + scroll animations are pure CSS (see globals.css: qb-rise / qb-bounce-y),
 * so there is no client-side JS dependency.
 */
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-7rem)] items-center overflow-hidden bg-qb-black">
      {/* ---------- BACKGROUND LAYERS ---------- */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-qb-black via-qb-black to-[#140309]" />
      <div
        className="absolute inset-0 -z-20 opacity-50"
        style={{
          background:
            "radial-gradient(58% 48% at 50% 12%, rgba(168,23,78,0.28), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="qb-rise pointer-events-none absolute -bottom-28 -right-24 -z-10 select-none"
        style={{ animationDelay: "200ms", animationDuration: "1.6s" }}
      >
        <Image src="/queen-bee-logo.png" alt="" width={640} height={640} />
      </div>

      {/* ---------- CONTENT ---------- */}
      <div className="qb-container text-center">
        <p className="qb-rise qb-eyebrow-cream" style={{ animationDelay: "100ms" }}>
          The Festive Edit &middot; 2026
        </p>

        <h1
          className="qb-rise mx-auto mt-5 max-w-4xl font-display text-6xl font-light leading-[1.02] text-qb-cream md:text-7xl lg:text-[5.5rem]"
          style={{ animationDelay: "220ms" }}
        >
          Wear Your <span className="italic text-qb-gold">Crown</span>
        </h1>

        <div className="qb-rise qb-divider mt-8" style={{ animationDelay: "340ms" }} />

        <p
          className="qb-rise mx-auto mt-8 max-w-xl text-sm leading-relaxed text-qb-bone/70 md:text-base"
          style={{ animationDelay: "460ms" }}
        >
          Curated clothing born in Kathmandu — crafted in small batches for the
          woman who knows her presence is the room.
        </p>

        <div
          className="qb-rise mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "580ms" }}
        >
          <Link href="/shop" className="qb-btn-primary">
            Shop the Collection
          </Link>
          <Link href="/new-arrivals" className="qb-btn-secondary">
            Explore New Arrivals
          </Link>
        </div>
      </div>

      {/* ---------- SCROLL INDICATOR ---------- */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
        <div
          className="qb-rise flex flex-col items-center gap-2"
          style={{ animationDelay: "1200ms" }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-qb-bone/50">
            Scroll
          </span>
          <span className="qb-bounce-y block h-8 w-px bg-gradient-to-b from-qb-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
