"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { ProductCard } from "@/components/site/product-card";
import { fadeUp, stagger } from "@/lib/motion";
import { products } from "@/lib/mock-data";

export function BestSellersSection() {
  return (
    <section id="best-sellers" className="py-20 sm:py-24">
      <div className="container-page space-y-10">
        <SectionHeading
          eyebrow="Best sellers"
          title="The products shoppers return to for polish, comfort, and confidence."
          description="A conversion-led edit of hero products with strong social proof, premium texture cues, and clear shade storytelling."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {products.slice(0, 6).map((product) => (
            <motion.div key={product.id} variants={fadeUp}>
              <ProductCard product={product} compact />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
