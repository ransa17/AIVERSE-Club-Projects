// components/landing/ProductCard.tsx
import React from "react";
import Image from "next/image";
import PriceChart from "./PriceChart";

type Product = {
  title: string;
  image: string;
  store?: string;
  high: number;
  low: number;
  prices: { date: string; price: number }[];
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="bg-white rounded-xl shadow p-4 flex gap-4 items-center">
      <div className="relative w-20 h-20 shrink-0">
        <Image 
          src={`/${product.image}`} 
          alt={product.title} 
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm text-[#23272a]">{product.title}</h3>
        <p className="text-xs text-gray-500">{product.store}</p>
        <div className="flex items-center gap-6 mt-3">
          <div>
            <p className="text-xs">Highest</p>
            <p className="font-semibold">₹{product.high}</p>
          </div>
          <div>
            <p className="text-xs">Lowest</p>
            <p className="font-semibold text-emerald-600">₹{product.low}</p>
          </div>
          <div className="w-30">
            <PriceChart data={product.prices} />
          </div>
        </div>
      </div>
    </article>
  );
}
