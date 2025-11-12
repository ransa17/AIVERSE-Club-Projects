"use client";

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
import React from "react";

const priceHistory = [
  { date: "2025-07-01", price: 6999 }, // Smart Watch Z + 4K Camera
  { date: "2025-07-20", price: 2499 }, // Gaming Mouse Ultra
  { date: "2025-08-01", price: 3499 }, // Speaker
  { date: "2025-08-10", price: 5999 }, // Keyboard
  { date: "2025-09-01", price: 4665 }, // Headphones + Smart Watch + Camera
  { date: "2025-09-05", price: 1799 }, // Mouse
  { date: "2025-09-10", price: 2499 }, // Speaker
  { date: "2025-09-15", price: 1999 }, // Headphones
  { date: "2025-09-20", price: 4999 }, // Keyboard
  { date: "2025-10-01", price: 1599 }, // Headphones
  { date: "2025-10-15", price: 3999 }, // Speaker + Camera
  { date: "2025-10-20", price: 2799 }, // Smart Watch
  { date: "2025-10-25", price: 1299 }, // Mouse
  { date: "2025-10-30", price: 3999 }, // Keyboard
];

const productDistribution = [
  { name: "Audio", value: 2 },       // Headphones, Speaker
  { name: "Wearables", value: 1 },   // Smart Watch
  { name: "Peripherals", value: 2 }, // Mouse, Keyboard
  { name: "Cameras", value: 1 },     // Action Camera
];
const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">📊 Price History Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Price Trend (Last 7 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Price Drop Acceleration</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={priceHistory}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="price" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPrice)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Daily Price Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={priceHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="price" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Product Category Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {productDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}