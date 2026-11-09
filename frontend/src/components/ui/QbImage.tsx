import Image from "next/image";

type Tone = "magenta" | "black" | "gold";

type QbImageProps = {
  src?: string;
  alt: string;
  /** Caption shown on the branded placeholder when no src is set. */
  label?: string;
  tone?: Tone;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

const toneBg: Record<Tone, string> = {
  magenta:
    "bg-[radial-gradient(120%_120%_at_50%_0%,#a8174e_0%,#7a0f38_42%,#2b0714_100%)]",
  black:
    "bg-[radial-gradient(120%_120%_at_50%_0%,#2a2a2a_0%,#141414_45%,#0a0a0a_100%)]",
  gold:
    "bg-[radial-gradient(120%_120%_at_50%_0%,#c9a961_0%,#9a7d3e_48%,#3a2f17_100%)]",
};

/**
 * Renders real photography when `src` is provided; otherwise an on-brand
 * placeholder (so every section is production-shaped and images drop in later).
 * The parent must be `relative` and define the aspect ratio.
 */
export function QbImage({
  src,
  alt,
  label,
  tone = "magenta",
  sizes = "(max-width: 768px) 100vw, 33vw",
  priority,
  className = "",
}: QbImageProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      aria-label={alt}
      role="img"
      className={`flex h-full w-full flex-col items-center justify-center overflow-hidden ${toneBg[tone]} ${className}`}
    >
      {/* crown motif */}
      <svg
        viewBox="0 0 48 32"
        className="h-7 w-auto text-qb-gold/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      >
        <path d="M3 28 L7 9 L17 20 L24 5 L31 20 L41 9 L45 28 Z" />
      </svg>
      {label ? (
        <span className="mt-3 px-4 text-center font-display text-lg font-light italic text-qb-cream/80">
          {label}
        </span>
      ) : null}
      <span className="mt-2 text-[9px] uppercase tracking-[0.3em] text-qb-cream/35">
        Queen&nbsp;Bee
      </span>
    </div>
  );
}
