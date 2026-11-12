import type { Category, Product } from "@/lib/types";

// Mock data for the homepage. Shaped to the domain model; replaced by API calls later.
export const categories: Category[] = [
  { id: "c1", name: "New Arrivals",       slug: "new-arrivals",       tagline: "Fresh off the atelier", itemCount: 24 },
  { id: "c2", name: "Dresses",            slug: "dresses",            tagline: "For every entrance",    itemCount: 38 },
  { id: "c3", name: "Kurtis & Ethnic",    slug: "kurtis-ethnic",      tagline: "Heritage, reimagined",  itemCount: 46 },
  { id: "c4", name: "Co-ord Sets",        slug: "co-ord-sets",        tagline: "Effortless, together",  itemCount: 19 },
  { id: "c5", name: "Tops & Blouses",     slug: "tops-blouses",       tagline: "Everyday essentials",   itemCount: 52 },
  { id: "c6", name: "Bridal & Occasion",  slug: "bridal-occasion",    tagline: "Your crowning moment",  itemCount: 15 },
];

export const bestSellers: Product[] = [
  { id: "p1", name: "Rani Silk Wrap Dress",       slug: "rani-silk-wrap-dress",       category: "Dresses",           categorySlug: "dresses",         price: 6800,  sizes: ["XS", "S", "M", "L"],        badge: "bestseller" },
  { id: "p2", name: "Maya Embroidered Kurti Set", slug: "maya-embroidered-kurti-set", category: "Kurtis & Ethnic",   categorySlug: "kurtis-ethnic",   price: 5200,  salePrice: 4160, sizes: ["S", "M", "L", "XL"], badge: "sale" },
  { id: "p3", name: "Tara Linen Co-ord",          slug: "tara-linen-co-ord",          category: "Co-ord Sets",       categorySlug: "co-ord-sets",     price: 4500,  sizes: ["S", "M", "L"],              badge: "new" },
  { id: "p4", name: "Sita Velvet Occasion Gown",  slug: "sita-velvet-occasion-gown",  category: "Bridal & Occasion", categorySlug: "bridal-occasion", price: 12500, sizes: ["S", "M", "L", "XL", "XXL"], badge: "bestseller" },
];
