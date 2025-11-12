// components/landing/Header.tsx
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#23272a]">PriceHistory</Link>
        <nav className="flex items-center gap-4">
          <Link href="/Home" className="text-sm">Home</Link>
          <Link href="/Deals" className="text-sm">Deals</Link>
          <Link href="/Extension" className="text-sm">Extension</Link>
          <Link href="/Dashboard" className="text-sm">Dashboard</Link> {/* This links to Dashboard */}
        </nav>
      </div>
    </header>
  );
}
