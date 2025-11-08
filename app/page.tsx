// app/page.tsx
import React from "react";
import Link from "next/link";
import { auth } from "../auth";
import LoginView from "../app/LoginView";
import Header from "../components/ui/landing/Header";
import Hero from "../components/ui/landing/Hero";
import ProductCard from "../components/ui/landing/ProductCard";
import Footer from "../components/ui/landing/Footer";

const dummy = [
  {
    title: "Wireless Headphones X",
    image: "headphone.webp",
    store: "Amazon",
    high: 2999,
    low: 1599,
    prices: [
      { date: "2025-09-01", price: 2999 },
      { date: "2025-09-15", price: 1999 },
      { date: "2025-10-01", price: 1599 },
    ],
  },
  {
    title: "Smart Watch Z",
    image: "smart_watch.webp",
    store: "Flipkart",
    high: 4999,
    low: 2799,
    prices: [
      { date: "2025-07-01", price: 4999 },
      { date: "2025-09-01", price: 3499 },
      { date: "2025-10-20", price: 2799 },
    ],
  },
  {
    title: "Bluetooth Speaker Pro",
    image: "speaker.avif",
    store: "Amazon",
    high: 3499,
    low: 1999,
    prices: [
      { date: "2025-08-01", price: 3499 },
      { date: "2025-09-10", price: 2499 },
      { date: "2025-10-15", price: 1999 },
    ],
  },
  {
    title: "Gaming Mouse Ultra",
    image: "mouse.webp",
    store: "Flipkart",
    high: 2499,
    low: 1299,
    prices: [
      { date: "2025-07-20", price: 2499 },
      { date: "2025-09-05", price: 1799 },
      { date: "2025-10-25", price: 1299 },
    ],
  },
  {
    title: "Mechanical Keyboard K100",
    image: "key.jpeg",
    store: "Amazon",
    high: 5999,
    low: 3999,
    prices: [
      { date: "2025-08-10", price: 5999 },
      { date: "2025-09-20", price: 4999 },
      { date: "2025-10-30", price: 3999 },
    ],
  },
  {
    title: "4K Action Camera",
    image: "Camera.jpg",
    store: "Flipkart",
    high: 8999,
    low: 5999,
    prices: [
      { date: "2025-07-01", price: 8999 },
      { date: "2025-09-01", price: 7499 },
      { date: "2025-10-15", price: 5999 },
    ],
  },
];

export default async function Home() {
  const session = await auth();
  const user = session?.user;

 
  if (!user) {
    return <LoginView />;
  }

 
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#f3f4f6] text-[#23272a]">
        <div className="max-w-6xl mx-auto px-6">
          
          <Hero />

          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Top price drops</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dummy.map((p, i) => (
                <ProductCard product={p} key={i} />
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}
