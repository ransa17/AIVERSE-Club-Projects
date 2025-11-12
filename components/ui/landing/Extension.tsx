// app/extension.tsx or pages/extension.tsx
import React from "react";

const extensions = [
  {
    name: "GitHub Copilot",
    description: "AI-powered coding assistant that helps you write code faster and smarter.",
    category: "AI Tools",
    link: "https://github.com/features/copilot",
  },
  {
    name: "Prettier",
    description: "Code formatter for consistent styling across your JavaScript and TypeScript projects.",
    category: "Web Dev",
    link: "https://prettier.io/",
  },
  {
    name: "Live Server",
    description: "Launch a local development server with live reload for static and dynamic pages.",
    category: "Productivity",
    link: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
  },
];

export default function Extension() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-sky-400">Recommended Extensions</h1>
        <p className="text-lg text-gray-300 text-center">
          Boost your workflow with these curated tools and extensions for AI/ML and Web Development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {extensions.map((ext, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-sky-500/30 transition duration-300"
            >
              <span className="text-sm text-sky-300 font-medium uppercase">{ext.category}</span>
              <h2 className="text-xl font-semibold text-white mt-2">{ext.name}</h2>
              <p className="text-gray-400 mt-2">{ext.description}</p>
              <a
                href={ext.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sky-400 hover:underline text-sm font-medium"
              >
                Visit Extension →
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}