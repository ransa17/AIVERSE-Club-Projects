// app/contact.tsx or pages/contact.tsx
import React from "react";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-10">
        <h1 className="text-4xl font-bold text-center text-teal-400">Contact AIVERSE</h1>
        <p className="text-lg text-gray-300 text-center">
          Have questions, ideas, or want to collaborate? Reach out to the AIVERSE team — we’d love to hear from you.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400">Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              className="mt-1 w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Or email us directly at <span className="text-teal-300">aiverse.club@gmail.com</span>
        </div>
      </div>
    </main>
  );
}