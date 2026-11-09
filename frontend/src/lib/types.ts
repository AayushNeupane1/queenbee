// Domain types for the Queen Bee storefront.
// These mirror the backend data model (Product, Category, Offer, Review, FAQ)
// so UI built against mock data swaps to the real API with no shape changes.

export type Badge = "new" | "sale" | "bestseller";
export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export interface Category {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  itemCount: number;
  image?: string; // undefined -> branded placeholder until real photography lands
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  price: number; // NPR
  salePrice?: number;
  sizes: Size[];
  badge?: Badge;
  image?: string;
  hoverImage?: string;
}
