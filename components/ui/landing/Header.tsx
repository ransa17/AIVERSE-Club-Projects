// components/landing/Header.tsx
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#23272a]">PriceHistory</Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm">Deals</Link>
          <Link href="#" className="text-sm">Extension</Link>
          <Link href="#" className="text-sm">App</Link>
        </nav>
      </div>
    </header>
  );
}
