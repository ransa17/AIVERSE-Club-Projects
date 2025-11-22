import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#23272a] px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-10">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[var(--primary)]">
          Contact AIVERSE
        </h1>

        <p className="text-lg text-gray-600 text-center">
          Have questions, ideas, or want to collaborate? Reach out to the AIVERSE team — we’d love to hear from you.
        </p>

        {/* Form */}
        <form className="space-y-6">

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full px-4 py-2 rounded-md bg-white text-[#23272a] border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 rounded-md bg-white text-[#23272a] border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="mt-1 w-full px-4 py-2 rounded-md bg-white text-[#23272a] border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[var(--primary)] hover:opacity-90 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Footer note */}
        <div className="text-center text-sm text-gray-500">
          Or email us directly at{" "}
          <span className="font-medium text-[var(--primary)]">
            aiverse.club@gmail.com
          </span>
        </div>

      </div>
    </main>
  );
}
