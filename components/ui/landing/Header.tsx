"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/Deals", label: "Deals" },
  { href: "/Dashboard", label: "Dashboard" },
  { href: "/About", label: "About" },
  { href: "/Contact", label: "Contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-slate-900 text-slate-100">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        <div className="flex h-16 items-center justify-between">
          
          
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-slate-100 tracking-wide">
              PriceHistory
            </span>

            
            <span className="text-xs text-slate-400">
              Smarter shopping starts here
            </span>
          </div>

          {/* CENTER: Desktop nav tabs */}
          <div className="hidden md:flex items-center gap-1 rounded-full bg-slate-800/60 px-1 py-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={classNames(
                  "px-3 py-1.5 text-sm rounded-full transition-colors",
                  isActive(item.href)
                    ? "bg-slate-100 text-slate-900 font-semibold"
                    : "text-slate-300 hover:text-slate-100 hover:bg-slate-700/70"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* RIGHT: removed icons → empty spacer */}
          <div className="hidden md:flex items-center">
            {/* empty on purpose */}
          </div>

          {/* MOBILE hamburger button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 hover:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-[var(--primary)]"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-5 bg-current mb-1.5" />
            <span className="block h-0.5 w-5 bg-current mb-1.5" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="space-y-1 rounded-lg bg-slate-800/80 p-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={classNames(
                    "block rounded-md px-3 py-2 text-sm font-medium",
                    isActive(item.href)
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-200 hover:bg-slate-700 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
