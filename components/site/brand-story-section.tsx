"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/motion";
import { storyStats } from "@/lib/mock-data";

export function BrandStorySection() {
  return (
    <section id="brand-story" className="py-20 sm:py-24">
      <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-14">
        <SectionHeading
          eyebrow="Brand story"
          title="Designed to feel like a soft luxury beauty house from the first scroll."
          description="DRM Beauty combines refined visuals, structured product storytelling, and premium motion language to support trust and conversion."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
        >
          {storyStats.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <Card className="p-6">
                <p className="font-serif text-4xl text-charcoal-900">{item.value}</p>
                <p className="mt-2 text-sm text-charcoal-800/70">{item.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
