import React from "react";

const mockDeals = [
  {
    title: "Amazon Price Drop Alerts",
    description: "Get notified when your favorite products hit their lowest price. Never overpay again.",
    link: "#",
    tag: "Smart Alerts",
  },
  {
    title: "Browser Extension for Tracking",
    description: "Install our Chrome extension to view price history directly on Amazon product pages.",
    link: "#",
    tag: "Extension",
  },
  {
    title: "Top Deals This Week",
    description: "Explore trending discounts based on historical price drops across categories like electronics and fashion.",
    link: "#",
    tag: "Trending",
  },
  {
    title: "Student Discount Finder",
    description: "Unlock hidden student deals on Amazon with our curated tracker.",
    link: "#",
    tag: "Student",
  },
  {
    title: "Compare Prices Across Stores",
    description: "See how Amazon prices stack up against Flipkart and others using our dashboard insights.",
    link: "#",
    tag: "Comparison",
  },
  {
    title: "Historical Price Insights",
    description: "Analyze past pricing trends to predict future drops and seasonal deals.",
    link: "#",
    tag: "Analytics",
  },
];

export default function Deals() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#23272a] px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[var(--primary)]">
          Smart Shopping Deals & Tools
        </h1>

        <p className="text-lg text-gray-600 text-center">
          Discover tools, extensions, and curated offers to help you shop smarter with Amazon price history insights.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockDeals.map((deal, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-xl 
                p-6 
                shadow-sm 
                border border-gray-200
                hover:shadow-[var(--primary)]/40 
                hover:shadow-lg 
                transition 
                duration-300
              "
            >
              <span className="text-sm text-[var(--primary)] font-medium uppercase">
                {deal.tag}
              </span>

              <h2 className="text-xl font-semibold mt-2 text-[#23272a]">
                {deal.title}
              </h2>

              <p className="text-gray-600 mt-2">
                {deal.description}
              </p>

              <a
                href={deal.link}
                className="inline-block mt-4 text-[var(--primary)] hover:underline text-sm font-medium"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
