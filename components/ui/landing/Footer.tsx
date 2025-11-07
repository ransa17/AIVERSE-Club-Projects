// components/landing/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-mainBlue text-white mt-12 py-8 text-center text-sm">
      <div className="max-w-6xl mx-auto">
        © {new Date().getFullYear()} Price Tracker — Built by AIVERSE
      </div>
    </footer>
  );
}

