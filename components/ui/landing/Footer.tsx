import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 text-sm text-gray-600 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center space-y-4">
        {/* Top section: Branding and Copyright */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-2 text-center">
          <span className="font-semibold text-gray-800">
            Amazon Price History Tracker — Built by AIVERSE
          </span>
          <span>© {new Date().getFullYear()} — All rights reserved.</span>
        </div>

        {/* Bottom section: Links */}
        <div className="flex space-x-6 justify-center">
          <a href="/About" className="hover:text-gray-900 transition">About</a>
          <a href="/Privacy" className="hover:text-gray-900 transition">Privacy</a>
          <a href="/Contact" className="hover:text-gray-900 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}