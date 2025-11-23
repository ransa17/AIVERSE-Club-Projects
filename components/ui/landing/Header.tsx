// components/ui/landing/Header.tsx  (or components/landing/Header.tsx)
import Link from "next/link";
import React from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/Deals", label: "Deals" },
  { href: "/Dashboard", label: "Dashboard" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold text-[#23272a]">
          PriceHistory
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[var(--primary)] transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
