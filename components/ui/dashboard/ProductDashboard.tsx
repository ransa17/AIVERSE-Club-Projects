"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import type { ProductDashboardData } from "@/types/product-dashboard";

interface ProductDashboardProps {
  data: ProductDashboardData;
}

export default function ProductDashboard({ data }: ProductDashboardProps) {
  const {
    title,
    imageUrl,
    brand,
    category,
    currentPrice,
    mrp,
    discountPercent,
    ratingOutOf10,
    totalRatings,
    priceHistory,
    historyStats,
    recentDrops,
    variants,
    details,
    recommendation,
  } = data;

  const pieData = [
    {
      name: "Lowest",
      value: historyStats?.lowest ?? currentPrice,
    },
    {
      name: "Average",
      value: historyStats?.average ?? currentPrice,
    },
    {
      name: "Highest",
      value: historyStats?.highest ?? currentPrice,
    },
  ];

  const PIE_COLORS = ["#22c55e", "#f97316", "#ef4444"];

  return (
    <div className="text-[#23272a]">
      {/* Top section: product summary */}
      <div className="grid gap-6 md:grid-cols-[2fr,1.2fr] mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex gap-4">
          {imageUrl && (
            <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-bold text-[var(--primary)]">
              {title}
            </h1>
            <p className="text-sm text-gray-600">
              {brand} • {category}
            </p>

            <div className="flex flex-wrap items-baseline gap-3 mt-2">
              <span className="text-2xl font-bold text-[#16a34a]">
                ₹{currentPrice.toLocaleString("en-IN")}
              </span>
              {mrp && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{mrp.toLocaleString("en-IN")}
                </span>
              )}
              {discountPercent != null && (
                <span className="text-sm font-semibold text-[#f97316]">
                  {discountPercent}% off
                </span>
              )}
            </div>

            {ratingOutOf10 != null && (
              <p className="text-sm text-gray-600 mt-1">
                Rating:{" "}
                <span className="font-semibold">
                  {(ratingOutOf10 / 2).toFixed(1)}★ / 5
                </span>{" "}
                ({totalRatings?.toLocaleString("en-IN")} ratings)
              </p>
            )}
          </div>
        </div>

        {/* Recommendation card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Smart suggestion
            </p>
            <h2 className="text-lg font-bold mt-1 mb-2">
              Our take:{" "}
              <span className="text-[var(--primary)]">
                {recommendation.suggestedAction === "YES" && "Good time to buy ✅"}
                {recommendation.suggestedAction === "OKAY" && "Decent to buy 🙂"}
                {recommendation.suggestedAction === "WAIT" && "Better to wait ⏳"}
                {recommendation.suggestedAction === "SKIP" && "Skip for now ❌"}
              </span>
            </h2>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {recommendation.explanation}
            </p>
          </div>

          {recommendation.expectedFluctuationRangePercent && (
            <p className="text-xs text-gray-500 mt-3">
              Expected fluctuation:{" "}
              {recommendation.expectedFluctuationRangePercent.min}% to{" "}
              {recommendation.expectedFluctuationRangePercent.max}% in near term.
            </p>
          )}
        </div>
      </div>

      {/* Charts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Line chart: price history */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">
            Price trend over time
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={priceHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#f97316"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Area chart: emphasize drops */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">
            Offer vs regular price
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart
              data={priceHistory.map((p) => ({
                ...p,
                offerPrice: p.isOfferPrice ? p.price : null,
              }))}
            >
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#f97316"
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bar chart: recent price drops */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">
            Recent price drops
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={recentDrops}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="dropPercent" fill="#60a5fa" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart: lowest vs avg vs highest */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold mb-4">
            Price level comparison
          </h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={PIE_COLORS[index % PIE_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom: variants + details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {variants.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Variants</h2>
            <ul className="space-y-3 text-sm">
              {variants.map((variant) => (
                <li
                  key={variant.id}
                  className="flex justify-between items-start border-b border-gray-100 pb-2 last:border-0"
                >
                  <div>
                    <p className="font-medium">{variant.title}</p>
                    {variant.tags && (
                      <p className="text-xs text-gray-500 mt-1">
                        {variant.tags.join(" • ")}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ₹{variant.offerPrice.toLocaleString("en-IN")}
                    </p>
                    <a
                      href={variant.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[var(--primary)] hover:underline"
                    >
                      View on store
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {details.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Key details</h2>
            <dl className="space-y-2 text-sm">
              {details.map((d) => (
                <div key={d.label} className="flex justify-between gap-4">
                  <dt className="text-gray-500">{d.label}</dt>
                  <dd className="font-medium text-right">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}
      </div>
    </div> 
  );
}
