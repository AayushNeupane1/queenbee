import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { QbImage } from "@/components/ui/QbImage";

type Tone = "magenta" | "black" | "gold";

type ProductCardProps = {
  product: Product;
  /** Placeholder tone used until real photography is set. */
  tone?: Tone;
  /** Responsive `sizes` hint for the image, depends on the grid it sits in. */
  sizes?: string;
};

function BadgeTag({ product }: { product: Product }) {
  if (!product.badge) return null;

  if (product.badge === "new") {
    return <span className="qb-tag-new">New</span>;
  }

  if (product.badge === "sale") {
    const sale = product.salePrice;
    const percentOff =
      sale !== undefined ? Math.round((1 - sale / product.price) * 100) : 0;
    return (
      <span className="qb-tag-sale">
        {percentOff > 0 ? `-${percentOff}%` : "Sale"}
      </span>
    );
  }

  return <span className="qb-tag bg-qb-black text-qb-gold">Best Seller</span>;
}

/**
 * Product card — reused on the homepage, shop listing and related products.
 * The whole card is one link. On hover the garment moves toward the viewer,
 * the second photo fades in (when provided) and the available sizes rise.
 */
export function ProductCard({
  product,
  tone = "black",
  sizes = "(max-width: 1024px) 50vw, 25vw",
}: ProductCardProps) {
  const sale = product.salePrice;
  const onSale = sale !== undefined && sale < product.price;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      {/* ---------- IMAGE ---------- */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-qb bg-qb-bone">
        <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
          <QbImage
            src={product.image}
            alt={product.name}
            label={product.category}
            tone={tone}
            sizes={sizes}
          />
        </div>

        {product.hoverImage ? (
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <QbImage src={product.hoverImage} alt="" sizes={sizes} />
          </div>
        ) : null}

        <div className="absolute left-3 top-3">
          <BadgeTag product={product} />
        </div>

        {/* sizes rise on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-qb-cream/95 px-3 py-2.5 text-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-qb-ink">
            {product.sizes.join(" · ")}
          </p>
        </div>
      </div>

      {/* ---------- DETAILS ---------- */}
      <div className="mt-4">
        <p className="qb-eyebrow">{product.category}</p>
        <h3 className="mt-1 font-display text-xl leading-snug text-qb-ink transition-colors duration-300 group-hover:text-qb-magenta">
          {product.name}
        </h3>
        <p className="mt-1.5 text-sm">
          {onSale ? (
            <>
              <span className="font-medium text-qb-magenta">
                {formatPrice(sale)}
              </span>
              <span className="ml-2 text-qb-muted line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="font-medium text-qb-ink">
              {formatPrice(product.price)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
