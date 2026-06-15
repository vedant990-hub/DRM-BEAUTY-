"use client";

import Link from "next/link";
import { Menu, ShoppingBag, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/mock-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur-xl">
      <div className="border-b border-white/50 bg-charcoal-900 px-4 py-2 text-center text-[11px] font-medium uppercase tracking-[0.25em] text-white/90 sm:text-xs">
        Complimentary shipping above ₹1999 | Premium beauty essentials, curated for modern rituals
      </div>
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="#top" className="inline-flex items-center gap-3 text-charcoal-900">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal-900 text-white shadow-luxe">
            <Sparkles className="h-4 w-4" />
          </span>
          <span>
            <span className="block font-serif text-2xl leading-none">DRM</span>
            <span className="block text-[10px] uppercase tracking-[0.32em] text-charcoal-700/60">Beauty</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-charcoal-800/75 transition-colors hover:text-charcoal-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm" className="rounded-full">
            Search
          </Button>
          <Button variant="secondary" size="sm" className="rounded-full">
            <ShoppingBag className="h-4 w-4" />
            Cart
          </Button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 text-charcoal-900 shadow-sm md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-px bg-gradient-to-r from-transparent via-rosegold-300 to-transparent"
      />
    </header>
  );
}
