import React from "react";
import Header from "@/components/ui/landing/Header";
import Footer from "@/components/ui/landing/Footer";
import ProductDashboard from "@/components/ui/dashboard/ProductDashboard"; // note: ui/dashboard
import type { ProductDashboardData } from "@/types/product-dashboard";

type ProductPageProps = {
  params: { id: string };
};

// 🔹 1) DEMO MOCK DATA: id EXACTLY "B09J2T124D"
const MOCK_DASHBOARD_DATA: Record<string, ProductDashboardData> = {
  B09J2T124D: {
    id: "B09J2T124D",
    sourceUrl: "https://www.amazon.in/dp/B09J2T124D",
    lastUpdated: "2025-11-23T10:00:00Z",

    title: "Nutripro Juicer Mixer Grinder 500W (Demo)",
    imageUrl: "/images/headphones.jpg", // sirf demo
    storeName: "amazon.in",
    storeProductCode: "B09J2T124D",
    brand: "Nutripro",
    category: "Juicer Mixer Grinder",
    modelNumber: "NP-500",
    dimensions: "30 x 20 x 25 cm",
    countryOfOrigin: "India",
    ratingOutOf10: 8.6,
    totalRatings: 1432,

    currentPrice: 2499,
    mrp: 3999,
    savings: 1500,
    discountPercent: 37,
    highestPrice: 3999,
    lowestPrice: 2299,
    averagePrice: 2799,

    recommendation: {
      suggestedAction: "WAIT",
      probabilityPriceWillIncrease: 0.3,
      expectedFluctuationRangePercent: { min: -10, max: 5 },
      explanation:
        "Current price is below average but not at the historical lowest. You can wait for a better deal during upcoming sale events.",
    },

    priceHistory: [
      { date: "2025-10-01", price: 3999 },
      { date: "2025-10-10", price: 3499, isOfferPrice: true },
      { date: "2025-10-20", price: 2999 },
      { date: "2025-11-01", price: 2699, isOfferPrice: true },
      { date: "2025-11-10", price: 2599 },
      { date: "2025-11-20", price: 2499, isOfferPrice: true },
    ],

    historyStats: {
      lowest: 2299,
      average: 2799,
      highest: 3999,
    },

    recentDrops: [
      { date: "2025-11-01", oldPrice: 2999, newPrice: 2699, dropPercent: 10 },
      { date: "2025-11-10", oldPrice: 2699, newPrice: 2599, dropPercent: 3.7 },
      { date: "2025-11-20", oldPrice: 2599, newPrice: 2499, dropPercent: 3.8 },
    ],

    variants: [
      {
        id: "B09J2T124D-3JAR",
        title: "Nutripro 500W (3 Jars)",
        offerPrice: 2499,
        storeUrl: "https://www.amazon.in/dp/B09J2T124D",
        tags: ["3 Jars", "500W", "White-Orange"],
      },
      {
        id: "B09J2T124D-4JAR",
        title: "Nutripro 500W (4 Jars Premium)",
        offerPrice: 2999,
        storeUrl: "https://www.amazon.in/dp/B09J2T124D",
        tags: ["4 Jars", "500W", "Premium"],
      },
    ],

    details: [
      { label: "Power", value: "500 Watts" },
      { label: "Material", value: "ABS Plastic, Stainless Steel" },
      { label: "Color", value: "White & Orange" },
      { label: "Warranty", value: "2 years on product" },
    ],

    features: [
      "500W powerful motor suitable for grinding and juicing.",
      "Includes multiple jars for different kitchen tasks.",
      "Overload protection and anti-slip feet for safety.",
      "Compact design suitable for modern kitchens.",
    ],

    buyNowUrl: "https://www.amazon.in/dp/B09J2T124D",
    reviewPageUrl: "https://www.amazon.in/product-reviews/B09J2T124D",
  },
};

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  const data = MOCK_DASHBOARD_DATA[id]; // yahi se decide hota hai charts dikhenge ya fallback

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f3f4f6] text-[#23272a] px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {data ? (
            <ProductDashboard data={data} />
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-2">
                Product not in mock data
              </h1>
              <p className="text-sm text-gray-600">
                You opened product with ID: <span className="font-mono">{id}</span>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Right now we only have demo data for a single hard-coded product
                (B09J2T124D). Later this will be replaced with a real backend API.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
