"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/motion";
import { featuredCollections } from "@/lib/mock-data";

export function FeaturedCollection() {
  return (
    <section id="featured-collection" className="py-20 sm:py-24">
      <div className="container-page space-y-10">
        <SectionHeading
          eyebrow="Featured collection"
          title="Curated edits that feel editorial, but shop like essentials."
          description="A premium assortment of shades and formulas designed to create a luxurious first impression and a clear shopping path."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {featuredCollections.map((collection) => (
            <motion.article key={collection.title} variants={fadeUp}>
              <Card className="overflow-hidden p-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-beige-50">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="space-y-4 p-6">
                  <h3 className="font-serif text-3xl text-charcoal-900">{collection.title}</h3>
                  <p className="text-sm leading-7 text-charcoal-800/70">{collection.subtitle}</p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-charcoal-900">
                    Shop collection
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
