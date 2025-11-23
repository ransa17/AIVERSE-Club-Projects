// components/ui/landing/SearchBar.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { extractProductIdFromUrl } from "@/lib/extractProductId";

interface SearchBarProps {
  onSearch?: (q: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [q, setQ] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmed = q.trim();
    if (!trimmed) return;

    // optional callback for parent
    onSearch?.(trimmed);

    // 1) Try to extract Amazon product ID (ASIN) if URL
    const productId = extractProductIdFromUrl(trimmed);

    if (productId) {
      // Go to product-specific dashboard
      router.push(`/product/${productId}`);
    } else {
      // Fallback: general dashboard search
      router.push(`/Dashboard?query=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-3 w-full">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Paste product URL or search product name..."
        className="flex-1 border-2 border-purple-600 rounded-lg p-3 focus:ring-2 focus:ring-[#8e44ad] outline-none bg-white"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 rounded-lg bg-[#ff6f00] text-white font-medium"
      >
        Search
      </button>
    </div>
  );
}
