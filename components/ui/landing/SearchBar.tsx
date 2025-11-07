// components/landing/SearchBar.tsx
'use client';
import React, { useState } from "react";

export default function SearchBar({ onSearch }: { onSearch?: (q: string) => void }) {
  const [q, setQ] = useState("");
  return (
    <div className="flex gap-3 w-full">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Paste product URL or search product name..."
        className="flex-1 border-2 border-purple-600 rounded-lg p-3 focus:ring-2 focus:ring-[#8e44ad] outline-none bg-white"
      />
      <button
        onClick={() => onSearch?.(q)}
        className="px-4 py-2 rounded-lg bg-[#ff6f00] text-white font-medium"
      >
        Search
      </button>
    </div>
  );
}
