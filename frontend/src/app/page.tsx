export default function Home() {
  return (
    <main className="min-h-screen bg-qb-cream">
      <section className="qb-container py-20">
        <p className="qb-eyebrow">— Design System Preview —</p>
        <h1 className="qb-h1 mt-4">
          Queen Bee
          <span className="block italic text-qb-magenta">brand tokens</span>
        </h1>

        {/* Color swatches */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          <Swatch name="qb-black" className="bg-qb-black text-qb-cream" />
          <Swatch name="qb-magenta" className="bg-qb-magenta text-qb-cream" />
          <Swatch name="qb-gold" className="bg-qb-gold text-qb-black" />
          <Swatch
            name="qb-cream"
            className="bg-qb-cream text-qb-ink border border-qb-line"
          />
          <Swatch name="qb-ink" className="bg-qb-ink text-qb-cream" />
          <Swatch
            name="qb-magenta-deep"
            className="bg-qb-magenta-deep text-qb-cream"
          />
          <Swatch name="qb-gold-light" className="bg-qb-gold-light text-qb-black" />
          <Swatch name="qb-bone" className="bg-qb-bone text-qb-ink" />
        </div>

        {/* Typography */}
        <div className="qb-divider-wide mt-16" />
        <div className="mt-12">
          <p className="qb-eyebrow-gold">— Typography —</p>

          <div className="mt-8 space-y-10">
            <div>
              <p className="qb-eyebrow">Display · Cormorant Garamond</p>
              <p className="qb-h1 mt-2">
                Wear Your <span className="italic text-qb-magenta">Crown</span>
              </p>
            </div>

            <div>
              <p className="qb-eyebrow">H2 · Cormorant Garamond</p>
              <h2 className="qb-h2 mt-2">The Festive Collection</h2>
            </div>

            <div>
              <p className="qb-eyebrow">Body · Inter</p>
              <p className="mt-2 max-w-prose text-base leading-relaxed text-qb-ink">
                Queen Bee is a curated clothing label born in Kathmandu — for the
                woman who knows her presence is the room. Each piece is locally
                crafted, made in small batches, and finished with intention.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="qb-divider-wide mt-16" />
        <div className="mt-12">
          <p className="qb-eyebrow-gold">— Buttons —</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <button className="qb-btn-primary">Primary CTA</button>
            <button className="qb-btn-secondary">Secondary CTA</button>
            <button className="qb-btn-dark">Dark CTA</button>
            <button className="qb-btn-ghost">Ghost CTA</button>
          </div>
        </div>

        {/* Tags */}
        <div className="qb-divider-wide mt-16" />
        <div className="mt-12">
          <p className="qb-eyebrow-gold">— Tags —</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="qb-tag-new">New</span>
            <span className="qb-tag-sale">-20%</span>
            <span className="qb-tag-soldout">Sold Out</span>
          </div>
        </div>

        {/* Divider */}
        <div className="qb-divider-wide mt-16" />
        <div className="mt-12 flex flex-col items-center">
          <p className="qb-eyebrow-gold">— Gold Divider —</p>
          <div className="qb-divider mt-6" />
        </div>
      </section>
    </main>
  );
}

function Swatch({ name, className }: { name: string; className: string }) {
  return (
    <div className={`flex h-24 items-end p-3 text-xs tracking-wider ${className}`}>
      {name}
    </div>
  );
}