"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/motion";
import { heroHighlights } from "@/lib/mock-data";

export function HeroSection() {
  return (
    <section id="top" className="overflow-hidden pt-10 sm:pt-14">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-8">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-rosegold-200 bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-charcoal-800 shadow-soft"
          >
            <Sparkles className="h-3.5 w-3.5 text-rosegold-300" />
            Premium beauty, softened by light
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] text-charcoal-900 text-balance sm:text-6xl md:text-7xl">
              Elevated makeup essentials for a polished, modern glow.
            </h1>
            <p className="max-w-xl text-base leading-8 text-charcoal-800/75 sm:text-lg">
              DRM Beauty is a soft-luxury cosmetics storefront prototype designed to feel premium,
              conversion-focused, and effortless across mobile and desktop.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="min-w-44">
              Shop the edit
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" className="min-w-44">
              Discover the brand
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
            {heroHighlights.map((item) => (
              <Card key={item} className="px-4 py-4">
                <p className="text-sm leading-6 text-charcoal-800/80">{item}</p>
              </Card>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 1 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-rosegold-100/30 via-white to-beige-100/70 blur-3xl" />
          <Card className="relative overflow-hidden border-white/80 p-4 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-beige-100 via-white to-rosegold-100/60">
                <Image
                  src="/placeholders/hero-product.svg"
                  alt="DRM Beauty hero products"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid gap-4">
                <Card className="p-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-charcoal-700/55">Hero offer</p>
                  <p className="mt-2 font-serif text-3xl text-charcoal-900">Glow set</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal-800/70">
                    Editor-curated essentials with a premium, polished finish.
                  </p>
                </Card>
                <Card className="p-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-charcoal-700/55">Summer note</p>
                  <p className="mt-2 font-serif text-3xl text-charcoal-900">Soft focus</p>
                  <p className="mt-2 text-sm leading-6 text-charcoal-800/70">
                    Seamless textures, elevated shades, and effortless everyday wear.
                  </p>
                </Card>
              </div>
            </div>
          </Card>

          <div className="absolute -bottom-6 left-4 right-4 grid gap-3 sm:-bottom-8 sm:left-10 sm:right-auto sm:max-w-sm">
            <Card className="glass-panel p-4 shadow-luxe">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-charcoal-700/55">Best seller</p>
                  <p className="mt-1 font-medium text-charcoal-900">Satin Lipstick in Petal Nude</p>
                </div>
                <span className="rounded-full bg-charcoal-900 px-3 py-1 text-xs font-semibold text-white">
                  ₹1,299
                </span>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
