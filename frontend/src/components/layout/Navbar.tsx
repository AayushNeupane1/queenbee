"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Solidify the header once the user scrolls past the hero top edge.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-qb-line bg-qb-cream/95 shadow-[0_1px_24px_rgba(10,10,10,0.05)] backdrop-blur"
          : "border-b border-transparent bg-qb-cream"
      }`}
    >
      {/* ---------- ANNOUNCEMENT BAR ---------- */}
      <div className="bg-qb-black text-center">
        <p className="qb-container py-2 text-[10px] font-medium uppercase tracking-[0.25em] text-qb-gold-light">
          Complimentary delivery across the Kathmandu Valley
          <span className="mx-2 text-qb-gold-deep">&middot;</span>
          <span className="text-qb-cream">Wear Your Crown</span>
        </p>
      </div>

      {/* ---------- MAIN BAR ---------- */}
      <nav className="qb-container">
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 md:h-20 md:grid-cols-3">
          {/* Left — desktop links / mobile hamburger */}
          <div className="flex items-center">
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="-ml-1 inline-flex h-10 w-10 items-center justify-center text-qb-ink md:hidden"
            >
              <MenuIcon />
            </button>

            <ul className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="qb-nav-link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center — logo */}
          <div className="flex justify-center">
            <Link href="/" aria-label="Queen Bee — home" className="inline-flex items-center">
              <Image
                src="/queen-bee-logo.png"
                alt="Queen Bee"
                width={252}
                height={256}
                priority
                className="h-11 w-auto md:h-14"
              />
            </Link>
          </div>

          {/* Right — icons */}
          <div className="flex items-center justify-end gap-1 md:gap-2">
            <IconButton label="Search" className="hidden sm:inline-flex">
              <SearchIcon />
            </IconButton>
            <IconButton label="Wishlist" className="hidden sm:inline-flex">
              <HeartIcon />
            </IconButton>
            <IconButton label="Account" className="hidden sm:inline-flex">
              <UserIcon />
            </IconButton>
            <IconButton label="Cart">
              <div className="relative">
                <BagIcon />
                <span className="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-qb-magenta px-1 text-[9px] font-semibold text-qb-cream">
                  0
                </span>
              </div>
            </IconButton>
          </div>
        </div>
      </nav>

      {/* ---------- MOBILE MENU ---------- */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        {/* backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-qb-black/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* panel */}
        <div
          className={`absolute left-0 top-0 h-full w-[82%] max-w-sm bg-qb-cream shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-qb-line px-6 py-4">
            <Image
              src="/queen-bee-logo.png"
              alt="Queen Bee"
              width={252}
              height={256}
              className="h-9 w-auto"
            />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-qb-ink"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-qb-line/60">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 font-display text-2xl font-light text-qb-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex items-center gap-6 px-6 text-qb-ink">
            <button className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
              <SearchIcon /> Search
            </button>
            <button className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
              <HeartIcon /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

/* ---------- SMALL PARTS ---------- */

function IconButton({
  children,
  label,
  className = "",
}: {
  children: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`inline-flex h-10 w-10 items-center justify-center text-qb-ink transition-colors hover:text-qb-magenta ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------- ICONS (inline, no dependency) ---------- */

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SearchIcon = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const HeartIcon = () => (
  <svg {...iconProps}>
    <path d="M12 21s-7-4.35-9.5-8.5C1 9.5 2.5 6 6 6c2 0 3.2 1.2 4 2.3C10.8 7.2 12 6 14 6c3.5 0 5 3.5 3.5 6.5C19 16.65 12 21 12 21z" />
  </svg>
);

const UserIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c1.2-3.5 4-5 7-5s5.8 1.5 7 5" />
  </svg>
);

const BagIcon = () => (
  <svg {...iconProps}>
    <path d="M6 8h12l-1 12H7L6 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

const MenuIcon = () => (
  <svg {...iconProps}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const CloseIcon = () => (
  <svg {...iconProps}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
