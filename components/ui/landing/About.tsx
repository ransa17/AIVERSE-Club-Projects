import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-[#23272a] px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full space-y-6">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[var(--primary)]">
          About AIVERSE
        </h1>

        {/* Paragraph 1 */}
        <p className="text-lg leading-relaxed text-gray-700">
          Welcome to{" "}
          <span className="font-semibold text-[var(--primary)]">AIVERSE</span> — a vibrant 
          community of innovators, learners, and creators passionate about the 
          future of technology. Our club is dedicated to exploring the cutting-edge 
          realms of{" "}
          <span className="font-semibold text-[var(--primary)]">
            Artificial Intelligence
          </span>
          ,{" "}
          <span className="font-semibold text-[var(--primary)]">
            Machine Learning
          </span>
          , and{" "}
          <span className="font-semibold text-[var(--primary)]">
            Web Development
          </span>
          . Whether you're building intelligent systems, crafting beautiful 
          user interfaces, or diving deep into data-driven solutions, AIVERSE 
          is your launchpad.
        </p>

        {/* Paragraph 2 */}
        <p className="text-lg leading-relaxed text-gray-700">
          We host hands-on workshops, collaborative hackathons, and expert-led 
          sessions to empower our members with real-world skills. Our goal is 
          to foster a culture of curiosity, creativity, and continuous learning — 
          where ideas turn into impactful projects. From neural networks to 
          Next.js, from data pipelines to design systems, AIVERSE is where 
          code meets community.
        </p>

        {/* Paragraph 3 */}
        <p className="text-lg leading-relaxed text-gray-700">
          Join us in shaping the future. Whether you're a beginner or a seasoned 
          developer, AIVERSE welcomes you to grow, build, and innovate together.
        </p>
      </div>
    </main>
  );
}
