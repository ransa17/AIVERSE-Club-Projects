// components/landing/PriceChart.tsx
"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function PriceChart({ data }: { data: { date: string; price: number }[] }) {
  const labels = data.map((d) => d.date);
  const prices = data.map((d) => d.price);
  const chartData = {
    labels,
    datasets: [
      {
        data: prices,
        fill: true,
        tension: 0.3,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: { point: { radius: 0 } },
  };
  return <div className="w-full h-16"><Line data={chartData} options={options as any} /></div>;
}
