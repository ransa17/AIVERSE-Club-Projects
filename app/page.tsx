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
    image: "/images/headphones.jpg",
    store: "Amazon",
    high: 2999,
    low: 1599,
    prices: [
      { date: "2025-09-01", price: 2999 },
      { date: "2025-09-15", price: 1999 },
      { date: "2025-10-01", price: 1599 }
    ]
  },
  {
    title: "Smart Watch Z",
    image: "/images/watch.jpg",
    store: "Flipkart",
    high: 4999,
    low: 2799,
    prices: [
      { date: "2025-07-01", price: 4999 },
      { date: "2025-09-01", price: 3499 },
      { date: "2025-10-20", price: 2799 }
    ]
  }
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
