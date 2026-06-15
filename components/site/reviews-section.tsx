"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";
import { fadeUp, stagger } from "@/lib/motion";
import { reviews } from "@/lib/mock-data";

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="container-page space-y-10">
        <SectionHeading
          eyebrow="Customer reviews"
          title="Social proof that feels polished, trustworthy, and on-brand."
          description="The review section balances emotional language with conversion cues so it reads premium without losing clarity."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {reviews.map((review) => (
            <motion.article key={review.name} variants={fadeUp}>
              <Card className="h-full p-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-charcoal-800/75">“{review.quote}”</p>
                <div className="mt-6">
                  <p className="font-medium text-charcoal-900">{review.name}</p>
                  <p className="text-sm text-charcoal-700/55">{review.role}</p>
                </div>
              </Card>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}