// components/landing/Header.tsx
import Link from "next/link";
import React from "react";


export default function Header() {
  return (
    <header className="py-4 px-6 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#23272a]">PriceHistory</Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm">Deals</Link>
          <Link href="#" className="text-sm">Extension</Link>
          <Link href="/dashboard.tsx" className="text-sm">Dashboard</Link> {/* This links to Dashboard */}
        </nav>
      </div>
    </header>
  );
}
// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState } from "react";

// const navLinks = [
//   { name: "Deals", href: "/Deals" },
//   { name: "Extension", href: "/Extension" },
//   { name: "Dashboard", href: "C:\codes\club_project\AIVERSE-Club-Projects\app\Dashboard\Dashboard.tsx" },
// ];

// export default function Header() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-[#23272a]">
//           PriceHistory
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`text-sm transition hover:text-blue-600 ${
//                 pathname === link.href ? "font-semibold text-blue-600" : "text-gray-700"
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Nav */}
//       {menuOpen && (
//         <nav className="md:hidden px-4 pb-4 flex flex-col gap-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className={`text-sm transition hover:text-blue-600 ${
//                 pathname === link.href ? "font-semibold text-blue-600" : "text-gray-700"
//               }`}
//               onClick={() => setMenuOpen(false)}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   );
// }
