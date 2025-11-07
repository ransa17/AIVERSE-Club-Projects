// components/landing/Hero.tsx
import React from "react";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="bg-white rounded-lg shadow-md py-12 px-6 mt-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#23272a]">Track prices, never miss a deal</h1>
        <p className="mt-2 text-sm text-gray-600">See price history, set alerts and buy at the right time.</p>
        <div className="mt-6">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
