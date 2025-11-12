// app/about.tsx or pages/about.tsx (depending on your Next.js version)
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-4xl font-bold text-center text-cyan-400">About AIVERSE</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to <span className="text-cyan-300 font-semibold">AIVERSE</span> — a vibrant community of innovators, learners, and creators passionate about the future of technology. Our club is dedicated to exploring the cutting-edge realms of <span className="text-cyan-300 font-semibold">Artificial Intelligence</span>, <span className="text-cyan-300 font-semibold">Machine Learning</span>, and <span className="text-cyan-300 font-semibold">Web Development</span>. Whether you're building intelligent systems, crafting beautiful user interfaces, or diving deep into data-driven solutions, AIVERSE is your launchpad.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          We host hands-on workshops, collaborative hackathons, and expert-led sessions to empower our members with real-world skills. Our goal is to foster a culture of curiosity, creativity, and continuous learning — where ideas turn into impactful projects. From neural networks to Next.js, from data pipelines to design systems, AIVERSE is where code meets community.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          Join us in shaping the future. Whether you're a beginner or a seasoned developer, AIVERSE welcomes you to grow, build, and innovate together.
        </p>
      </div>
    </main>
  );
}