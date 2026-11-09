import type { Category } from "@/lib/types";

// Mock data for the homepage. Shaped to the domain model; replaced by API calls later.
export const categories: Category[] = [
  { id: "c1", name: "New Arrivals",       slug: "new-arrivals",       tagline: "Fresh off the atelier", itemCount: 24 },
  { id: "c2", name: "Dresses",            slug: "dresses",            tagline: "For every entrance",    itemCount: 38 },
  { id: "c3", name: "Kurtis & Ethnic",    slug: "kurtis-ethnic",      tagline: "Heritage, reimagined",  itemCount: 46 },
  { id: "c4", name: "Co-ord Sets",        slug: "co-ord-sets",        tagline: "Effortless, together",  itemCount: 19 },
  { id: "c5", name: "Tops & Blouses",     slug: "tops-blouses",       tagline: "Everyday essentials",   itemCount: 52 },
  { id: "c6", name: "Bridal & Occasion",  slug: "bridal-occasion",    tagline: "Your crowning moment",  itemCount: 15 },
];
