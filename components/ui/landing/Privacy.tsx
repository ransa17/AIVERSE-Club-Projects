// app/privacy.tsx or pages/privacy.tsx
import React from "react";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#23272a] px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center text-[var(--primary)]">
          Privacy Policy
        </h1>
        <p className="text-lg leading-relaxed text-gray-700">
          At{" "}
          <span className="font-semibold text-[var(--primary)]">AIVERSE</span>, we value your privacy and are committed
          to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard data
          when you interact with our club, website, or digital platforms.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          We may collect basic information such as your name, email address, and interests when you sign up for events,
          newsletters, or participate in club activities. This data is used solely to improve your experience,
          personalize communication, and organize relevant opportunities.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          We do not sell, trade, or share your personal information with third parties. All data is stored securely and
          used only for internal club purposes. You have the right to access, update, or request deletion of your data
          at any time.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          By engaging with AIVERSE, you agree to the terms of this Privacy Policy. We may update this policy
          periodically, and any changes will be reflected on this page. For questions or concerns, feel free to contact
          our team.
        </p>
      </div>
    </main>
  );
}
