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
  { date: "Nov 1", price: 1999 },
  { date: "Nov 2", price: 1899 },
  { date: "Nov 3", price: 1799 },
  { date: "Nov 4", price: 1699 },
  { date: "Nov 5", price: 1599 },
  { date: "Nov 6", price: 1499 },
  { date: "Nov 7", price: 1399 },
];

const productDistribution = [
  { name: "Electronics", value: 400 },
  { name: "Home", value: 300 },
  { name: "Fashion", value: 300 },
  { name: "Books", value: 200 },
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