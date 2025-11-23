// types/product-dashboard.ts

export interface ProductDashboardData {
  id: string;                // internal product id
  sourceUrl: string;         // original marketplace URL (e.g. Amazon)
  lastUpdated: string;       // ISO date-time, e.g. "2025-11-21T15:41:00Z"

  // Basic product info
  title: string;
  imageUrl: string;
  storeName: string;         // "amazon.in"
  storeProductCode: string;  // e.g. "B09J2T124D"
  brand: string;
  category: string;
  modelNumber?: string;
  dimensions?: string;
  countryOfOrigin?: string;

  // Ratings
  ratingOutOf10?: number;    // e.g. 8.6
  totalRatings?: number;     // e.g. 22287

  // Pricing summary
  currentPrice: number;
  mrp?: number;
  savings?: number;
  discountPercent?: number;  // e.g. 68.02
  highestPrice?: number;
  lowestPrice?: number;
  averagePrice?: number;

  // Buy recommendation
  recommendation: {
    // one of: "SKIP" | "WAIT" | "OKAY" | "YES"
    suggestedAction: "SKIP" | "WAIT" | "OKAY" | "YES";
    probabilityPriceWillIncrease?: number;   // e.g. 64.63
    expectedFluctuationRangePercent?: { min: number; max: number }; // e.g. {min: 7, max: 11}
    explanation: string;      // short text about why this recommendation
  };

  // Price history chart
  priceHistory: Array<{
    date: string;            // ISO date
    price: number;
    isOfferPrice?: boolean;
  }>;

  // Aggregates for currently selected window (can be recalculated client-side)
  historyStats?: {
    lowest?: number;
    average?: number;
    highest?: number;
  };

  // Recent price drops (timeline)
  recentDrops: Array<{
    date: string;            // ISO date
    oldPrice: number;
    newPrice: number;
    dropPercent: number;
  }>;

  // Variants list
  variants: Array<{
    id: string;
    title: string;
    imageUrl?: string;
    offerPrice: number;
    storeUrl: string;
    tags?: string[];         // e.g. ["3 Jars", "2 Blades", "Gold"]
  }>;

  // Product details section
  details: Array<{
    label: string;           // e.g. "Product Name"
    value: string;
  }>;

  // Feature bullets
  features: string[];

  // Extra links
  buyNowUrl: string;
  reviewPageUrl?: string;
}
