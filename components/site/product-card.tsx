"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/mock-data";

type ProductCardProps = {
  product: Product;
  compact?: boolean;
};

export function ProductCard({ product, compact = false }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Card className="overflow-hidden p-0">
        <div className="relative overflow-hidden bg-beige-50/80">
          <div className={cn("relative", compact ? "aspect-[4/5]" : "aspect-[4/5]") }>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          {product.badge ? (
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-charcoal-800 shadow-soft">
              {product.badge}
            </div>
          ) : null}
          <button
            type="button"
            aria-label={`Save ${product.name}`}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal-900 shadow-soft transition-transform hover:scale-105"
          >
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <div className="space-y-4 p-5 sm:p-6">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-charcoal-700/65">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span>{product.rating.toFixed(1)}</span>
              <span>({product.reviewCount} reviews)</span>
            </div>
            <h3 className={cn("font-serif text-charcoal-900", compact ? "text-xl" : "text-2xl")}>
              {product.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-charcoal-800/70">{product.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.variants.slice(0, 3).map((variant) => (
              <span
                key={variant}
                className="rounded-full border border-border bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal-700/80"
              >
                {variant}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-charcoal-700/60">Price</p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-lg font-semibold text-charcoal-900">₹{product.price}</span>
                <span className="text-xs text-charcoal-700/45 line-through">₹{product.mrp}</span>
              </div>
            </div>
            <Button size="sm" className="min-w-28">
              Add to bag
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
