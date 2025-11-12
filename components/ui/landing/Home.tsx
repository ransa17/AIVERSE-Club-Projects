import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        <h1 className="text-5xl font-bold text-indigo-400">Welcome to Price History Tracker</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Our Amazon Product Price History Tracker helps you monitor price drops, analyze trends, and make smarter buying decisions. Built by <span className="text-indigo-300 font-semibold">AIVERSE</span> to empower shoppers and developers with real-time insights and visual analytics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow hover:shadow-indigo-500/30 transition duration-300">
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">Track Price History</h2>
            <p className="text-gray-400 text-sm">
              View historical price data for Amazon products and identify the best time to buy.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow hover:shadow-indigo-500/30 transition duration-300">
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">Visualize Trends</h2>
            <p className="text-gray-400 text-sm">
              Explore interactive charts that reveal price drops, seasonal patterns, and category insights.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl shadow hover:shadow-indigo-500/30 transition duration-300">
            <h2 className="text-xl font-semibold text-indigo-300 mb-2">Discover Smart Deals</h2>
            <p className="text-gray-400 text-sm">
              Find curated deals based on historical pricing and smart recommendations tailored to your interests.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-8">
          <Link href="/Deals" className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2 rounded-md transition">
            Explore Deals
          </Link>
          <Link href="/Dashboard" className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded-md transition">
            View Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}