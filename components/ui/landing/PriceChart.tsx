"use client";
import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Plugin
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

interface PriceChartProps {
  data: { date: string; price: number }[];
}

export default function PriceChart({ data }: PriceChartProps) {
  const prices = data.map((d) => d.price);
  const labels = data.map((d) => d.date);

  const startPrice = prices[0] || 0;
  const endPrice = prices[prices.length - 1] || 0;
  
  const isPositive = endPrice >= startPrice;
  
  const lineColor = isPositive ? "#dc2626" : "#16a34a"; 

  const arrowPlugin: Plugin<"line"> = {
    id: "arrowPlugin",
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      const meta = chart.getDatasetMeta(0);
      const dynamicColor = chart.data.datasets[0].borderColor as string;

      if (meta.data.length < 2) return;

      const lastPoint = meta.data[meta.data.length - 1];
      const secondLastPoint = meta.data[meta.data.length - 2];

      const { x: x1, y: y1 } = lastPoint.getProps(["x", "y"], true);
      const { x: x2, y: y2 } = secondLastPoint.getProps(["x", "y"], true);

      const angle = Math.atan2(y1 - y2, x1 - x2);
      const arrowLength = 10;
      
      ctx.save();
      ctx.translate(x1, y1);
      ctx.rotate(angle);

      ctx.beginPath();
      ctx.moveTo(-arrowLength, -arrowLength + 3); 
      ctx.lineTo(0, 0); 
      ctx.lineTo(-arrowLength, arrowLength - 3); 
      
      ctx.lineWidth = 3;
      ctx.strokeStyle = dynamicColor;
      ctx.shadowColor = dynamicColor;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 10;
      ctx.stroke();
      
      ctx.restore();
    },
  };

  const chartData = useMemo(() => {
    return {
      labels,
      datasets: [
        {
          data: prices,
          fill: false,
          borderColor: lineColor,
          borderWidth: 3,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 0,
          borderCapStyle: "round" as const,
          borderJoinStyle: "round" as const,
          shadowColor: lineColor,
          shadowBlur: 10,
        },
      ],
    };
  }, [prices, labels, lineColor]);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
  
      padding: { right: 10, top: 5, bottom: 5, left: 20 }
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { 
        display: false, 
        min: minPrice - (priceRange * 0.5), 
        max: maxPrice * 1.02,
      },
    },
    elements: {
      line: { tension: 0 }
    }
  };

  return (
    <div className="w-16 h-12 flex justify-end items-start"> 
      <Line 
        data={chartData} 
        options={options} 
        plugins={[arrowPlugin]} 
      />
    </div>
  );
}