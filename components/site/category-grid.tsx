"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/section-heading";
import { CategoryCard } from "@/components/site/category-card";
import { fadeUp, stagger } from "@/lib/motion";
import { categories } from "@/lib/mock-data";

export function CategoryGrid() {
  return (
    <section id="categories" className="py-20 sm:py-24">
      <div className="container-page space-y-10">
        <SectionHeading
          eyebrow="Shop by category"
          title="Shop with clarity across the core beauty wardrobe."
          description="A simple category system helps users move quickly from discovery to product exploration, especially on mobile."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={fadeUp}>
              <CategoryCard {...category} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
